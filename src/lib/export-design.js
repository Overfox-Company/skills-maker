import { stringify } from "yaml";
import { sections } from "./design-engine.js";
const fenced = (value) =>
  `\n\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`\n`;
const bullets = (values) => values.map((value) => `- ${value}`).join("\n");
const ordered = (values) =>
  values.map((value, index) => `${index + 1}. ${value}`).join("\n");

const exportSectionLabels = {
  colors: "Color palette",
  typography: "Typography",
  layout: "Layout and spacing",
  shape: "Shape and cards",
  elevation: "Shadows and depth",
  buttons: "Buttons",
  inputs: "Fields and controls",
};

const productExperienceProfiles = {
  ecommerce: {
    label: "E-commerce",
    description: "Product discovery, comparison, and purchasing.",
    primaryObjective: "Help people find, evaluate, and buy products with minimal friction.",
    uxPriorities: ["Product discovery", "Search, categories, and filters", "Price, availability, and variants"],
    informationHierarchy: ["Product", "Price and availability", "Purchase action", "Supporting details"],
    navigationPrinciples: ["Keep search, categories, and cart available from discovery views.", "Preserve filters and position when returning from a product detail page.", "Clearly separate browsing, product evaluation, cart, and checkout."],
    interactionPrinciples: ["Let people choose variants and quantities without losing price or availability context.", "Minimize repeated steps and data entry at checkout.", "Give immediate feedback when cart items change."],
    contentPrinciples: ["Show price and availability before a product is opened.", "Use imagery and key attributes to support scanning and comparison.", "Keep secondary information out of the primary purchase path."],
    primaryActions: ["Search products", "Filter and compare", "Select variants", "Add to cart", "Complete purchase"],
    discoveryPatterns: ["Predictive search", "Categories and collections", "Faceted filters", "Related recommendations"],
    trustAndSafetyConsiderations: ["Show total costs, delivery, and terms before confirmation.", "Make returns, warranties, reviews, and authenticity signals easy to find.", "Never preselect paid extras or conceal price changes."],
    commonPatterns: ["Scannable product results", "Purchase-focused product detail", "Persistent cart", "Progressive checkout with summary"],
    patternsToAvoid: ["Hiding price or availability until late in the flow.", "Overloading product cards with secondary information.", "Losing filters or selection while navigating."],
  },
  "video-streaming": {
    label: "Video Streaming",
    description: "Visual discovery, playback continuity, and viewing progress.",
    primaryObjective: "Help people discover content and start or resume playback quickly.",
    uxPriorities: ["Visual discovery", "Relevant recommendations", "Continue watching"],
    informationHierarchy: ["Artwork or thumbnail", "Title", "Playback action", "Essential metadata"],
    navigationPrinciples: ["Prioritize visual collection browsing without losing exploration context.", "Give returning viewers direct access to unfinished content.", "Keep library, search, and profiles predictable across devices."],
    interactionPrinciples: ["Start or resume playback with minimal friction.", "Preserve progress and state across devices.", "Allow saving, rating, and viewing details without unnecessarily interrupting browsing."],
    contentPrinciples: ["Use artwork and titles as the primary discovery signals.", "Show only the metadata needed to decide before playback.", "Explain why a recommendation is relevant when it adds value."],
    primaryActions: ["Play", "Continue watching", "Search content", "Save to library"],
    discoveryPatterns: ["Themed rows and collections", "Personalized recommendations", "Trending and new releases", "Search by title or genre"],
    trustAndSafetyConsiderations: ["Clearly distinguish profiles, parental controls, and age ratings.", "Communicate regional availability and expiration before playback.", "Provide clear controls for history and personalization."],
    commonPatterns: ["Continue watching", "Browsable collections", "Content detail", "Immersive player with contextual controls"],
    patternsToAvoid: ["Overloading browsing with extensive metadata.", "Hiding unfinished content in the catalog.", "Forcing promotional steps before every playback."],
  },
  "delivery-food-ordering": {
    label: "Delivery / Food Ordering",
    description: "Local discovery, fast ordering, and order tracking.",
    primaryObjective: "Help people find what to order and complete an order quickly.",
    uxPriorities: ["Location and address", "Local availability", "Restaurants, products, and categories"],
    informationHierarchy: ["Availability for the current location", "Food or merchant option", "Estimated time", "Price and fees"],
    navigationPrinciples: ["Keep location and address visible before options are explored.", "Clearly separate discovery, order configuration, purchase, and tracking.", "Keep the cart and its merchant associated throughout navigation."],
    interactionPrinciples: ["Make customization and modifier selection straightforward.", "Update totals, minimums, and estimated time as the order changes.", "Adapt primary actions to the current order state."],
    contentPrinciples: ["Show real availability, timing, and costs before people invest in selection.", "Present products in scannable, understandable categories.", "Explain substitutions, allergens, and options unambiguously."],
    primaryActions: ["Confirm location", "Browse merchants or dishes", "Customize and add", "Confirm order", "Track delivery"],
    discoveryPatterns: ["Nearby available options", "Food categories", "Merchant or product search", "Time, price, and preference filters"],
    trustAndSafetyConsiderations: ["Show a complete breakdown of price, fees, and tip before confirmation.", "Keep dietary restrictions and warnings visible.", "Protect address, location, and contact information during tracking."],
    commonPatterns: ["Address selector", "Category menu", "Persistent cart", "Order-status timeline"],
    patternsToAvoid: ["Showing options that do not deliver to the selected location.", "Hiding fees until the last step.", "Losing customizations when the cart is edited."],
  },
  "finance-banking": {
    label: "Finance / Banking",
    description: "Financial understanding, oversight, and secure actions.",
    primaryObjective: "Help people understand their financial position and perform operations safely.",
    uxPriorities: ["Balances and availability", "Transactions and obligations", "Financial trends"],
    informationHierarchy: ["Current financial position", "Relevant figures and meaning", "Recent changes", "Available actions"],
    navigationPrinciples: ["Separate account overview, transactions, operations, and settings.", "Keep the account and period that contextualize each figure visible.", "Provide direct paths from an alert to its explanation."],
    interactionPrinciples: ["Show amount, recipient, fees, and outcome before a critical operation is confirmed.", "Require confirmation proportional to risk.", "Clearly distinguish information, advice, and executable action."],
    contentPrinciples: ["Use unambiguous labels for balance, available funds, debt, income, and spending.", "Pair figures with currency, period, and status.", "Use charts only when they improve interpretation."],
    primaryActions: ["Review balances and transactions", "Transfer or pay", "Review an alert", "Manage methods and limits"],
    discoveryPatterns: ["Financial overview", "Recent activity", "Transaction search and filters", "Actionable alerts"],
    trustAndSafetyConsiderations: ["Mask sensitive data and reveal detail only when needed.", "Make recipient, fees, date, and reversibility explicit.", "Explain blocks, errors, and security controls with next steps."],
    commonPatterns: ["Account summary", "Transaction ledger", "Operation flow with final review", "Verifiable receipt or confirmation"],
    patternsToAvoid: ["Mixing different types of balances without context.", "Using decorative charts or overloaded dashboards.", "Executing critical actions without reviewing the expected outcome."],
  },
  "project-management-productivity": {
    label: "Project Management / Productivity",
    description: "Work organization, status visibility, and efficient editing.",
    primaryObjective: "Help people organize work, understand its status, and update information quickly.",
    uxPriorities: ["Projects and tasks", "Status, owners, and dates", "Filters and search"],
    informationHierarchy: ["Work item and status", "Owner and next relevant date", "Priority and progress", "Project context"],
    navigationPrinciples: ["Keep navigation persistent across workspaces, projects, and work views.", "Preserve filters, grouping, and order when returning from an item.", "Offer list, board, calendar, or timeline views when they serve distinct tasks."],
    interactionPrinciples: ["Allow in-context editing for frequent changes.", "Keep contextual actions close to the item without overwhelming its information.", "Support bulk selection and actions when they reduce repetitive work."],
    contentPrinciples: ["Favor legible high density and state scanning.", "Use consistent names, states, and dates across views.", "Prioritize exceptions, blockers, and upcoming deadlines over routine activity."],
    primaryActions: ["Create work", "Change status or owner", "Filter and search", "Organize and prioritize"],
    discoveryPatterns: ["Global search", "Saved filters", "Grouped views", "Recent activity"],
    trustAndSafetyConsiderations: ["Communicate the scope and consequences of bulk actions.", "Preserve history, authorship, and meaningful changes.", "Prevent silent loss during simultaneous editing or state changes."],
    commonPatterns: ["Dense list or table", "Status board", "Editable detail panel", "Persistent filters"],
    patternsToAvoid: ["Requiring separate screens for small repetitive changes.", "Hiding active filters or view scope.", "Using low density for large volumes of work."],
  },
  "social-network-community": {
    label: "Social Network / Community",
    description: "Content, relationships, interaction, and publishing.",
    primaryObjective: "Help people consume content, interact with people or communities, and publish.",
    uxPriorities: ["Feed and content", "Author identity", "Social interaction"],
    informationHierarchy: ["Content", "Author and publishing context", "Relationship or community", "Social actions"],
    navigationPrinciples: ["Separate content from existing relationships, discovery, and communities.", "Keep creation, notifications, and profile accessible without competing with the feed.", "Preserve context when opening conversations or profiles from a post."],
    interactionPrinciples: ["Place social actions near the content they affect.", "Make creation accessible without involuntarily interrupting consumption.", "Show the result and reversibility of reactions, follows, and saves."],
    contentPrinciples: ["Keep content primary and author identity recognizable.", "Clearly distinguish original, shared, sponsored, and moderated content.", "Collapse secondary context without hiding provenance or safety signals."],
    primaryActions: ["Consume content", "Publish", "Reply or react", "Follow people or communities"],
    discoveryPatterns: ["Relationship feed", "Topic exploration", "Suggested communities", "People and content search"],
    trustAndSafetyConsiderations: ["Offer reporting, blocking, muting, and audience controls near relevant context.", "Explain visibility, moderation, and recommendation use.", "Avoid exposing private information when publishing or sharing."],
    commonPatterns: ["Feed", "Composer", "Conversation threads", "Profiles and communities"],
    patternsToAvoid: ["Letting secondary controls dominate every post.", "Mixing sponsored content in without identification.", "Using undifferentiated notifications to force return visits."],
  },
  "messaging-communication": {
    label: "Messaging / Communication",
    description: "Continuous conversations and low-friction responses.",
    primaryObjective: "Help people maintain conversations with minimal friction and complete context.",
    uxPriorities: ["Recent conversations", "Messages and unread state", "Search"],
    informationHierarchy: ["Active conversation", "New messages and mentions", "Author and time", "Composer and send action"],
    navigationPrinciples: ["Order conversations by recent relevance and distinguish unread items.", "Keep context when switching among list, conversation, thread, and search.", "Make starting a conversation accessible without displacing active ones."],
    interactionPrinciples: ["Keep the composer accessible and reduce steps to respond.", "Integrate media, reactions, and replies without interfering with reading.", "Clearly indicate send, delivery, read, edit, and error states."],
    contentPrinciples: ["Preserve temporal grouping, authorship, and reply relationships.", "Differentiate system messages, quoted content, and new content.", "Let people scan unread messages before recovering full history."],
    primaryActions: ["Read and reply", "Start a conversation", "Search messages", "Share files or media"],
    discoveryPatterns: ["Recent conversations", "Global and in-conversation search", "Mentions and saved messages", "Frequent people or channels"],
    trustAndSafetyConsiderations: ["Make participants, privacy, and encryption clear when applicable.", "Allow blocking, reporting, and invitation controls.", "Prevent accidental sending of sensitive content or messages to the wrong recipient."],
    commonPatterns: ["Conversation list", "Message timeline", "Persistent composer", "Threads and contextual replies"],
    patternsToAvoid: ["Hiding unread messages inside general activity.", "Moving the composer away from the active conversation.", "Losing drafts or reading position when switching conversations."],
  },
  "education-learning": {
    label: "Education / Learning",
    description: "Progression, active learning, and continuity.",
    primaryObjective: "Help people learn material through a clear, verifiable progression.",
    uxPriorities: ["Course, module, and lesson", "Progress", "Next action"],
    informationHierarchy: ["Current content or activity", "Learning objective", "Progress and position", "Next action"],
    navigationPrinciples: ["Make the course-module-lesson relationship and current position explicit.", "Favor sequential navigation without blocking return to earlier content.", "Keep progress, index, and next step accessible."],
    interactionPrinciples: ["Separate content consumption, practice, and assessment.", "Save progress and answers so people can resume without rebuilding context.", "Give specific, actionable feedback after learning activities."],
    contentPrinciples: ["Reduce distractions during focused learning.", "Divide complex content by objectives, not arbitrary size.", "Keep secondary resources available without competing with the lesson."],
    primaryActions: ["Continue learning", "Complete an activity", "Review progress", "Review feedback"],
    discoveryPatterns: ["Continue where you left off", "Learning paths", "Catalog by level and objective", "Resource search"],
    trustAndSafetyConsiderations: ["Distinguish progress, grade, and recommendation.", "Explain assessment criteria and the consequences of attempts.", "Protect minors' data and academic records when applicable."],
    commonPatterns: ["Curriculum index", "Focused lesson", "Progress indicator", "Assessment with feedback"],
    patternsToAvoid: ["Hiding what should happen next.", "Mixing assessment with content without a clear transition.", "Losing progress or answers while navigating."],
  },
  "health-fitness": {
    label: "Health / Fitness",
    description: "Tracking, progress, goals, and sensitive data.",
    primaryObjective: "Help people log activity and understand progress toward personal goals.",
    uxPriorities: ["Current state", "Activity tracking", "Goals"],
    informationHierarchy: ["Current state or activity", "Primary metric with context", "Goal progress", "Relevant trend"],
    navigationPrinciples: ["Separate logging, current activity, progress, and history.", "Provide fast access to the most frequent activity or log.", "Keep period, unit, and source visible when comparing metrics."],
    interactionPrinciples: ["Minimize input needed for frequent logs.", "Allow people to correct data and understand its effect on trends and goals.", "Distinguish measurement, goal, and recommendation before offering actions."],
    contentPrinciples: ["Present primary metrics with understandable units and ranges.", "Prioritize useful trends over large volumes of statistics.", "Avoid diagnostic language when information is not clinical advice."],
    primaryActions: ["Log activity or metric", "Start or finish activity", "Review progress", "Adjust goal"],
    discoveryPatterns: ["Daily or weekly summary", "Recent activities", "Progress by goal", "Meaningful trends"],
    trustAndSafetyConsiderations: ["Treat health, location, and biometrics as sensitive information.", "Explain the source, accuracy, and limitations of measurements.", "Clearly distinguish general wellbeing, recommendation, and professional advice."],
    commonPatterns: ["Quick log", "Status summary", "Goal progress", "Time-based history"],
    patternsToAvoid: ["Overloading people with uninterpreted metrics.", "Presenting estimates as exact measurements.", "Using pressure or guilt to drive activity."],
  },
  "travel-booking": {
    label: "Travel / Booking",
    description: "Search, comparison, and booking with context.",
    primaryObjective: "Help people search, compare, and book travel options with confidence.",
    uxPriorities: ["Destination, dates, and travelers", "Search and results", "Total price and availability"],
    informationHierarchy: ["Match to search parameters", "Total price", "Availability", "Comparable attributes"],
    navigationPrinciples: ["Keep destination, dates, travelers, and filters clear throughout the flow.", "Preserve selection while viewing details and comparing options.", "Separate search, evaluation, booking details, and confirmation."],
    interactionPrinciples: ["Update results and prices when parameters change without losing context.", "Make comparison consistent across equivalent options.", "Show a complete summary before booking."],
    contentPrinciples: ["Present total price, taxes, policies, and restrictions clearly.", "Use photographs to support evaluation without replacing critical data.", "Distinguish confirmed, estimated, and limited availability."],
    primaryActions: ["Define search", "Filter and compare", "Select option", "Review terms", "Book"],
    discoveryPatterns: ["Comparable results", "Travel-needs filters", "Map when it adds geographic context", "Flexible dates"],
    trustAndSafetyConsiderations: ["Show total cost and cancellation terms before asking for payment.", "Identify who provides the service and handles changes.", "Avoid artificial urgency or misleading availability."],
    commonPatterns: ["Persistent search form", "Filterable results", "Option comparison", "Booking summary"],
    patternsToAvoid: ["Hiding taxes or restrictions until payment.", "Losing parameters when returning from a detail page.", "Comparing prices with different inclusions without clarifying them."],
  },
  marketplace: {
    label: "Marketplace",
    description: "Listings, sellers, reputation, and trust.",
    primaryObjective: "Enable trusted transactions between buyers and multiple sellers.",
    uxPriorities: ["Product or listing", "Seller and reputation", "Price and availability"],
    informationHierarchy: ["Product or service", "Offer and price", "Seller and reputation", "Availability and terms"],
    navigationPrinciples: ["Differentiate platform, catalog, offer, and seller at every level.", "Preserve filters and criteria when comparing multiple sellers.", "Keep orders, messages, and issue resolution accessible."],
    interactionPrinciples: ["Allow equivalent offers to be compared by price, condition, and seller.", "Support questions or negotiation when the model calls for it.", "Explain who receives each action and what protection the platform provides."],
    contentPrinciples: ["Clearly attribute descriptions, ratings, and terms.", "Show reputation with enough context, not as an isolated number.", "Distinguish seller policies from platform guarantees."],
    primaryActions: ["Search and filter", "Compare offers", "Review seller", "Buy or book"],
    discoveryPatterns: ["Aggregated catalog", "Offer and seller filters", "Seller comparison", "Verified reputation and reviews"],
    trustAndSafetyConsiderations: ["Make identity, reputation, protection, and dispute paths visible.", "Distinguish verified reviews and possible conflicts of interest.", "Do not expose personal data before the transaction requires it."],
    commonPatterns: ["Listing with multiple offers", "Seller profile", "Buyer-seller messaging", "Orders and disputes center"],
    patternsToAvoid: ["Hiding who sells or is accountable for a transaction.", "Combining product and seller ratings.", "Ranking offers only by paid promotion without disclosure."],
  },
  "saas-dashboard-administration": {
    label: "SaaS Dashboard / Administration",
    description: "System oversight, operational data, and efficient administration.",
    primaryObjective: "Help people monitor a system and perform operations efficiently.",
    uxPriorities: ["KPIs and status", "Operational tables and detail", "Search and filters"],
    informationHierarchy: ["Overall status and exceptions", "Contextual KPIs", "Items requiring action", "Operational data"],
    navigationPrinciples: ["Keep navigation stable across functional domains.", "Separate monitoring, operations, and configuration.", "Preserve filters, columns, and scope when returning from a detail view."],
    interactionPrinciples: ["Support high density, efficient editing, and bulk actions where appropriate.", "Show impact and scope before destructive or broad operations.", "Provide actionable loading, partial-success, and error states."],
    contentPrinciples: ["Show summary first and detail on demand.", "Pair KPIs with period, comparison, and definition.", "Prioritize exceptions over repeated healthy metrics."],
    primaryActions: ["Monitor status", "Search and filter records", "Investigate an alert", "Edit or run an operation"],
    discoveryPatterns: ["Operational overview", "Prioritized alerts", "Filterable tables", "Global search"],
    trustAndSafetyConsiderations: ["Respect permissions and show when an action is restricted.", "Record meaningful operations with author, time, and result.", "Confirm destructive actions according to scope and reversibility."],
    commonPatterns: ["Summary dashboard", "Data table", "Detail panel", "Persistent filters and bulk actions"],
    patternsToAvoid: ["Turning every available metric into a primary KPI.", "Mixing configuration with frequent operational tasks.", "Hiding active filters, permissions, or action scope."],
  },
  "news-editorial": {
    label: "News / Editorial",
    description: "Information discovery and contextual reading.",
    primaryObjective: "Help people discover, understand, and consume information in context.",
    uxPriorities: ["Headlines and recency", "Editorial context and hierarchy", "Categories"],
    informationHierarchy: ["Headline", "Summary or context", "Recency and relevance", "Article body"],
    navigationPrinciples: ["Separate editorial home, current news, sections, search, and saved content.", "Keep section and reading context when opening related content.", "Help people continue reading without interrupting the primary article."],
    interactionPrinciples: ["Prioritize reading while allowing save, share, and follow actions.", "Preserve reading position and saved items.", "Make corrections, updates, and sources accessible from the content."],
    contentPrinciples: ["Clearly distinguish headline, summary, body, opinion, and advertising.", "Show author, date, update, and provenance when they affect interpretation.", "Optimize long-form readability and editorial hierarchy."],
    primaryActions: ["Browse current news", "Read", "Search topics", "Save or follow"],
    discoveryPatterns: ["Editorial front page", "Topic sections", "Breaking news", "Search"],
    trustAndSafetyConsiderations: ["Distinguish news, opinion, sponsored material, and generated or edited content.", "Make corrections, dates, and relevant sources visible.", "Avoid patterns that encourage sharing without comprehension."],
    commonPatterns: ["Hierarchical front page", "Focused article page", "Section navigation", "Related-context blocks"],
    patternsToAvoid: ["Making controls and promotions compete with the article.", "Treating every story as equally urgent.", "Hiding date, author, or sponsored nature."],
  },
  "music-audio": {
    label: "Music / Audio",
    description: "Audio discovery and continuous playback.",
    primaryObjective: "Help people discover and play audio while maintaining continuity and control.",
    uxPriorities: ["Playback", "Song or episode", "Artist or creator"],
    informationHierarchy: ["Playing content", "Playback state and controls", "Title and creator", "Queue or context"],
    navigationPrinciples: ["Keep the player accessible while browsing other views.", "Do not interrupt audio when switching between discovery, search, and library.", "Preserve the relationship among content, creator, album, playlist, and queue."],
    interactionPrinciples: ["Make playback state, progress, and device visible.", "Allow quick actions on items without leaving the current list.", "Keep the queue predictable when playing, inserting, or reorganizing content."],
    contentPrinciples: ["Differentiate song, episode, artist, album, and playlist.", "Show enough metadata to recognize content without overloading lists.", "Explain recommendation and mix origins when useful."],
    primaryActions: ["Play or pause", "Search audio", "Save to library", "Manage queue"],
    discoveryPatterns: ["Personalized recommendations", "New releases and trends", "Radio or mixes", "Search by title, creator, or genre"],
    trustAndSafetyConsiderations: ["Communicate explicit content, availability, and version changes.", "Provide controls for history and personalization.", "Avoid unexpected changes to device, volume, or queue."],
    commonPatterns: ["Persistent player", "Playback queue", "Library", "Playlists and creator pages"],
    patternsToAvoid: ["Stopping audio while navigating.", "Hiding what will play next.", "Replacing the queue without communicating it."],
  },
  "transportation-ride-hailing": {
    label: "Transportation / Ride Hailing",
    description: "Trip definition, estimates, and tracking.",
    primaryObjective: "Help people define a trip, choose a service, and complete a ride with clarity.",
    uxPriorities: ["Location, origin, and destination", "Geographic context", "Availability"],
    informationHierarchy: ["Current trip stage", "Origin, destination, and location", "Availability or assigned vehicle", "Estimated time"],
    navigationPrinciples: ["Adapt the interface to definition, selection, waiting, trip, and completion stages.", "During an active trip, prioritize status and tracking over discovery.", "Keep help, safety, and trip details accessible at every active stage."],
    interactionPrinciples: ["Make origin and destination selection and correction unambiguous.", "Update estimates when conditions or service selection change.", "Confirm cancellations or changes that involve cost or affect the trip."],
    contentPrinciples: ["Differentiate estimated and confirmed timing, pricing, and availability.", "Use the map as context, not as a replacement for directions and textual status.", "Clearly explain meeting point, vehicle, driver, and next steps."],
    primaryActions: ["Set destination", "Confirm pickup point", "Choose service", "Request ride"],
    discoveryPatterns: ["Frequent and recent destinations", "Place search", "Comparable service options", "Nearby availability"],
    trustAndSafetyConsiderations: ["Show vehicle or driver identity and safety tools.", "Protect location, contact details, and trip history.", "Communicate fares, cancellations, and changes before applying them."],
    commonPatterns: ["Origin and destination selector", "Contextual map", "Service comparison", "Staged trip status"],
    patternsToAvoid: ["Relying only on the map to communicate status.", "Hiding changes in time or price.", "Keeping promotional content visible during an active trip."],
  },
};

function exportedProductExperience(product) {
  const profile = productExperienceProfiles[product?.id];
  if (!profile) throw new Error(`Missing English export profile for ${product?.id}`);
  return { id: product.id, ...profile };
}

function productExperienceSection(product) {
  if (!product) return null;
  const profile = exportedProductExperience(product);
  return `## 2. Product Objective

**${profile.label}** — ${profile.description}

${profile.primaryObjective}

### UX priorities

${bullets(profile.uxPriorities)}

### Primary actions

${bullets(profile.primaryActions)}

## 3. Information Architecture

Order information by decision value:

${ordered(profile.informationHierarchy)}

### Content principles

${bullets(profile.contentPrinciples)}

## 8. Navigation

${bullets(profile.navigationPrinciples)}

## 9. Interaction Patterns

${bullets(profile.interactionPrinciples)}

### Discovery patterns

${bullets(profile.discoveryPatterns)}

## 11. Product-specific UX

### Trust and safety

${bullets(profile.trustAndSafetyConsiderations)}

### Recommended patterns

${bullets(profile.commonPatterns)}

## 12. Do / Don't

Do:

${bullets(profile.commonPatterns.map((pattern) => `Use ${pattern.toLowerCase()} when it supports the user's task.`))}

Don't:

${bullets(profile.patternsToAvoid)}

`;
}

const trimText = (value, limit) =>
  String(value ?? "").replace(/\s+/g, " ").trim().slice(0, limit);

function compactGuidance(guidance = [], { count = 3, chars = 550 } = {}) {
  return guidance.slice(0, count).map(({ section, content }) => ({
    section,
    guidance: trimText(content, chars),
  }));
}

function compactObject(object = {}, count) {
  return Object.fromEntries(Object.entries(object).slice(0, count));
}

function compactSource(key, source) {
  const selected = sourceSection(key, source);
  if (key === "colors")
    return {
      tokens: compactObject(selected.tokens, 24),
      guidance: compactGuidance(selected.guidance, { count: 4, chars: 700 }),
    };
  if (key === "typography")
    return {
      families: selected.families,
      styles: compactObject(selected.styles, 18),
      guidance: compactGuidance(selected.guidance, { count: 4, chars: 800 }),
    };
  if (key === "layout")
    return {
      spacing: selected.spacing,
      gridAndContainers: compactGuidance(selected.gridAndContainers, {
        count: 6,
        chars: 750,
      }),
      responsive: selected.responsive,
    };
  if (key === "shape")
    return {
      radii: selected.shape?.radii,
      cards: compactObject(selected.cards?.tokens, 12),
      guidance: compactGuidance(selected.cards?.guidance, { count: 4, chars: 700 }),
    };
  if (key === "elevation")
    return {
      tokens: compactObject(selected.tokens, 12),
      guidance: compactGuidance(selected.guidance, { count: 4, chars: 700 }),
    };
  return {
    tokens: compactObject(selected.tokens, 18),
    guidance: compactGuidance(selected.guidance, { count: 5, chars: 700 }),
  };
}
function sourceSection(key, source) {
  if (key === "shape") return { shape: source.shape, cards: source.components };
  if (key === "layout") return source.layout;
  if (key === "buttons" || key === "inputs") {
    const expression =
      key === "buttons" ? /button|cta/i : /input|form|field|search|control/i;
    return {
      tokens: Object.fromEntries(
        Object.entries(source.components.tokens).filter(([k]) =>
          expression.test(k),
        ),
      ),
      guidance: source.components.guidance.filter((g) =>
        expression.test(g.section),
      ),
    };
  }
  return source[key];
}
export function generateMarkdown(design, sources, fontManifest = []) {
  const productExperience = design.productType
    ? exportedProductExperience(design.productType)
    : undefined;
  const selectedFonts = new Set(
    design.selected.typography.families.map((f) => f.family),
  );
  // The interface's mono fallback is local, too.
  selectedFonts.add("JetBrains Mono");
  const assets = fontManifest
    .filter((f) => selectedFonts.has(f.family))
    .map(({ family, css, files, licenseSource }) => ({
      family,
      stylesheet: css,
      files,
      licenseSource,
    }));
  const frontmatter = {
    version: "1.0",
    name: "Composed design system",
    description: "A design system composed in DESIGN.md Studio.",
    mode: design.palette.mode,
    ...(design.productType
      ? {
          productExperience: {
            ...productExperience,
          },
        }
      : {}),
    sources: Object.fromEntries(
      sections.map(({ key }) => [
        key,
        `dataset/${design.selected[key].id}.json`,
      ]),
    ),
    colors: {
      ...design.selected.colors.colors,
      primary: design.palette.primary,
      canvas: design.palette.background,
      surface: design.palette.card,
      ink: design.palette.foreground,
      "on-primary": design.palette.onPrimary,
      hairline: design.palette.border,
    },
    // Normalized preview roles point back to the unmodified token name.
    // Consumers can use the roles without losing the brand's native vocabulary.
    colorRoleSources: design.palette.sources,
    typography: design.selected.typography.typography,
    rounded: design.selected.shape.radii,
    spacing: design.selected.layout.spacing,
    components: {
      button: {
        borderRadius: design.meta.buttonRadius,
        padding: design.css["--button-padding"],
        fontWeight: design.css["--button-weight"],
        letterSpacing: design.css["--button-tracking"],
      },
      input: {
        borderRadius: design.meta.inputRadius,
        padding: design.css["--input-padding"],
      },
      card: {
        borderRadius: design.meta.cardRadius,
        padding: design.css["--sample-padding"],
        boxShadow: design.css["--sample-shadow"],
      },
    },
    resolvedCss: design.css,
  };
  for (const section of sections) {
    const brand = design.selected[section.key];
    if (!sources[brand.id])
      throw new Error(`Missing source file for ${brand.name}`);
  }
  const sourceFor = (key) => {
    const brand = design.selected[key];
    return compactSource(key, sources[brand.id]);
  };
  const productSections = productExperienceSection(design.productType) ?? `## 2. Product Objective

No product profile is selected. Define a single user goal for each screen before choosing components or layout.

## 3. Information Architecture

Place the primary user task first, show decision-critical information next, and defer supporting detail until it is requested.

## 8. Navigation

Keep the current location, primary destinations, search, and back paths predictable across views.

## 9. Interaction Patterns

Use direct manipulation where possible, give immediate feedback, and make destructive actions deliberate and reversible.

## 11. Product-specific UX

Add product-specific rules only when they clarify a user decision, a safety concern, or a repeated workflow.

## 12. Do / Don't

Do: prioritize the user's next decision, preserve context, and explain consequential state changes.

Don't: add visual novelty, confirmation steps, or dense controls that do not advance the task.

`;
  const productSection = (number) =>
    productSections.match(
      new RegExp(`## ${number}\\.[\\s\\S]*?(?=\\n## \\d+\\.|$)`),
    )?.[0] ?? "";
  const implementationGuidance = `
### Delivery checklist

- Start each screen by identifying the primary user decision. Make the supporting data, state, and primary action visible without requiring a search for them.
- Build semantic structure before styling: headings for groups, labels for controls, lists for repeated content, tables for comparison, and buttons only for actions.
- Keep user context stable. Preserve filters, drafts, selections, tabs, pagination, scroll position, and focus when a user returns from a detail view whenever it is safe to do so.
- Use responsive layouts as re-composition, not simple shrinking. Move secondary regions below the task, simplify dense rows carefully, and retain labels and status information.
- Design all interaction states deliberately. A component that has no loading, error, disabled, empty, or long-content behavior is incomplete.
- Keep confirmation proportional to consequence. Explain scope and result for destructive or high-impact changes, but do not insert routine confirmation dialogs that slow reversible work.
- Give validation feedback close to the relevant field and in plain language. Preserve entered values after errors unless a security constraint requires otherwise.
- Make asynchronous behavior legible. Keep stable layout during loading, show what changed after a mutation, and offer a recovery path when an operation fails.
- Test with keyboard navigation, zoom, reduced motion, narrow viewports, long translations, empty datasets, slow responses, and content that exceeds the expected size.

### Decision precedence

When a visual choice and a user need conflict, protect the user need. When a source reference and a resolved token conflict, use the resolved token. When a compact mobile layout and a desktop structure conflict, preserve the primary task and defer supporting detail. When an interaction is ambiguous, favor a clear label and visible consequence over cleverness.

### Quality bar

A completed interface should let a first-time user identify where they are, what information is current, what can be changed, and what will happen after the primary action. It should also let a returning user resume work without reconstructing context. Every screen should remain coherent when data is missing, when there is more data than expected, and when an operation is unavailable. The system is successful when its rules make ordinary screens easier to build and exceptional states easier to understand.

### Screen construction workflow

1. Define the screen contract in one sentence: who uses it, what they need to know, and the action that moves their work forward. If the sentence contains several unrelated goals, split the experience or establish a clear primary path.
2. List the decision-critical content before choosing a layout. Promote facts that change a decision; defer reference detail, history, and supporting actions until they are requested or become necessary.
3. Choose the smallest set of semantic regions that supports the workflow: page heading, navigation context, primary content, supporting context, and persistent action area where needed. Avoid card nesting merely to create visual variety.
4. Apply the information hierarchy with the selected type scale and spacing tokens. Use size, position, and grouping to distinguish page title, section heading, item label, value, metadata, and help text.
5. Select reusable components before composing custom controls. A custom element must have a clear semantic role, a complete state model, and a repeatable reason to exist.
6. Implement the happy path and then test interruption: invalid data, no data, loading, network failure, loss of permission, long labels, and a changed selection. Keep the user's orientation and recovery options visible.
7. Recompose for mobile after the information model is stable. Preserve the same priority order, not necessarily the same visual arrangement. Move secondary context below the task and expose it with an explicit control when space is limited.
8. Review the final screen at realistic density. Test the shortest and longest labels, zero and many items, locale expansion, magnification, and browser zoom. A layout that works only with sample copy is not a reusable system.

### Component contracts

A button communicates an action, not navigation disguised as an action. Give it a specific verb, show its busy state without changing its position, and prevent duplicate submission while a request is in flight. Use a link for navigation and make external destinations clear when the context requires it.

A field needs a persistent label, an expected format when ambiguity is likely, an accessible description for constraints, and an error message tied to the field. Placeholder text is an example, not a label. Group related inputs under a visible heading, and do not clear user-entered values after a recoverable validation failure.

A menu exposes a compact set of contextual choices. Keep the trigger label or icon understandable, support keyboard movement and escape, return focus to the trigger, and avoid putting destructive actions beside routine actions without separation. Use a dialog only when the user must make a focused decision before continuing.

A card groups a coherent unit of information or action. It is not a default wrapper for every paragraph. If a region has no independent task, state, or scan boundary, prefer normal page structure and spacing. Keep whole-card clicks, internal links, and nested buttons from competing for the same interaction.

A table supports comparison and operational scanning. Keep headers visible where practical, align numbers for comparison, expose sorting and filtering state, provide an alternative presentation at narrow widths, and retain the row identity when opening details or returning to the list.

### State and feedback rules

Use optimistic updates only when the operation is safe, reversible, and the result is highly predictable. Otherwise, show pending state and confirm the completed result. Success messages should state what changed and disappear only after users have enough time to read them. Errors should state what failed, whether user data was preserved, and the next recovery action.

For empty states, distinguish between first use, no matching results, no permission, temporary unavailability, and completed cleanup. Each condition needs different copy and a different next action. Do not use a generic illustration where a concise explanation and an actionable control would be more useful.

For destructive changes, make consequences proportionate and concrete. Name the affected record or collection, describe the irreversible portion, and show dependent effects when known. Favor undo for low-risk reversible actions; reserve confirmation for changes that cannot be reasonably recovered.

### Accessibility baseline

All functionality must be available with keyboard alone. Focus must be visible against every supported surface and travel in a predictable order. Associate labels, instructions, errors, and status updates programmatically with their controls. Use native controls when possible; when a custom control is necessary, reproduce its expected keyboard behavior and semantic role.

Do not rely on hover, drag, color, sound, or motion as the sole carrier of information. Respect reduced-motion settings by removing nonessential movement, and avoid motion that obscures state changes. Verify text contrast, non-text contrast, touch target size, zoom behavior, and readable focus outlines across the selected palette mode.

Treat these rules as a quality floor. Product-specific requirements may add detail, but they must not weaken clarity, accessibility, recoverability, or the consistency of the selected design system.
`;
  let md = `---\n${stringify(frontmatter, { lineWidth: 0 })}---\n\n# DESIGN.md\n\nThis is an implementation skill, not a screenshot specification. It combines product behavior with a visual system: product rules decide what users need to accomplish, while visual rules decide how the experience should look and feel.\n\n## 1. Design Philosophy\n\nCompose one coherent system from the selected references. Preserve the visual vocabulary of each selected brand without treating any source document as a literal template. Prefer clear hierarchy, accessible interaction, useful density, and deliberate restraint over decorative effects.\n\n### Composition sources\n\n${sections.map((s) => `- **${exportSectionLabels[s.key]}:** ${design.selected[s.key].name}`).join("\n")}\n\nThe resolved front matter is the source of truth for implementation. Source excerpts document brand intent, but they do not override decisions assigned to another section.\n\n${productSection(2)}\n\n${productSection(3)}\n\n## 4. Layout & Spacing\n\nUse a shared spacing rhythm, stable container behavior, and progressive disclosure. Preserve the selected layout system at every viewport; do not flatten it into generic one-column marketing sections.\n\n${fenced(sourceFor("layout"))}\n\n## 5. Typography\n\nTypography establishes hierarchy before color or decoration. Use the selected families and styles as named roles, retain readable line lengths, and avoid introducing remote font requests when local assets are available.\n\n${fenced(sourceFor("typography"))}\n\n## 6. Colors\n\nUse color semantically: primary for the most important action, surfaces to group related information, and borders or contrast to establish separation. Check text contrast in every state, especially on primary actions and dark surfaces.\n\n${fenced(sourceFor("colors"))}\n\n## 7. Components\n\nBuild reusable, accessible primitives first. Buttons and fields own their geometry and states; cards and containers own their surface treatment, spacing, and elevation. Do not copy unrelated visual choices between these categories.\n\n### Shape and cards\n\n${fenced(sourceFor("shape"))}\n\n### Elevation\n\n${fenced(sourceFor("elevation"))}\n\n### Buttons\n\n${fenced(sourceFor("buttons"))}\n\n### Fields and controls\n\n${fenced(sourceFor("inputs"))}\n\n${productSection(8)}\n\n${productSection(9)}\n\n## 10. Responsive / Mobile\n\nDesign the smallest useful composition first, then enhance it as space increases. Keep primary actions reachable, preserve context while reflowing content, and do not hide required information behind hover-only interactions. Respect touch targets, keyboard navigation, visible focus, and reduced-motion preferences.\n\nUse the responsive guidance in the layout reference above as the product-specific breakpoint contract.\n\n${productSection(11)}\n\n${productSection(12)}\n\n## 13. Agent Implementation Rules\n\n- Implement the values in \`resolvedCss\` and the resolved component definitions before introducing new tokens.\n- Keep color and typography global; apply button, field, card, and layout geometry only to their respective primitives.\n- Use accessible shadcn/ui-compatible patterns, semantic HTML, keyboard support, visible focus, and \`prefers-reduced-motion\`.\n- Treat the exported palette mode as part of the product UI. The editor sidebar is not part of the exported design.\n- Keep components composable. Add a variant only when it represents a repeatable semantic or behavioral difference.\n- Validate contrast, loading, empty, error, disabled, and long-content states before considering a screen complete.\n- When information conflicts, prioritize the product objective and information architecture over visual novelty.\n\n## Resolved CSS\n\n\`\`\`css\n:root {\n${Object.entries(design.css)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n")}\n}\n\`\`\`\n\n## Local Font Assets\n\nCopy these font family folders from \`public/fonts\` with their licenses. Load their local stylesheets and do not add runtime Google Fonts requests. Font files are not embedded in this Markdown.\n${fenced(assets)}\n`;
  md = md.replace("## Resolved CSS", `${implementationGuidance}\n## Resolved CSS`);
  return md;
}
export async function loadExportSources(design) {
  const ids = [...new Set(Object.values(design.selected).map((b) => b.id))];
  const entries = await Promise.all(
    ids.map(async (id) => {
      const res = await fetch(`/data/brands/${encodeURIComponent(id)}.json`);
      if (!res.ok)
        throw new Error(`No se pudo cargar ${id}. Intenta nuevamente.`);
      return [id, await res.json()];
    }),
  );
  const fonts = await fetch("/fonts/manifest.json");
  if (!fonts.ok)
    throw new Error("No se pudo cargar el catálogo de fuentes locales.");
  return {
    sources: Object.fromEntries(entries),
    fontManifest: await fonts.json(),
  };
}
export function downloadMarkdown(markdown) {
  const url = URL.createObjectURL(
    new Blob([markdown], { type: "text/markdown;charset=utf-8" }),
  );
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "DESIGN.md";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
