// English localization of the product archetypes. Consumed through product-types.js.
export const productExperienceTranslations = {
  "landing-page": {
    label: "Landing Page",
    description: "Persuasive communication, credible proof, and focused conversion.",
    primaryObjective:
      "Guide a visitor from their initial intent to one primary action through a clear value proposition, sufficient evidence, and resolved uncertainty.",
    uxPriorities: [
      "Audience and value-proposition clarity",
      "One primary conversion objective",
      "Decision-led persuasive narrative",
      "Verifiable evidence and trust",
      "Objection resolution",
      "Mobile conversion, SEO, accessibility, and performance",
    ],
    informationHierarchy: [
      "What the offer is, who it is for, and the outcome it promises",
      "The primary action and what happens next",
      "The product or mechanism that makes the promise credible",
      "Benefits supported by capabilities or evidence",
      "Relevant objections and conditions",
      "Final conversion without unnecessary distractions",
    ],
    navigationPrinciples: [
      "Match navigation to traffic intent: reduce distractions for campaigns and retain useful context for brand or SEO pages.",
      "Keep the logo, essential anchors, and primary CTA available when they improve orientation or conversion.",
      "Do not default to either no navigation or full site navigation; decide from page intent and content depth.",
    ],
    interactionPrinciples: [
      "Make CTA labels describe the action or outcome and keep secondary actions visually subordinate.",
      "Ask only for information required for the next step, with visible labels, local errors, and preserved valid input.",
      "Use motion to explain, orient, confirm, or demonstrate; never let it delay the message or block interaction.",
    ],
    contentPrinciples: [
      "Give every section a role in what the visitor must understand or believe before acting.",
      "Connect benefits to evidence or mechanism before listing isolated features.",
      "Keep the traffic-source promise, visual headline, SEO title, and actual offer aligned.",
      "Omit unsupported commercial claims or mark them unambiguously as pending content.",
    ],
    primaryActions: [
      "Understand the value proposition",
      "Evaluate the product and evidence",
      "Resolve a relevant objection",
      "Complete the primary conversion action",
    ],
    discoveryPatterns: [
      "Specific value-proposition hero and CTA",
      "Visual product or outcome demonstration",
      "Benefits connected to mechanisms and capabilities",
      "Contextual proof near the claim it supports",
      "Progressive objection resolution",
    ],
    trustAndSafetyConsiderations: [
      "Never invent customers, logos, testimonials, people, ratings, metrics, awards, certifications, or results.",
      "Surface price, privacy, security, cancellation, requirements, and terms where they affect the decision.",
      "Use specific, verifiable evidence; when it is unavailable, omit it or label the placeholder clearly.",
    ],
    commonPatterns: [
      "A hero that explains the offer, audience, benefit, and next action",
      "An adaptive promise-to-evidence-to-conversion narrative",
      "A product showcase that demonstrates how the offer works",
      "A primary CTA repeated only after meaningful decision points",
      "A mobile composition reordered for comprehension and action access",
    ],
    patternsToAvoid: [
      "Treating the page as a fixed collection of marketing sections.",
      "Generic headlines, competing primary CTAs, or an oversized hero with too little information.",
      "Fabricated testimonials, logos, metrics, customers, awards, or any other social proof.",
      "Feature lists without benefits, walls of text, or section after section using the same three-card pattern.",
      "Unnecessary carousels, automatic FAQs, decorative gradients, heavy background video, or pervasive scroll reveals.",
      "Keyword stuffing, artificial SEO copy, or structured data that does not represent real content.",
      "Desktop layouts merely compressed for mobile or forms that request unnecessary information.",
    ],
    experienceGuidance: {
      "Guiding principle": [
        "A landing page is a guided decision journey, not a collection of marketing sections. Every section must help the visitor understand the offer, believe the claims, resolve uncertainty, or perform the primary action. If a section does none of these, remove it.",
      ],
      "Context and conversion strategy": [
        "Infer the audience, product, offer, conversion objective, traffic intent, complexity, perceived risk, and required trust from the prompt when evidence supports the inference. Never invent missing commercial facts.",
        "Choose one primary conversion action. Multiple visual CTAs may point to it, while genuinely useful secondary actions remain subordinate.",
        "Let page length follow the amount of explanation and proof required to make a sound decision; simple, low-risk offers need less than complex, expensive, or high-risk offers.",
      ],
      Hero: [
        "Quickly answer: What is this? Who is it for? What main benefit does it provide? What can the visitor do now? Add a trust or context signal only when real material exists.",
        "Use a concrete headline, precise supporting copy, a specific primary CTA, and a secondary CTA only when it advances evaluation.",
        "When the offer has an interface, physical product, or visual result, show it working; prefer explanatory product evidence over decorative illustration.",
      ],
      "Narrative and benefits": [
        "Adapt a Promise → Context → Solution → Evidence → Details → Objections → Conversion arc to the offer; these are reasoning stages, not mandatory sections or a fixed order.",
        "Frame capabilities as Benefit → Evidence or mechanism → Feature. Promote a feature itself only when it is widely understood or is the buying argument.",
        "Select only the sections needed for the visitor's next decision. Do not add FAQ, pricing, testimonials, integrations, or any other common block automatically.",
      ],
      "Product showcase and proof": [
        "Use screenshots, product mockups, short video, comparisons, diagrams, before/after, or real examples only when they explain the product or result.",
        "Place social proof near the claim it substantiates. Prefer specific evidence over generic praise.",
        "Never fabricate companies, quotes, names, photos, usage counts, ratings, awards, certifications, or outcomes. Clearly identify placeholders as pending content.",
      ],
      "Objections and CTA hierarchy": [
        "Identify plausible blockers such as price, effort, compatibility, migration, security, time, cancellation, support, privacy, warranty, or technical requirements, then resolve each in the most natural format.",
        "Use an unequivocal hierarchy: primary CTA for the conversion, secondary CTA for evaluation, and text links for contextual navigation. CTA copy must state what happens next.",
        "Repeat the primary CTA after relevant decision points, not mechanically between every section. Consider a header or sticky mobile CTA only when it improves access.",
      ],
      Forms: [
        "Request only the information needed for the next step, group related fields, use visible labels and correct input types, and explain what the visitor receives and what happens next.",
        "Associate errors with their fields and preserve valid input. Split a long form into steps only when doing so genuinely reduces cognitive load.",
      ],
      "Responsive and accessibility": [
        "Treat mobile as a conversion context, not compressed desktop. Reconsider order, keep copy scannable, preserve explanatory imagery, avoid hover dependencies, and keep the primary action reachable.",
        "Use semantic structure, one meaningful H1 in normal cases, a logical heading hierarchy, descriptive links and alt text, visible focus, keyboard support, and WCAG 2.2 minimum target sizes; give important CTAs comfortably larger touch areas when possible.",
      ],
      SEO: [
        "For indexable pages, align human search intent, page title, meta description, visual headline, and source promise without requiring identical wording.",
        "Consider canonical URL, Open Graph, social preview, favicon, sitemap/indexability, internal links, and structured data only when applicable to real content.",
        "Use people-first content. Never add keyword stuffing, artificial repetition, disconnected SEO sections, fake schema, or copy merely to increase word count.",
      ],
      "Performance and motion": [
        "Design toward LCP ≤ 2.5 s, INP ≤ 200 ms, and CLS ≤ 0.1 in real-user conditions. Optimize media, reserve dimensions, lazy-load below the fold, prioritize relevant hero media, control fonts, and minimize JavaScript.",
        "The core proposition must remain understandable while secondary resources load. Avoid heavy autoplay background video unless clearly justified and correctly implemented.",
        "Motion must explain, orient, confirm, demonstrate, or reinforce hierarchy. Respect prefers-reduced-motion and never delay interaction for decorative animation.",
      ],
      "Visual hierarchy": [
        "Guide attention through proposition, product, evidence, and action. Do not let illustration, gradients, decoration, badges, backgrounds, or motion compete with them.",
        "Use size and contrast to communicate importance. Apply the selected palette, type, spacing, density, radius, component, and elevation rules without weakening conversion clarity.",
      ],
    },
  },
  ecommerce: {
    label: "E-commerce",
    description: "Product discovery, comparison, and purchasing.",
    primaryObjective:
      "Help people find, evaluate, and buy products with minimal friction.",
    uxPriorities: [
      "Product discovery",
      "Search, categories, and filters",
      "Price, availability, and variants",
    ],
    informationHierarchy: [
      "Product",
      "Price and availability",
      "Purchase action",
      "Supporting details",
    ],
    navigationPrinciples: [
      "Keep search, categories, and cart available from discovery views.",
      "Preserve filters and position when returning from a product detail page.",
      "Clearly separate browsing, product evaluation, cart, and checkout.",
    ],
    interactionPrinciples: [
      "Let people choose variants and quantities without losing price or availability context.",
      "Minimize repeated steps and data entry at checkout.",
      "Give immediate feedback when cart items change.",
    ],
    contentPrinciples: [
      "Show price and availability before a product is opened.",
      "Use imagery and key attributes to support scanning and comparison.",
      "Keep secondary information out of the primary purchase path.",
    ],
    primaryActions: [
      "Search products",
      "Filter and compare",
      "Select variants",
      "Add to cart",
      "Complete purchase",
    ],
    discoveryPatterns: [
      "Predictive search",
      "Categories and collections",
      "Faceted filters",
      "Related recommendations",
    ],
    trustAndSafetyConsiderations: [
      "Show total costs, delivery, and terms before confirmation.",
      "Make returns, warranties, reviews, and authenticity signals easy to find.",
      "Never preselect paid extras or conceal price changes.",
    ],
    commonPatterns: [
      "Scannable product results",
      "Purchase-focused product detail",
      "Persistent cart",
      "Progressive checkout with summary",
    ],
    patternsToAvoid: [
      "Hiding price or availability until late in the flow.",
      "Overloading product cards with secondary information.",
      "Losing filters or selection while navigating.",
    ],
  },
  "video-streaming": {
    label: "Video Streaming",
    description: "Visual discovery, playback continuity, and viewing progress.",
    primaryObjective:
      "Help people discover content and start or resume playback quickly.",
    uxPriorities: [
      "Visual discovery",
      "Relevant recommendations",
      "Continue watching",
    ],
    informationHierarchy: [
      "Artwork or thumbnail",
      "Title",
      "Playback action",
      "Essential metadata",
    ],
    navigationPrinciples: [
      "Prioritize visual collection browsing without losing exploration context.",
      "Give returning viewers direct access to unfinished content.",
      "Keep library, search, and profiles predictable across devices.",
    ],
    interactionPrinciples: [
      "Start or resume playback with minimal friction.",
      "Preserve progress and state across devices.",
      "Allow saving, rating, and viewing details without unnecessarily interrupting browsing.",
    ],
    contentPrinciples: [
      "Use artwork and titles as the primary discovery signals.",
      "Show only the metadata needed to decide before playback.",
      "Explain why a recommendation is relevant when it adds value.",
    ],
    primaryActions: [
      "Play",
      "Continue watching",
      "Search content",
      "Save to library",
    ],
    discoveryPatterns: [
      "Themed rows and collections",
      "Personalized recommendations",
      "Trending and new releases",
      "Search by title or genre",
    ],
    trustAndSafetyConsiderations: [
      "Clearly distinguish profiles, parental controls, and age ratings.",
      "Communicate regional availability and expiration before playback.",
      "Provide clear controls for history and personalization.",
    ],
    commonPatterns: [
      "Continue watching",
      "Browsable collections",
      "Content detail",
      "Immersive player with contextual controls",
    ],
    patternsToAvoid: [
      "Overloading browsing with extensive metadata.",
      "Hiding unfinished content in the catalog.",
      "Forcing promotional steps before every playback.",
    ],
  },
  "delivery-food-ordering": {
    label: "Delivery / Food Ordering",
    description: "Local discovery, fast ordering, and order tracking.",
    primaryObjective:
      "Help people find what to order and complete an order quickly.",
    uxPriorities: [
      "Location and address",
      "Local availability",
      "Restaurants, products, and categories",
    ],
    informationHierarchy: [
      "Availability for the current location",
      "Food or merchant option",
      "Estimated time",
      "Price and fees",
    ],
    navigationPrinciples: [
      "Keep location and address visible before options are explored.",
      "Clearly separate discovery, order configuration, purchase, and tracking.",
      "Keep the cart and its merchant associated throughout navigation.",
    ],
    interactionPrinciples: [
      "Make customization and modifier selection straightforward.",
      "Update totals, minimums, and estimated time as the order changes.",
      "Adapt primary actions to the current order state.",
    ],
    contentPrinciples: [
      "Show real availability, timing, and costs before people invest in selection.",
      "Present products in scannable, understandable categories.",
      "Explain substitutions, allergens, and options unambiguously.",
    ],
    primaryActions: [
      "Confirm location",
      "Browse merchants or dishes",
      "Customize and add",
      "Confirm order",
      "Track delivery",
    ],
    discoveryPatterns: [
      "Nearby available options",
      "Food categories",
      "Merchant or product search",
      "Time, price, and preference filters",
    ],
    trustAndSafetyConsiderations: [
      "Show a complete breakdown of price, fees, and tip before confirmation.",
      "Keep dietary restrictions and warnings visible.",
      "Protect address, location, and contact information during tracking.",
    ],
    commonPatterns: [
      "Address selector",
      "Category menu",
      "Persistent cart",
      "Order-status timeline",
    ],
    patternsToAvoid: [
      "Showing options that do not deliver to the selected location.",
      "Hiding fees until the last step.",
      "Losing customizations when the cart is edited.",
    ],
  },
  "finance-banking": {
    label: "Finance / Banking",
    description: "Financial understanding, oversight, and secure actions.",
    primaryObjective:
      "Help people understand their financial position and perform operations safely.",
    uxPriorities: [
      "Balances and availability",
      "Transactions and obligations",
      "Financial trends",
    ],
    informationHierarchy: [
      "Current financial position",
      "Relevant figures and meaning",
      "Recent changes",
      "Available actions",
    ],
    navigationPrinciples: [
      "Separate account overview, transactions, operations, and settings.",
      "Keep the account and period that contextualize each figure visible.",
      "Provide direct paths from an alert to its explanation.",
    ],
    interactionPrinciples: [
      "Show amount, recipient, fees, and outcome before a critical operation is confirmed.",
      "Require confirmation proportional to risk.",
      "Clearly distinguish information, advice, and executable action.",
    ],
    contentPrinciples: [
      "Use unambiguous labels for balance, available funds, debt, income, and spending.",
      "Pair figures with currency, period, and status.",
      "Use charts only when they improve interpretation.",
    ],
    primaryActions: [
      "Review balances and transactions",
      "Transfer or pay",
      "Review an alert",
      "Manage methods and limits",
    ],
    discoveryPatterns: [
      "Financial overview",
      "Recent activity",
      "Transaction search and filters",
      "Actionable alerts",
    ],
    trustAndSafetyConsiderations: [
      "Mask sensitive data and reveal detail only when needed.",
      "Make recipient, fees, date, and reversibility explicit.",
      "Explain blocks, errors, and security controls with next steps.",
    ],
    commonPatterns: [
      "Account summary",
      "Transaction ledger",
      "Operation flow with final review",
      "Verifiable receipt or confirmation",
    ],
    patternsToAvoid: [
      "Mixing different types of balances without context.",
      "Using decorative charts or overloaded dashboards.",
      "Executing critical actions without reviewing the expected outcome.",
    ],
  },
  "project-management-productivity": {
    label: "Project Management / Productivity",
    description: "Work organization, status visibility, and efficient editing.",
    primaryObjective:
      "Help people organize work, understand its status, and update information quickly.",
    uxPriorities: [
      "Projects and tasks",
      "Status, owners, and dates",
      "Filters and search",
    ],
    informationHierarchy: [
      "Work item and status",
      "Owner and next relevant date",
      "Priority and progress",
      "Project context",
    ],
    navigationPrinciples: [
      "Keep navigation persistent across workspaces, projects, and work views.",
      "Preserve filters, grouping, and order when returning from an item.",
      "Offer list, board, calendar, or timeline views when they serve distinct tasks.",
    ],
    interactionPrinciples: [
      "Allow in-context editing for frequent changes.",
      "Keep contextual actions close to the item without overwhelming its information.",
      "Support bulk selection and actions when they reduce repetitive work.",
    ],
    contentPrinciples: [
      "Favor legible high density and state scanning.",
      "Use consistent names, states, and dates across views.",
      "Prioritize exceptions, blockers, and upcoming deadlines over routine activity.",
    ],
    primaryActions: [
      "Create work",
      "Change status or owner",
      "Filter and search",
      "Organize and prioritize",
    ],
    discoveryPatterns: [
      "Global search",
      "Saved filters",
      "Grouped views",
      "Recent activity",
    ],
    trustAndSafetyConsiderations: [
      "Communicate the scope and consequences of bulk actions.",
      "Preserve history, authorship, and meaningful changes.",
      "Prevent silent loss during simultaneous editing or state changes.",
    ],
    commonPatterns: [
      "Dense list or table",
      "Status board",
      "Editable detail panel",
      "Persistent filters",
    ],
    patternsToAvoid: [
      "Requiring separate screens for small repetitive changes.",
      "Hiding active filters or view scope.",
      "Using low density for large volumes of work.",
    ],
  },
  "social-network-community": {
    label: "Social Network / Community",
    description: "Content, relationships, interaction, and publishing.",
    primaryObjective:
      "Help people consume content, interact with people or communities, and publish.",
    uxPriorities: ["Feed and content", "Author identity", "Social interaction"],
    informationHierarchy: [
      "Content",
      "Author and publishing context",
      "Relationship or community",
      "Social actions",
    ],
    navigationPrinciples: [
      "Separate content from existing relationships, discovery, and communities.",
      "Keep creation, notifications, and profile accessible without competing with the feed.",
      "Preserve context when opening conversations or profiles from a post.",
    ],
    interactionPrinciples: [
      "Place social actions near the content they affect.",
      "Make creation accessible without involuntarily interrupting consumption.",
      "Show the result and reversibility of reactions, follows, and saves.",
    ],
    contentPrinciples: [
      "Keep content primary and author identity recognizable.",
      "Clearly distinguish original, shared, sponsored, and moderated content.",
      "Collapse secondary context without hiding provenance or safety signals.",
    ],
    primaryActions: [
      "Consume content",
      "Publish",
      "Reply or react",
      "Follow people or communities",
    ],
    discoveryPatterns: [
      "Relationship feed",
      "Topic exploration",
      "Suggested communities",
      "People and content search",
    ],
    trustAndSafetyConsiderations: [
      "Offer reporting, blocking, muting, and audience controls near relevant context.",
      "Explain visibility, moderation, and recommendation use.",
      "Avoid exposing private information when publishing or sharing.",
    ],
    commonPatterns: [
      "Feed",
      "Composer",
      "Conversation threads",
      "Profiles and communities",
    ],
    patternsToAvoid: [
      "Letting secondary controls dominate every post.",
      "Mixing sponsored content in without identification.",
      "Using undifferentiated notifications to force return visits.",
    ],
  },
  "messaging-communication": {
    label: "Messaging / Communication",
    description: "Continuous conversations and low-friction responses.",
    primaryObjective:
      "Help people maintain conversations with minimal friction and complete context.",
    uxPriorities: [
      "Recent conversations",
      "Messages and unread state",
      "Search",
    ],
    informationHierarchy: [
      "Active conversation",
      "New messages and mentions",
      "Author and time",
      "Composer and send action",
    ],
    navigationPrinciples: [
      "Order conversations by recent relevance and distinguish unread items.",
      "Keep context when switching among list, conversation, thread, and search.",
      "Make starting a conversation accessible without displacing active ones.",
    ],
    interactionPrinciples: [
      "Keep the composer accessible and reduce steps to respond.",
      "Integrate media, reactions, and replies without interfering with reading.",
      "Clearly indicate send, delivery, read, edit, and error states.",
    ],
    contentPrinciples: [
      "Preserve temporal grouping, authorship, and reply relationships.",
      "Differentiate system messages, quoted content, and new content.",
      "Let people scan unread messages before recovering full history.",
    ],
    primaryActions: [
      "Read and reply",
      "Start a conversation",
      "Search messages",
      "Share files or media",
    ],
    discoveryPatterns: [
      "Recent conversations",
      "Global and in-conversation search",
      "Mentions and saved messages",
      "Frequent people or channels",
    ],
    trustAndSafetyConsiderations: [
      "Make participants, privacy, and encryption clear when applicable.",
      "Allow blocking, reporting, and invitation controls.",
      "Prevent accidental sending of sensitive content or messages to the wrong recipient.",
    ],
    commonPatterns: [
      "Conversation list",
      "Message timeline",
      "Persistent composer",
      "Threads and contextual replies",
    ],
    patternsToAvoid: [
      "Hiding unread messages inside general activity.",
      "Moving the composer away from the active conversation.",
      "Losing drafts or reading position when switching conversations.",
    ],
  },
  "education-learning": {
    label: "Education / Learning",
    description: "Progression, active learning, and continuity.",
    primaryObjective:
      "Help people learn material through a clear, verifiable progression.",
    uxPriorities: ["Course, module, and lesson", "Progress", "Next action"],
    informationHierarchy: [
      "Current content or activity",
      "Learning objective",
      "Progress and position",
      "Next action",
    ],
    navigationPrinciples: [
      "Make the course-module-lesson relationship and current position explicit.",
      "Favor sequential navigation without blocking return to earlier content.",
      "Keep progress, index, and next step accessible.",
    ],
    interactionPrinciples: [
      "Separate content consumption, practice, and assessment.",
      "Save progress and answers so people can resume without rebuilding context.",
      "Give specific, actionable feedback after learning activities.",
    ],
    contentPrinciples: [
      "Reduce distractions during focused learning.",
      "Divide complex content by objectives, not arbitrary size.",
      "Keep secondary resources available without competing with the lesson.",
    ],
    primaryActions: [
      "Continue learning",
      "Complete an activity",
      "Review progress",
      "Review feedback",
    ],
    discoveryPatterns: [
      "Continue where you left off",
      "Learning paths",
      "Catalog by level and objective",
      "Resource search",
    ],
    trustAndSafetyConsiderations: [
      "Distinguish progress, grade, and recommendation.",
      "Explain assessment criteria and the consequences of attempts.",
      "Protect minors' data and academic records when applicable.",
    ],
    commonPatterns: [
      "Curriculum index",
      "Focused lesson",
      "Progress indicator",
      "Assessment with feedback",
    ],
    patternsToAvoid: [
      "Hiding what should happen next.",
      "Mixing assessment with content without a clear transition.",
      "Losing progress or answers while navigating.",
    ],
  },
  "health-fitness": {
    label: "Health / Fitness",
    description: "Tracking, progress, goals, and sensitive data.",
    primaryObjective:
      "Help people log activity and understand progress toward personal goals.",
    uxPriorities: ["Current state", "Activity tracking", "Goals"],
    informationHierarchy: [
      "Current state or activity",
      "Primary metric with context",
      "Goal progress",
      "Relevant trend",
    ],
    navigationPrinciples: [
      "Separate logging, current activity, progress, and history.",
      "Provide fast access to the most frequent activity or log.",
      "Keep period, unit, and source visible when comparing metrics.",
    ],
    interactionPrinciples: [
      "Minimize input needed for frequent logs.",
      "Allow people to correct data and understand its effect on trends and goals.",
      "Distinguish measurement, goal, and recommendation before offering actions.",
    ],
    contentPrinciples: [
      "Present primary metrics with understandable units and ranges.",
      "Prioritize useful trends over large volumes of statistics.",
      "Avoid diagnostic language when information is not clinical advice.",
    ],
    primaryActions: [
      "Log activity or metric",
      "Start or finish activity",
      "Review progress",
      "Adjust goal",
    ],
    discoveryPatterns: [
      "Daily or weekly summary",
      "Recent activities",
      "Progress by goal",
      "Meaningful trends",
    ],
    trustAndSafetyConsiderations: [
      "Treat health, location, and biometrics as sensitive information.",
      "Explain the source, accuracy, and limitations of measurements.",
      "Clearly distinguish general wellbeing, recommendation, and professional advice.",
    ],
    commonPatterns: [
      "Quick log",
      "Status summary",
      "Goal progress",
      "Time-based history",
    ],
    patternsToAvoid: [
      "Overloading people with uninterpreted metrics.",
      "Presenting estimates as exact measurements.",
      "Using pressure or guilt to drive activity.",
    ],
  },
  "travel-booking": {
    label: "Travel / Booking",
    description: "Search, comparison, and booking with context.",
    primaryObjective:
      "Help people search, compare, and book travel options with confidence.",
    uxPriorities: [
      "Destination, dates, and travelers",
      "Search and results",
      "Total price and availability",
    ],
    informationHierarchy: [
      "Match to search parameters",
      "Total price",
      "Availability",
      "Comparable attributes",
    ],
    navigationPrinciples: [
      "Keep destination, dates, travelers, and filters clear throughout the flow.",
      "Preserve selection while viewing details and comparing options.",
      "Separate search, evaluation, booking details, and confirmation.",
    ],
    interactionPrinciples: [
      "Update results and prices when parameters change without losing context.",
      "Make comparison consistent across equivalent options.",
      "Show a complete summary before booking.",
    ],
    contentPrinciples: [
      "Present total price, taxes, policies, and restrictions clearly.",
      "Use photographs to support evaluation without replacing critical data.",
      "Distinguish confirmed, estimated, and limited availability.",
    ],
    primaryActions: [
      "Define search",
      "Filter and compare",
      "Select option",
      "Review terms",
      "Book",
    ],
    discoveryPatterns: [
      "Comparable results",
      "Travel-needs filters",
      "Map when it adds geographic context",
      "Flexible dates",
    ],
    trustAndSafetyConsiderations: [
      "Show total cost and cancellation terms before asking for payment.",
      "Identify who provides the service and handles changes.",
      "Avoid artificial urgency or misleading availability.",
    ],
    commonPatterns: [
      "Persistent search form",
      "Filterable results",
      "Option comparison",
      "Booking summary",
    ],
    patternsToAvoid: [
      "Hiding taxes or restrictions until payment.",
      "Losing parameters when returning from a detail page.",
      "Comparing prices with different inclusions without clarifying them.",
    ],
  },
  marketplace: {
    label: "Marketplace",
    description: "Listings, sellers, reputation, and trust.",
    primaryObjective:
      "Enable trusted transactions between buyers and multiple sellers.",
    uxPriorities: [
      "Product or listing",
      "Seller and reputation",
      "Price and availability",
    ],
    informationHierarchy: [
      "Product or service",
      "Offer and price",
      "Seller and reputation",
      "Availability and terms",
    ],
    navigationPrinciples: [
      "Differentiate platform, catalog, offer, and seller at every level.",
      "Preserve filters and criteria when comparing multiple sellers.",
      "Keep orders, messages, and issue resolution accessible.",
    ],
    interactionPrinciples: [
      "Allow equivalent offers to be compared by price, condition, and seller.",
      "Support questions or negotiation when the model calls for it.",
      "Explain who receives each action and what protection the platform provides.",
    ],
    contentPrinciples: [
      "Clearly attribute descriptions, ratings, and terms.",
      "Show reputation with enough context, not as an isolated number.",
      "Distinguish seller policies from platform guarantees.",
    ],
    primaryActions: [
      "Search and filter",
      "Compare offers",
      "Review seller",
      "Buy or book",
    ],
    discoveryPatterns: [
      "Aggregated catalog",
      "Offer and seller filters",
      "Seller comparison",
      "Verified reputation and reviews",
    ],
    trustAndSafetyConsiderations: [
      "Make identity, reputation, protection, and dispute paths visible.",
      "Distinguish verified reviews and possible conflicts of interest.",
      "Do not expose personal data before the transaction requires it.",
    ],
    commonPatterns: [
      "Listing with multiple offers",
      "Seller profile",
      "Buyer-seller messaging",
      "Orders and disputes center",
    ],
    patternsToAvoid: [
      "Hiding who sells or is accountable for a transaction.",
      "Combining product and seller ratings.",
      "Ranking offers only by paid promotion without disclosure.",
    ],
  },
  "saas-dashboard-administration": {
    label: "SaaS Dashboard / Administration",
    description:
      "System oversight, operational data, and efficient administration.",
    primaryObjective:
      "Help people monitor a system and perform operations efficiently.",
    uxPriorities: [
      "KPIs and status",
      "Operational tables and detail",
      "Search and filters",
    ],
    informationHierarchy: [
      "Overall status and exceptions",
      "Contextual KPIs",
      "Items requiring action",
      "Operational data",
    ],
    navigationPrinciples: [
      "Keep navigation stable across functional domains.",
      "Separate monitoring, operations, and configuration.",
      "Preserve filters, columns, and scope when returning from a detail view.",
    ],
    interactionPrinciples: [
      "Support high density, efficient editing, and bulk actions where appropriate.",
      "Show impact and scope before destructive or broad operations.",
      "Provide actionable loading, partial-success, and error states.",
    ],
    contentPrinciples: [
      "Show summary first and detail on demand.",
      "Pair KPIs with period, comparison, and definition.",
      "Prioritize exceptions over repeated healthy metrics.",
    ],
    primaryActions: [
      "Monitor status",
      "Search and filter records",
      "Investigate an alert",
      "Edit or run an operation",
    ],
    discoveryPatterns: [
      "Operational overview",
      "Prioritized alerts",
      "Filterable tables",
      "Global search",
    ],
    trustAndSafetyConsiderations: [
      "Respect permissions and show when an action is restricted.",
      "Record meaningful operations with author, time, and result.",
      "Confirm destructive actions according to scope and reversibility.",
    ],
    commonPatterns: [
      "Summary dashboard",
      "Data table",
      "Detail panel",
      "Persistent filters and bulk actions",
    ],
    patternsToAvoid: [
      "Turning every available metric into a primary KPI.",
      "Mixing configuration with frequent operational tasks.",
      "Hiding active filters, permissions, or action scope.",
    ],
  },
  "news-editorial": {
    label: "News / Editorial",
    description: "Information discovery and contextual reading.",
    primaryObjective:
      "Help people discover, understand, and consume information in context.",
    uxPriorities: [
      "Headlines and recency",
      "Editorial context and hierarchy",
      "Categories",
    ],
    informationHierarchy: [
      "Headline",
      "Summary or context",
      "Recency and relevance",
      "Article body",
    ],
    navigationPrinciples: [
      "Separate editorial home, current news, sections, search, and saved content.",
      "Keep section and reading context when opening related content.",
      "Help people continue reading without interrupting the primary article.",
    ],
    interactionPrinciples: [
      "Prioritize reading while allowing save, share, and follow actions.",
      "Preserve reading position and saved items.",
      "Make corrections, updates, and sources accessible from the content.",
    ],
    contentPrinciples: [
      "Clearly distinguish headline, summary, body, opinion, and advertising.",
      "Show author, date, update, and provenance when they affect interpretation.",
      "Optimize long-form readability and editorial hierarchy.",
    ],
    primaryActions: [
      "Browse current news",
      "Read",
      "Search topics",
      "Save or follow",
    ],
    discoveryPatterns: [
      "Editorial front page",
      "Topic sections",
      "Breaking news",
      "Search",
    ],
    trustAndSafetyConsiderations: [
      "Distinguish news, opinion, sponsored material, and generated or edited content.",
      "Make corrections, dates, and relevant sources visible.",
      "Avoid patterns that encourage sharing without comprehension.",
    ],
    commonPatterns: [
      "Hierarchical front page",
      "Focused article page",
      "Section navigation",
      "Related-context blocks",
    ],
    patternsToAvoid: [
      "Making controls and promotions compete with the article.",
      "Treating every story as equally urgent.",
      "Hiding date, author, or sponsored nature.",
    ],
  },
  "music-audio": {
    label: "Music / Audio",
    description: "Audio discovery and continuous playback.",
    primaryObjective:
      "Help people discover and play audio while maintaining continuity and control.",
    uxPriorities: ["Playback", "Song or episode", "Artist or creator"],
    informationHierarchy: [
      "Playing content",
      "Playback state and controls",
      "Title and creator",
      "Queue or context",
    ],
    navigationPrinciples: [
      "Keep the player accessible while browsing other views.",
      "Do not interrupt audio when switching between discovery, search, and library.",
      "Preserve the relationship among content, creator, album, playlist, and queue.",
    ],
    interactionPrinciples: [
      "Make playback state, progress, and device visible.",
      "Allow quick actions on items without leaving the current list.",
      "Keep the queue predictable when playing, inserting, or reorganizing content.",
    ],
    contentPrinciples: [
      "Differentiate song, episode, artist, album, and playlist.",
      "Show enough metadata to recognize content without overloading lists.",
      "Explain recommendation and mix origins when useful.",
    ],
    primaryActions: [
      "Play or pause",
      "Search audio",
      "Save to library",
      "Manage queue",
    ],
    discoveryPatterns: [
      "Personalized recommendations",
      "New releases and trends",
      "Radio or mixes",
      "Search by title, creator, or genre",
    ],
    trustAndSafetyConsiderations: [
      "Communicate explicit content, availability, and version changes.",
      "Provide controls for history and personalization.",
      "Avoid unexpected changes to device, volume, or queue.",
    ],
    commonPatterns: [
      "Persistent player",
      "Playback queue",
      "Library",
      "Playlists and creator pages",
    ],
    patternsToAvoid: [
      "Stopping audio while navigating.",
      "Hiding what will play next.",
      "Replacing the queue without communicating it.",
    ],
  },
  "transportation-ride-hailing": {
    label: "Transportation / Ride Hailing",
    description: "Trip definition, estimates, and tracking.",
    primaryObjective:
      "Help people define a trip, choose a service, and complete a ride with clarity.",
    uxPriorities: [
      "Location, origin, and destination",
      "Geographic context",
      "Availability",
    ],
    informationHierarchy: [
      "Current trip stage",
      "Origin, destination, and location",
      "Availability or assigned vehicle",
      "Estimated time",
    ],
    navigationPrinciples: [
      "Adapt the interface to definition, selection, waiting, trip, and completion stages.",
      "During an active trip, prioritize status and tracking over discovery.",
      "Keep help, safety, and trip details accessible at every active stage.",
    ],
    interactionPrinciples: [
      "Make origin and destination selection and correction unambiguous.",
      "Update estimates when conditions or service selection change.",
      "Confirm cancellations or changes that involve cost or affect the trip.",
    ],
    contentPrinciples: [
      "Differentiate estimated and confirmed timing, pricing, and availability.",
      "Use the map as context, not as a replacement for directions and textual status.",
      "Clearly explain meeting point, vehicle, driver, and next steps.",
    ],
    primaryActions: [
      "Set destination",
      "Confirm pickup point",
      "Choose service",
      "Request ride",
    ],
    discoveryPatterns: [
      "Frequent and recent destinations",
      "Place search",
      "Comparable service options",
      "Nearby availability",
    ],
    trustAndSafetyConsiderations: [
      "Show vehicle or driver identity and safety tools.",
      "Protect location, contact details, and trip history.",
      "Communicate fares, cancellations, and changes before applying them.",
    ],
    commonPatterns: [
      "Origin and destination selector",
      "Contextual map",
      "Service comparison",
      "Staged trip status",
    ],
    patternsToAvoid: [
      "Relying only on the map to communicate status.",
      "Hiding changes in time or price.",
      "Keeping promotional content visible during an active trip.",
    ],
  },
};
