#!/usr/bin/env ruby

require "json"
require "yaml"
require "fileutils"
require "pathname"

SOURCE_ROOT = Pathname.new(ARGV.fetch(0, "/Users/joel/Documents/aw skills/design-md"))
PROJECT_ROOT = Pathname.new(__dir__).parent
DATASET_DIR = PROJECT_ROOT.join("dataset")
TEMPLATE_DIR = PROJECT_ROOT.join("template")

PUBLIC_FONT_URL = {
  "Anton" => "https://fonts.google.com/specimen/Anton",
  "Archivo" => "https://fonts.google.com/specimen/Archivo",
  "Archivo Black" => "https://fonts.google.com/specimen/Archivo+Black",
  "Arimo" => "https://fonts.google.com/specimen/Arimo",
  "Bebas Neue" => "https://fonts.google.com/specimen/Bebas+Neue",
  "Cal Sans" => "https://fonts.google.com/specimen/Cal+Sans",
  "Cormorant Garamond" => "https://fonts.google.com/specimen/Cormorant+Garamond",
  "DM Sans" => "https://fonts.google.com/specimen/DM+Sans",
  "EB Garamond" => "https://fonts.google.com/specimen/EB+Garamond",
  "Geist" => "https://fonts.google.com/specimen/Geist",
  "Geist Mono" => "https://fonts.google.com/specimen/Geist+Mono",
  "IBM Plex Mono" => "https://fonts.google.com/specimen/IBM+Plex+Mono",
  "IBM Plex Sans" => "https://fonts.google.com/specimen/IBM+Plex+Sans",
  "Inconsolata" => "https://fonts.google.com/specimen/Inconsolata",
  "Instrument Serif" => "https://fonts.google.com/specimen/Instrument+Serif",
  "Inter" => "https://fonts.google.com/specimen/Inter",
  "Inter Tight" => "https://fonts.google.com/specimen/Inter+Tight",
  "JetBrains Mono" => "https://fonts.google.com/specimen/JetBrains+Mono",
  "Kalam" => "https://fonts.google.com/specimen/Kalam",
  "Lora" => "https://fonts.google.com/specimen/Lora",
  "Manrope" => "https://fonts.google.com/specimen/Manrope",
  "Mona Sans" => "https://fonts.google.com/specimen/Mona+Sans",
  "Newsreader" => "https://fonts.google.com/specimen/Newsreader",
  "Nunito" => "https://fonts.google.com/specimen/Nunito",
  "Playfair Display" => "https://fonts.google.com/specimen/Playfair+Display",
  "Roboto" => "https://fonts.google.com/specimen/Roboto",
  "Rubik" => "https://fonts.google.com/specimen/Rubik",
  "Saira Condensed" => "https://fonts.google.com/specimen/Saira+Condensed",
  "Sofia Sans" => "https://fonts.google.com/specimen/Sofia+Sans",
  "Source Sans 3" => "https://fonts.google.com/specimen/Source+Sans+3",
  "Source Serif 4" => "https://fonts.google.com/specimen/Source+Serif+4",
  "Space Grotesk" => "https://fonts.google.com/specimen/Space+Grotesk",
  "Space Mono" => "https://fonts.google.com/specimen/Space+Mono",
  "Tinos" => "https://fonts.google.com/specimen/Tinos"
}.freeze

# Private families are replaced in both active tokens and prose. Keep this list
# separate from generic CSS families so prose such as "sans-serif" stays intact.
PRIVATE_FONT_RULES = [
  [/Airbnb Cereal(?: VF)?|Circular/i, "Inter"],
  [/Haas Groot(?: Disp)?|Haas Grotesk/i, "Inter"],
  [/SF Pro(?: Display| Text| Rounded)?/i, "Inter"],
  [/BinanceNova|BinancePlex/i, "Inter"],
  [/BMW ?Type(?: Next Latin)?(?: Light)?/i, "Inter"],
  [/Kraken-Brand|Kraken-Product/i, "IBM Plex Sans"],
  [/Bugatti Monospace/i, "JetBrains Mono"],
  [/Bugatti Text(?: Regular)?/i, "Cormorant Garamond"],
  [/Bugatti Display/i, "Saira Condensed"],
  [/LamboType/i, "Saira Condensed"],
  [/WiredDisplay/i, "Playfair Display"],
  [/BreveText/i, "Lora"],
  [/PP Editorial Old|Domaine Display|Copernicus|Tiempos Headline|Waldenburg/i, "Cormorant Garamond"],
  [/Manuka/i, "Anton"],
  [/Nike Futura(?: ND)?|Futura ND/i, "Bebas Neue"],
  [/Plain Black/i, "Archivo Black"],
  [/PlayStation SST/i, "Roboto"],
  [/SpotifyMix(?:UI)?/i, "DM Sans"],
  [/MarkForMC/i, "Sofia Sans"],
  [/MarkOffcForMC|SofiaSans/i, "Sofia Sans"],
  [/NouvelR/i, "Inter Tight"],
  [/Degular Display|GT Walsheim(?: Framer)?(?: Medium)?/i, "Mona Sans"],
  [/Forma DJR Micro/i, "Manrope"],
  [/Wise Sans/i, "Manrope"],
  [/Coinbase Display|Coinbase Sans/i, "Inter"],
  [/Coinbase Mono/i, "JetBrains Mono"],
  [/CursorGothic/i, "Inter"],
  [/FerrariSans/i, "Inter"],
  [/figmaSans/i, "Inter"],
  [/figmaMono/i, "JetBrains Mono"],
  [/hashicorpSans/i, "Inter"],
  [/Linear Display|Linear Text/i, "Inter"],
  [/Linear Mono/i, "JetBrains Mono"],
  [/NVIDIA-EMEA/i, "Inter"],
  [/Optimistic VF/i, "Inter"],
  [/Pin Sans/i, "Inter"],
  [/Roobert PRO/i, "Inter"],
  [/Notion Sans/i, "Inter"],
  [/Vodafone(?: Rg)?/i, "Inter"],
  [/WF Visual Sans(?: Variable| family)?/i, "Inter"],
  [/WFVisualSans-Mono/i, "Inconsolata"],
  [/Universal Sans(?: Display| Text)?|universalSans/i, "Inter"],
  [/Aeonik Pro/i, "Inter"],
  [/abcDiatype/i, "Inter"],
  [/basier-square/i, "Inter"],
  [/SaansMono/i, "JetBrains Mono"],
  [/Saans/i, "Inter"],
  [/Super Sans VF|The Future|sohne-var|Sohne|Söhne|Apercu/i, "Inter"],
  [/Salesforce-Sans|Salesforce-Avant-Garde/i, "Inter"],
  [/UberMoveText|UberMove/i, "Inter"],
  [/CohereMono/i, "JetBrains Mono"],
  [/CohereText|Unica77 Cohere Web/i, "Space Grotesk"],
  [/PolySans Mono/i, "Space Mono"],
  [/PolySans/i, "Space Grotesk"],
  [/FK Roman/i, "Newsreader"],
  [/D-DIN(?:-Bold)?/i, "Saira Condensed"],
  [/Berkeley Mono/i, "JetBrains Mono"]
].freeze

PROSE_FONT_RULES = PRIVATE_FONT_RULES + [
  [/Arial Black/i, "Archivo Black"],
  [/Helvetica Neue|Helvetica|Arial/i, "Arimo"],
  [/Times New Roman|Times Roman/i, "Tinos"],
  [/SF Mono|SFMono-Regular|Monaco|Menlo|Consolas|Liberation Mono|Courier New|Ubuntu Mono/i, "JetBrains Mono"],
  [/Gotham/i, "Inter"]
].freeze

# Ordered from the most distinctive names to generic families. Every active
# typography token is rewritten to one public Google Fonts family.
FONT_RULES = PRIVATE_FONT_RULES + [
  [/WiredDisplay/i, "Playfair Display"],
  [/BreveText/i, "Lora"],
  [/PP Editorial Old|Domaine Display|Copernicus|Tiempos Headline|Waldenburg/i, "Cormorant Garamond"],
  [/Bugatti Text/i, "Cormorant Garamond"],
  [/Bugatti Display|LamboType/i, "Saira Condensed"],
  [/Manuka/i, "Anton"],
  [/Nike Futura|Futura ND/i, "Bebas Neue"],
  [/Arial Black|Helvetica Black|Plain Black/i, "Archivo Black"],
  [/PlayStation SST/i, "Roboto"],
  [/SF Pro Rounded/i, "Nunito"],
  [/SpotifyMix/i, "DM Sans"],
  [/MarkForMC/i, "Sofia Sans"],
  [/NouvelR/i, "Inter Tight"],
  [/Degular Display|GT Walsheim/i, "Mona Sans"],
  [/Forma DJR Micro/i, "Manrope"],
  [/Wise Sans/i, "Manrope"],
  [/Bugatti Monospace|Coinbase Mono|Linear Mono|SaansMono|CohereMono|figmaMono|GeistMono|WFVisualSans-Mono|Berkeley Mono|SF Mono|SFMono|ui-monospace|monospace/i, "JetBrains Mono"],
  [/JetBrains[- ]Mono/i, "JetBrains Mono"],
  [/IBM Plex Mono/i, "IBM Plex Mono"],
  [/DM Mono/i, "JetBrains Mono"],
  [/Source Code Pro/i, "JetBrains Mono"],
  [/Inconsolata/i, "Inconsolata"],
  [/Instrument Serif/i, "Instrument Serif"],
  [/Cormorant Garamond/i, "Cormorant Garamond"],
  [/EB Garamond/i, "EB Garamond"],
  [/Playfair Display/i, "Playfair Display"],
  [/Source Serif(?: Pro| 4)?/i, "Source Serif 4"],
  [/Newsreader/i, "Newsreader"],
  [/Lora/i, "Lora"],
  [/Kalam/i, "Kalam"],
  [/Times New Roman|Times Roman|\bTimes\b|(?<!sans-)\bserif\b/i, "Tinos"],
  [/Saira Condensed/i, "Saira Condensed"],
  [/Bebas Neue/i, "Bebas Neue"],
  [/Anton/i, "Anton"],
  [/Archivo Black/i, "Archivo Black"],
  [/Archivo/i, "Archivo"],
  [/Cal Sans/i, "Cal Sans"],
  [/Mona Sans/i, "Mona Sans"],
  [/Manrope/i, "Manrope"],
  [/Space Grotesk|PolySans/i, "Space Grotesk"],
  [/Space Mono|PolySans Mono/i, "Space Mono"],
  [/Sofia Sans/i, "Sofia Sans"],
  [/Geist Mono/i, "Geist Mono"],
  [/Geist/i, "Geist"],
  [/IBM Plex Sans(?: Variable)?/i, "IBM Plex Sans"],
  [/Rubik/i, "Rubik"],
  [/DM Sans/i, "DM Sans"],
  [/Roboto/i, "Roboto"],
  [/Source Sans(?: Pro| 3)?/i, "Source Sans 3"],
  [/Inter Tight/i, "Inter Tight"],
  [/Inter(?: Display| Variable)?/i, "Inter"],
  [/Arial|Helvetica|system-ui|ui-sans-serif|sans-serif/i, "Arimo"]
].freeze

BRAND_FONT_OVERRIDES = {
  "starbucks" => [[/Lander Tall/i, "Lora"], [/SoDoSans/i, "Inter"]],
  "theverge" => [[/FK Roman/i, "Newsreader"]],
  "replicate" => [[/The Future/i, "Inter"]],
  "resend" => [[/ABC Favorit/i, "Inter"]]
}.freeze

FONT_ADJUSTMENTS = {
  "airbnb" => "Reduce display line-height about 2% to mimic the tighter cap height.",
  "airtable" => "Reduce display line-height about 5%.",
  "apple" => "Use Inter 600 with ss03; tighten display tracking by 0.01em and body line-height by about 0.03.",
  "binance" => "Reduce display line-height about 3%.",
  "bmw" => "Use Inter 700/300; use Saira Condensed only where a compressed headline is needed.",
  "bmw-m" => "Use Inter 700/300 and -0.5px tracking on display headlines.",
  "bugatti" => "Preserve the display/serif/mono three-family split; add 0.05em tracking to Saira Condensed.",
  "cal" => "Cal Sans is public; if unavailable, use Inter 600 with -0.04em tracking.",
  "claude" => "Use Cormorant Garamond 500 with -0.02em tracking for editorial display roles.",
  "coinbase" => "Use Inter 400 with -1.5% tracking for display and JetBrains Mono 500 for mono.",
  "composio" => "Use Inter 500 with -1.5% tracking.",
  "figma" => "With Inter, reduce line-height by about 0.02 to compensate for its taller x-height.",
  "hp" => "Use Manrope directly; keep body line-height 1.4 and display line-height 1.0.",
  "linear.app" => "Use Inter 500/600/700 and JetBrains Mono 400.",
  "mastercard" => "Preserve -2% headline tracking and variable body weight 450 when using Sofia Sans.",
  "nike" => "Use Bebas Neue 500, uppercase, at 0.9 line-height for display; Inter for UI.",
  "ollama" => "Use Nunito 500/600 for rounded headings and Inter for body.",
  "playstation" => "Use Roboto 300 for display; preserve the positive display tracking.",
  "renault" => "Clamp Inter Tight display line-height to 0.95.",
  "sentry" => "Reduce Space Grotesk display line-height by 0.05.",
  "stripe" => "Use Inter 300 with -1.4px tracking and ss01 for display.",
  "supabase" => "Use Inter 500 with -1.92px tracking for display.",
  "theverge" => "When using Anton, loosen display line-height from 0.80 to about 0.95.",
  "together.ai" => "Use Inter 400/500 with ss01 and about -0.6% display tracking.",
  "vercel" => "Use Inter with ss01/ss02 and JetBrains Mono at 12–13px.",
  "webflow" => "Use Inter with ss01 and Inconsolata for mono roles.",
  "wired" => "Keep serif faces for narrative and sans faces for structure.",
  "x.ai" => "Use Inter 400 with -0.04em to -0.02em display tracking.",
  "zapier" => "Use Mona Sans 500 at hero scale and Inter for body."
}.freeze

def scalar(value)
  return value unless value.is_a?(String)
  value.strip
end

def repair_frontmatter(text)
  text.lines.map do |line|
    if line.match?(/^description:\s+/) && !line.match?(/^description:\s*(?:["'|>])/)
      "description: #{line.sub(/^description:\s*/, '').strip.to_json}\n"
    else
      line
    end
  end.join
end

def split_document(text)
  return [{}, text, "markdown"] unless text.start_with?("---\n")
  match = text.match(/\A---\n(.*?)\n---\n?/m)
  return [{}, text, "markdown"] unless match
  yaml = repair_frontmatter(match[1])
  data = YAML.safe_load(yaml, permitted_classes: [], aliases: true) || {}
  [data, text[match.end(0)..] || "", "yaml+markdown"]
rescue Psych::SyntaxError
  [{}, text, "markdown"]
end

def public_family(value, brand)
  raw = value.to_s
  rules = (BRAND_FONT_OVERRIDES[brand] || []) + FONT_RULES
  match = rules.find { |pattern, _family| raw.match?(pattern) }
  match ? match[1] : "Inter"
end

def public_stack(value, brand)
  family = public_family(value, brand)
  generic = ["JetBrains Mono", "IBM Plex Mono", "Inconsolata", "Geist Mono", "Space Mono"].include?(family) ? "monospace" :
    ["Cormorant Garamond", "EB Garamond", "Instrument Serif", "Lora", "Newsreader", "Playfair Display", "Source Serif 4", "Tinos"].include?(family) ? "serif" : "sans-serif"
  "#{family}, #{generic}"
end

def sanitize_text(text, brand)
  return "" if text.nil?
  result = text.dup
  ((BRAND_FONT_OVERRIDES[brand] || []) + PROSE_FONT_RULES).each do |pattern, family|
    result.gsub!(pattern, family)
  end
  result.gsub!(/\bproprietary\b/i, "source-specific")
  result.gsub!(/\blicensed\b/i, "source-specific")
  result.gsub!(/\n{3,}/, "\n\n")
  result.strip
end

def markdown_sections(body, brand)
  sections = []
  stack = []
  current = nil
  body.each_line do |line|
    if (m = line.match(/^(\#{1,6})\s+(.+?)\s*$/))
      sections << current if current
      level = m[1].length
      title = m[2].gsub(/[*`]/, "").strip
      stack = stack.take(level - 1)
      stack[level - 1] = title
      current = { "level" => level, "title" => title, "path" => stack.compact.join(" > "), "content" => "" }
    elsif current
      current["content"] << line
    end
  end
  sections << current if current
  sections.each do |s|
    s["content"] = sanitize_text(s["content"], brand)
  end
  sections.reject { |s| s["title"].match?(/font substitutes?/i) }
end

def bullets(text)
  text.to_s.lines.map do |line|
    m = line.match(/^\s*[-*]\s+(.*)$/)
    m && m[1].strip
  end.compact
end

def typography_from_tables(body, brand)
  styles = {}
  lines = body.lines
  lines.each_with_index do |line, index|
    next unless line.match?(/^\s*\|.*Role.*Size.*\|/i)
    headers = line.split("|").map(&:strip).reject(&:empty?)
    cursor = index + 2
    while cursor < lines.length && lines[cursor].match?(/^\s*\|/)
      cells = lines[cursor].split("|").map(&:strip).reject(&:empty?)
      row = headers.zip(cells).to_h
      role = (row["Role"] || row[headers.first]).to_s.downcase.gsub(/[^a-z0-9]+/, "-").gsub(/^-|-$/, "")
      if !role.empty?
        font = row["Font"] || body
        styles[role] = {
          "fontFamily" => public_stack(font, brand),
          "fontSize" => row["Size"],
          "fontWeight" => row["Weight"],
          "lineHeight" => row["Line Height"],
          "letterSpacing" => row["Letter Spacing"]
        }.compact
      end
      cursor += 1
    end
  end
  styles
end

def normalize_typography(raw, body, brand)
  styles = raw.is_a?(Hash) ? Marshal.load(Marshal.dump(raw)) : typography_from_tables(body, brand)
  families = []
  styles.each_value do |style|
    next unless style.is_a?(Hash)
    source = style["fontFamily"] || style[:fontFamily]
    next unless source
    stack = public_stack(source, brand)
    style["fontFamily"] = stack
    style.delete(:fontFamily)
    families << stack.split(",").first
  end
  if styles.empty?
    families << "Inter"
    styles["body"] = { "fontFamily" => "Inter, sans-serif", "fontSize" => "16px", "fontWeight" => 400, "lineHeight" => 1.5, "letterSpacing" => 0 }
  end
  sources = families.uniq.sort.map do |family|
    { "family" => family, "provider" => "Google Fonts", "license" => "Open-source font", "url" => PUBLIC_FONT_URL.fetch(family, PUBLIC_FONT_URL["Inter"]) }
  end
  {
    "publicFontsOnly" => true,
    "families" => sources,
    "styles" => styles,
    "substitutionAdjustment" => FONT_ADJUSTMENTS[brand]
  }
end

def normalize_hash(value)
  value.is_a?(Hash) ? value.transform_keys(&:to_s) : {}
end

def content_for(sections, pattern)
  sections.select { |s| s["path"].match?(pattern) && !s["content"].empty? }.map { |s| { "section" => s["path"], "content" => s["content"] } }
end

def token_colors(frontmatter, text)
  colors = normalize_hash(frontmatter["colors"])
  return colors unless colors.empty?
  text.each_line do |line|
    match = line.match(/^\s*[-*]\s+\*\*([^*]+)\*\*.*?(`?(?:#[0-9a-fA-F]{3,8}|rgba?\([^\n)]+\))`?)/) ||
      line.match(/^\s*[-*]\s+([A-Za-z][A-Za-z0-9 &\/-]{1,40}):.*?(`?(?:#[0-9a-fA-F]{3,8}|rgba?\([^\n)]+\))`?)/) ||
      line.match(/^\s*\|\s*([^|]+?)\s*\|.*?(`?(?:#[0-9a-fA-F]{3,8}|rgba?\([^\n)]+\))`?)/)
    next unless match
    name, value = match.captures
    key = name.downcase.gsub(/[^a-z0-9]+/, "-").gsub(/^-|-$/, "")
    colors[key] ||= value.delete("`")
  end
  colors
end

def collect_numeric_tokens(sections, title_pattern)
  text = sections.select { |s| s["title"].match?(title_pattern) }.map { |s| "#{s['title']}\n#{s['content']}" }.join("\n")
  text.scan(/\b\d+(?:\.\d+)?(?:px|rem|em|%)\b/).uniq
end

def collect_breakpoints(sections)
  selected = sections.select do |s|
    s["title"].match?(/Breakpoints?/i) || s["content"].match?(/^Breakpoints?\s*:/i)
  end
  selected.flat_map do |section|
    values = []
    section["content"].each_line do |line|
      if line.match?(/^\s*\|/) && !line.match?(/^\s*\|\s*(?:Name|-)/i)
        cells = line.split("|").map(&:strip)
        width = cells[2].to_s
        values.concat(width.scan(/\d+(?:\.\d+)?/).map { |number| "#{number}px" })
      elsif line.match?(/breakpoints?[^:]*:/i)
        values.concat(line.scan(/\b\d+(?:\.\d+)?px\b/))
      end
    end
    values
  end.uniq
end

def source_name(frontmatter, body, brand)
  return frontmatter["name"] if frontmatter["name"]
  title = body[/^#\s+(?:Design System Inspired by\s+)?(.+)$/i, 1]
  title || brand.split(/[.-]/).map(&:capitalize).join(" ")
end

def build_record(path)
  brand = path.dirname.basename.to_s
  source = path.read
  frontmatter, body, source_format = split_document(source)
  clean_body = sanitize_text(body, brand)
  sections = markdown_sections(body, brand)
  do_items = sections.select { |s| s["title"].match?(/\ADo\z/i) }.flat_map { |x| bullets(x["content"]) }.uniq
  dont_items = sections.select { |s| s["title"].match?(/\A(?:Don't|Dont|What Not To Do|Avoid)\z/i) }.flat_map { |x| bullets(x["content"]) }.uniq
  component_sections = content_for(sections, /Components?|Buttons?|Cards?|Navigation|Inputs?|Forms?|Badges?|Pills?|Tabs?|Footer|CTA|Configurator|Tables?/i)
  color_source = sections.select { |s| s["path"].match?(/Colors?|Palette|Surface|Brand & Accent|Semantic|Neutrals?|Quick Color/i) }.map { |s| s["content"] }.join("\n")

  record = {
    "schemaVersion" => "1.0.0",
    "brand" => {
      "id" => brand,
      "name" => source_name(frontmatter, body, brand),
      "description" => sanitize_text(frontmatter["description"] || content_for(sections, /Overview|Theme|Atmosphere/i).first&.dig("content") || "", brand),
      "source" => {
        "file" => path.to_s,
        "format" => source_format
      }
    },
    "design" => {
      "overview" => content_for(sections, /Overview|Visual Theme|Atmosphere/i),
      "principles" => content_for(sections, /Principles|Philosophy|Characteristics/i).flat_map { |x| bullets(x["content"]) },
      "signatureElements" => content_for(sections, /Signature|Distinctive|Atmospheric/i)
    },
    "colors" => {
      "tokens" => token_colors(frontmatter, color_source.empty? ? clean_body : color_source),
      "guidance" => content_for(sections, /Colors?|Palette|Surface|Brand & Accent|Semantic|Neutrals?/i)
    },
    "typography" => normalize_typography(frontmatter["typography"], body, brand).merge(
      "guidance" => content_for(sections, /Typography|Font Famil|Hierarchy/i)
    ),
    "layout" => {
      "spacing" => normalize_hash(frontmatter["spacing"]),
      "spacingValues" => collect_numeric_tokens(sections, /Spacing|Whitespace/i),
      "gridAndContainers" => content_for(sections, /Grid|Container|Layout|Distribution|Whitespace/i),
      "responsive" => {
        "breakpoints" => collect_breakpoints(sections),
        "guidance" => content_for(sections, /Responsive|Breakpoint|Collapsing|Touch Targets?|Image Behavior/i)
      }
    },
    "shape" => {
      "radii" => normalize_hash(frontmatter["rounded"]),
      "radiusValues" => collect_numeric_tokens(sections, /Radius/i),
      "guidance" => content_for(sections, /Shapes?|Radius|Borders?|Hairlines?/i)
    },
    "elevation" => {
      "tokens" => {},
      "guidance" => content_for(sections, /Elevation|Depth|Shadows?/i)
    },
    "components" => {
      "tokens" => normalize_hash(frontmatter["components"]),
      "guidance" => component_sections
    },
    "imagery" => {
      "guidance" => content_for(sections, /Photography|Imagery|Image Treatment|Image Behavior|Illustration|Iconography/i)
    },
    "motion" => {
      "guidance" => content_for(sections, /Motion|Animation|Transition/i)
    },
    "content" => {
      "hierarchy" => content_for(sections, /Hierarchy/i),
      "voiceAndTone" => content_for(sections, /Voice|Tone|Content/i)
    },
    "useCases" => {
      "recommended" => do_items,
      "avoid" => dont_items
    },
    "agentGuidance" => {
      "promptGuide" => content_for(sections, /Agent Prompt|Example Prompts?|Component Prompts?/i),
      "iterationGuide" => content_for(sections, /Iteration Guide/i)
    },
    "knownGaps" => content_for(sections, /Known Gaps?/i),
    "additionalGuidance" => []
  }

  classified = record.values.grep(Hash).to_s
  record["additionalGuidance"] = sections.reject do |section|
    section["content"].empty? || section["title"].match?(/Overview|Theme|Atmosphere|Principles|Philosophy|Characteristics|Signature|Distinctive|Colors?|Palette|Surface|Brand & Accent|Semantic|Neutrals?|Typography|Font Famil|Hierarchy|Grid|Container|Layout|Distribution|Whitespace|Responsive|Breakpoint|Collapsing|Touch|Image|Shapes?|Radius|Borders?|Hairlines?|Elevation|Depth|Shadow|Components?|Buttons?|Cards?|Navigation|Inputs?|Forms?|Badges?|Pills?|Tabs?|Footer|CTA|Configurator|Tables?|Photography|Imagery|Illustration|Iconography|Motion|Animation|Transition|Voice|Tone|Content|Do$|Don't|Dont|Avoid|Agent Prompt|Example Prompt|Iteration Guide|Known Gaps?/i)
  end

  record
end

def template_record
  {
    "schemaVersion" => "1.0.0",
    "brand" => { "id" => "", "name" => "", "description" => "", "source" => { "file" => "", "format" => "yaml+markdown|markdown|generated" } },
    "design" => { "overview" => [], "principles" => [], "signatureElements" => [] },
    "colors" => { "tokens" => {}, "guidance" => [] },
    "typography" => { "publicFontsOnly" => true, "families" => [], "styles" => {}, "substitutionAdjustment" => nil, "guidance" => [] },
    "layout" => { "spacing" => {}, "spacingValues" => [], "gridAndContainers" => [], "responsive" => { "breakpoints" => [], "guidance" => [] } },
    "shape" => { "radii" => {}, "radiusValues" => [], "guidance" => [] },
    "elevation" => { "tokens" => {}, "guidance" => [] },
    "components" => { "tokens" => {}, "guidance" => [] },
    "imagery" => { "guidance" => [] },
    "motion" => { "guidance" => [] },
    "content" => { "hierarchy" => [], "voiceAndTone" => [] },
    "useCases" => { "recommended" => [], "avoid" => [] },
    "agentGuidance" => { "promptGuide" => [], "iterationGuide" => [] },
    "knownGaps" => [],
    "additionalGuidance" => []
  }
end

FileUtils.mkdir_p(DATASET_DIR)
FileUtils.mkdir_p(TEMPLATE_DIR)
DATASET_DIR.glob("*.json").each(&:delete)

records = SOURCE_ROOT.glob("*/DESIGN.md").sort.map do |path|
  record = build_record(path)
  DATASET_DIR.join("#{record.dig('brand', 'id')}.json").write(JSON.pretty_generate(record) + "\n")
  record
end

TEMPLATE_DIR.join("design-system.template.json").write(JSON.pretty_generate(template_record) + "\n")
puts "Generated #{records.length} dataset files and 1 template."
