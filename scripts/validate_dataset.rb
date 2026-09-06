#!/usr/bin/env ruby

require "json"
require "pathname"

ROOT = Pathname.new(__dir__).parent
DATASET = ROOT.join("dataset")
TEMPLATE = JSON.parse(ROOT.join("template/design-system.template.json").read)
PUBLIC_FONTS = [
  "Anton", "Archivo", "Arimo", "Cal Sans", "Geist", "Inconsolata", "Inter",
  "Kalam", "Lora", "Manrope", "Newsreader", "Nunito", "Roboto", "Rubik", "Tinos",
  "Archivo Black", "Bebas Neue", "Cormorant Garamond", "DM Sans", "EB Garamond",
  "Geist Mono", "IBM Plex Mono", "IBM Plex Sans", "Instrument Serif", "Inter Tight",
  "JetBrains Mono", "Mona Sans", "Playfair Display", "Saira Condensed", "Sofia Sans",
  "Source Sans 3", "Source Serif 4", "Space Grotesk", "Space Mono"
]

def assert_shape(expected, actual, path, errors)
  unless actual.is_a?(expected.class)
    errors << "#{path}: expected #{expected.class}, got #{actual.class}"
    return
  end
  return unless expected.is_a?(Hash)
  return if expected.empty?
  missing = expected.keys - actual.keys
  extra = actual.keys - expected.keys
  errors << "#{path}: missing keys #{missing.join(', ')}" unless missing.empty?
  errors << "#{path}: extra keys #{extra.join(', ')}" unless extra.empty?
  expected.each do |key, value|
    next unless actual.key?(key)
    assert_shape(value, actual[key], "#{path}.#{key}", errors) if value.is_a?(Hash)
  end
end

files = DATASET.glob("*.json").sort
errors = []
errors << "expected 74 dataset records, found #{files.length}" unless files.length == 74

files.each do |file|
  data = JSON.parse(file.read)
  assert_shape(TEMPLATE, data, file.basename.to_s, errors)
  errors << "#{file.basename}: publicFontsOnly must be true" unless data.dig("typography", "publicFontsOnly") == true
  data.dig("typography", "families").each do |font|
    family = font["family"]
    errors << "#{file.basename}: unapproved font #{family.inspect}" unless PUBLIC_FONTS.include?(family)
    errors << "#{file.basename}: font URL must use fonts.google.com" unless font["url"].start_with?("https://fonts.google.com/specimen/")
  end
  data.dig("typography", "styles").each do |role, style|
    next unless style.is_a?(Hash) && style["fontFamily"]
    family = style["fontFamily"].split(",").first
    errors << "#{file.basename}: #{role} uses unapproved font #{family.inspect}" unless PUBLIC_FONTS.include?(family)
  end
end

if errors.empty?
  puts "Validated #{files.length} dataset files: common shape and public-font policy OK."
else
  warn errors.join("\n")
  exit 1
end
