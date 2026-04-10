/**
 * Marketing & Content Creation Prompts
 *
 * PURPOSE: Prompts for social media, blog content, ad copy, email marketing, landing pages, and SEO.
 *
 * DOMAIN: Marketing & Content Creation
 * CATEGORIES:
 * - Social Media
 * - Blog Content
 * - Ad Copy
 * - Email Marketing
 * - Landing Pages
 * - SEO Content
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Marketing & Content prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const marketingContentPrompts: Prompt[] = [
  // ============================================================================
  // SOCIAL MEDIA (10 prompts)
  // ============================================================================

  {
    id: "linkedin-thought-leadership-post",
    title: "LinkedIn Thought Leadership Post",
    description: "Create an engaging LinkedIn post that positions you as an industry expert.",
    promptText: `Write a LinkedIn thought leadership post about [TOPIC].

Context about me:
- My role: [YOUR ROLE/TITLE]
- My industry: [YOUR INDUSTRY]
- My expertise: [YOUR EXPERTISE AREA]

Key points to include:
[KEY POINTS OR INSIGHTS]

Please create:
1. A compelling hook (first 2 lines that grab attention)
2. 3-4 paragraphs of valuable insights
3. A question to encourage engagement
4. Relevant hashtags (5-7)

Tone: Professional but conversational, authoritative but not arrogant.
Length: 200-300 words (optimal for LinkedIn algorithm)`,
    placeholders: [
      "TOPIC",
      "YOUR ROLE/TITLE",
      "YOUR INDUSTRY",
      "YOUR EXPERTISE AREA",
      "KEY POINTS OR INSIGHTS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "A polished LinkedIn post with a strong hook, valuable insights formatted with line breaks for readability, engaging question, and strategic hashtags.",
    customizationNotes: [
      "Add specific data or statistics for more credibility",
      "Include a personal story or anecdote for authenticity",
      "Add a call-to-action if you want comments or DMs",
    ],
    tags: ["linkedin", "thought-leadership", "personal-brand", "b2b"],
    order: 1,
  },

  {
    id: "twitter-thread-viral",
    title: "Viral Twitter/X Thread",
    description: "Create a Twitter thread that captures attention and drives engagement.",
    promptText: `Write a viral Twitter thread about [TOPIC].

Target audience: [YOUR TARGET AUDIENCE]
Goal: [GOAL - educate/entertain/persuade/sell]

Key message or insight:
[YOUR MAIN MESSAGE]

Please create a thread with 8-12 tweets that includes:
1. A compelling hook in the first tweet (use numbers, controversy, or curiosity)
2. One main idea per tweet
3. Logical flow between tweets
4. The last tweet should have a call-to-action

Requirements:
- Each tweet under 280 characters
- Use simple, punchy language
- Include emoji strategically (not overused)
- End with a summary tweet + CTA
- Number tweets (1/9, 2/9, etc.) for clarity`,
    placeholders: [
      "TOPIC",
      "YOUR TARGET AUDIENCE",
      "GOAL - educate/entertain/persuade/sell",
      "YOUR MAIN MESSAGE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "A numbered thread with a hook in tweet 1, 8-12 tweets building on each other, and a final tweet with CTA. Character counts for each tweet.",
    customizationNotes: [
      "Ask for a specific thread length if you have constraints",
      "Add your brand voice or style preferences",
      "Include specific examples or case studies you want mentioned",
    ],
    tags: ["twitter", "x", "thread", "viral", "social-media"],
    order: 2,
  },

  {
    id: "instagram-caption-carousel",
    title: "Instagram Carousel Caption",
    description: "Write an engaging caption for an Instagram carousel post.",
    promptText: `Write an Instagram caption for a carousel post about [TOPIC].

Carousel content (slides describe what each slide shows):
[SLIDE 1: ...]
[SLIDE 2: ...]
[...]

Goal of this post: [GOAL - educate/inspire/sell/engage]

Target audience: [YOUR AUDIENCE]

Please create:
1. A hook-first line (stops the scroll)
2. Main caption body (tell a story or share value)
3. Carousel slide navigation hint (e.g., "Swipe to learn...")
4. A question or call-to-action
5. 20-30 relevant hashtags (mix of broad and niche)

Tone: [DESCIRED TONE - authentic/inspirational/funny/educational]`,
    placeholders: [
      "TOPIC",
      "SLIDE 1: ...",
      "GOAL - educate/inspire/sell/engage",
      "YOUR AUDIENCE",
      "DESCIRED TONE - authentic/inspirational/funny/educational",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "An Instagram-optimized caption with line breaks, engaging hook, clear CTA, and 30 hashtags organized by category.",
    customizationNotes: [
      "Specify your ideal hashtag mix (e.g., 10 broad, 15 niche, 5 branded)",
      "Add your brand voice guidelines",
      "Include emoji preferences (minimal vs. expressive)",
    ],
    tags: ["instagram", "caption", "carousel", "hashtags"],
    order: 3,
  },

  {
    id: "tiktok-viral-script",
    title: "TikTok Viral Script",
    description: "Create a TikTok script designed to go viral with hooks and trends.",
    promptText: `Write a TikTok script about [TOPIC].

Video style: [STYLE - educational/entertaining/storytime/trend]
Target audience: [AUDIENCE AGE/INTEREST]
Video length: [LENGTH in seconds - 15/30/60]

Key points to cover:
[KEY POINTS]

Please create a script with:
1. Hook (first 3 seconds - must grab attention immediately)
2. Bridge (connect hook to content)
3. Main content (deliver value/entertainment)
4. Twist/Reveal (if applicable)
5. Call-to-action (follow/comment/share)

Format:
- Visual directions in [BRACKETS]
- Audio/spoken text in plain text
- Include text overlay suggestions
- Suggest trending sounds if applicable`,
    placeholders: [
      "TOPIC",
      "STYLE - educational/entertaining/storytime/trend",
      "AUDIENCE AGE/INTEREST",
      "LENGTH in seconds - 15/30/60",
      "KEY POINTS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "A timestamped script with visual directions, spoken text, text overlay suggestions, and CTA optimized for TikTok's algorithm.",
    customizationNotes: [
      "Mention specific TikTok trends you want to leverage",
      "Add your filming style (face-to-camera, POV, etc.)",
      "Include product/service mentions if applicable",
    ],
    tags: ["tiktok", "video", "script", "viral", "short-form"],
    order: 4,
  },

  {
    id: "youtube-description-optimized",
    title: "YouTube Description Optimizer",
    description: "Write a YouTube description optimized for search and engagement.",
    promptText: `Write an optimized YouTube description for a video about [VIDEO TOPIC].

Video title: [YOUR VIDEO TITLE]
Main keywords: [PRIMARY KEYWORDS]
Secondary keywords: [SECONDARY KEYWORDS]

Video overview:
[BRIEF VIDEO SUMMARY]

Chapters/timestamps:
[ADD CHAPTERS IF AVAILABLE]

Please create:
1. First 2-3 lines (shows before "show more" - hook viewers)
2. Full video description
3. Chapter timestamps
4. Relevant links (socials, website, etc.)
5. Optimized keywords for search
6. 5-10 relevant hashtags

SEO Focus:
- Include target keywords naturally
- Write for both search and human readers
- Encourage watch time and engagement`,
    placeholders: [
      "VIDEO TOPIC",
      "YOUR VIDEO TITLE",
      "PRIMARY KEYWORDS",
      "SECONDARY KEYWORDS",
      "BRIEF VIDEO SUMMARY",
      "ADD CHAPTERS IF AVAILABLE",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "A YouTube-optimized description with compelling hook, timestamps, keyword-rich content, and strategic hashtags.",
    customizationNotes: [
      "Add affiliate links or sponsor mentions if needed",
      "Include your other video links for internal traffic",
      "Specify your channel voice and style",
    ],
    tags: ["youtube", "description", "seo", "video"],
    order: 5,
  },

  {
    id: "pinterest-pin-description",
    title: "Pinterest Pin Description",
    description: "Create SEO-optimized Pinterest pin descriptions that drive clicks.",
    promptText: `Write Pinterest pin descriptions for [TOPIC/PRODUCT].

Target audience: [AUDIENCE - interests/demographics]
Goal: [GOAL - blog traffic/sales/saves]
Board context: [WHAT BOARD THIS PIN BELONGS IN]

Pin image description:
[DESCRIBE YOUR PIN IMAGE]

Please create 5 description options (50-100 words each) that include:
1. Keyword-rich title
2. Descriptive, value-driven text
3. Call-to-action
4. 5-10 relevant keywords

SEO Requirements:
- Use keywords naturally
- Include descriptive words for image context
- Focus on what users are searching for
- Optimize for saves and clicks`,
    placeholders: [
      "TOPIC/PRODUCT",
      "AUDIENCE - interests/demographics",
      "GOAL - blog traffic/sales/saves",
      "WHAT BOARD THIS PIN BELONGS IN",
      "DESCRIBE YOUR PIN IMAGE",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "5 Pinterest description options with titles, keyword-rich descriptions, CTAs, and hashtags optimized for Pinterest SEO.",
    customizationNotes: [
      "Add your brand keywords for consistent branding",
      "Specify your ideal keyword density",
      "Include affiliate link context if applicable",
    ],
    tags: ["pinterest", "seo", "description", "visual-search"],
    order: 6,
  },

  {
    id: "facebook-engagement-post",
    title: "Facebook Engagement Post",
    description: "Write Facebook posts that maximize comments, shares, and reactions.",
    promptText: `Write a Facebook post about [TOPIC] to maximize engagement.

Page/brand type: [PAGE TYPE - business/personal/community]
Goal: [GOAL - comments/shares/likes/clicks]
Target audience: [AUDIENCE DESCRIPTION]

Content/context:
[YOUR CONTENT OR CONTEXT]

Please create 3 post options:
1. Question-based (encourages comments)
2. Share-worthy (valuable enough to share)
3. Discussion-starter (controversial or debatable)

Each post should include:
- Compelling first line (stops the scroll)
- Main content (story, insight, or value)
- Clear engagement mechanism
- Relevant hashtags (3-5)

Optimize for Facebook's algorithm:
- Encourage meaningful interactions
- Use native posting best practices
- Consider Facebook post length (40-80 characters ideal for engagement)`,
    placeholders: [
      "TOPIC",
      "PAGE TYPE - business/personal/community",
      "GOAL - comments/shares/likes/clicks",
      "AUDIENCE DESCRIPTION",
      "YOUR CONTENT OR CONTEXT",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "3 Facebook post options with different engagement strategies, optimized lengths, and clear calls-to-action.",
    customizationNotes: [
      "Add image/video suggestions for each post",
      "Include link placement advice (comments vs. post)",
      "Specify if promoting something specific",
    ],
    tags: ["facebook", "engagement", "social-media", "community"],
    order: 7,
  },

  {
    id: "social-media-content-calendar",
    title: "Social Media Content Calendar",
    description: "Generate a week of social media content ideas across platforms.",
    promptText: `Create a 7-day social media content calendar for [BUSINESS/BRAND].

Business/brand description:
[YOUR BUSINESS DESCRIPTION]
Products/services:
[WHAT YOU SELL OR OFFER]

Target audience:
[YOUR AUDIENCE]

Platforms: [PLATFORMS - instagram/tiktok/linkedin/twitter/etc.]
Content pillars: [YOUR CONTENT PILLARS - 3-5 topics]
Goals: [GOALS - awareness/engagement/sales/traffic]

Please create:
1. Daily content ideas for 7 days
2. Platform-specific post for each day
3. Content type (post, reel, story, carousel, etc.)
4. Brief description of what each post covers
5. Optimal posting times for each platform
6. Hashtag strategy by platform

Mix of content types:
- Educational
- Entertaining
- Promotional (20% rule)
- Engagement-focused
- User-generated content ideas`,
    placeholders: [
      "BUSINESS/BRAND",
      "YOUR BUSINESS DESCRIPTION",
      "WHAT YOU SELL OR OFFER",
      "YOUR AUDIENCE",
      "PLATFORMS - instagram/tiktok/linkedin/twitter/etc.",
      "YOUR CONTENT PILLARS - 3-5 topics",
      "GOALS - awareness/engagement/sales/traffic",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "A 7-day content calendar with daily post ideas, platform-specific content types, posting times, and hashtag strategy.",
    customizationNotes: [
      "Add upcoming dates/events/holidays to work around",
      "Include product launches or campaigns",
      "Specify your content creation capacity",
    ],
    tags: ["content-calendar", "planning", "social-media", "strategy"],
    order: 8,
  },

  {
    id: "influencer-collab-post",
    title: "Influencer Collaboration Post",
    description: "Create social media posts for influencer partnerships.",
    promptText: `Write social media posts for an influencer collaboration.

Brand/product: [BRAND OR PRODUCT]
Influencer style: [INFLUENCER STYLE - authentic/luxury/funny/educational]
Platform: [PLATFORM]
Target audience: [AUDIENCE]

Product/service details:
[PRODUCT DETAILS]

Discount/offer for followers:
[DISCOUNT OR OFFER]

Please create:
1. Caption from influencer's perspective (authentic voice)
2. Hook that sounds natural, not salesy
3. Product mention that feels organic
4. Clear call-to-action with discount code
5. Disclosure language (FTC compliant)
6. 10-15 relevant hashtags

Key requirements:
- Sound like the influencer, not the brand
- Focus on authentic experience
- Balance promotional with value
- Include proper #ad disclosure`,
    placeholders: [
      "BRAND OR PRODUCT",
      "INFLUENCER STYLE - authentic/luxury/funny/educational",
      "PLATFORM",
      "AUDIENCE",
      "PRODUCT DETAILS",
      "DISCOUNT OR OFFER",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "An authentic-sounding influencer post with FTC-compliant disclosure, natural product mention, and clear CTA.",
    customizationNotes: [
      "Add specific influencer talking points or must-mentions",
      "Include link-in-bio or link placement instructions",
      "Add brand guidelines for approval",
    ],
    tags: ["influencer", "partnership", "collaboration", "ftc"],
    order: 9,
  },

  {
    id: "social-media-crisis-response",
    title: "Social Media Crisis Response",
    description: "Craft a thoughtful response to a social media issue or PR situation.",
    promptText: `Write a social media crisis response post.

Situation: [DESCRIBE THE ISSUE OR CRISIS]
Platform: [WHERE THIS IS POSTING]
Brand voice: [YOUR BRAND TONE]

Context:
[WHAT HAPPENED - BE HONEST]

Stakeholders affected:
[WHO IS AFFECTED]

Please create:
1. A sincere acknowledgment post
2. What happened (transparency)
3. What we're doing about it (action)
4. How we're preventing it in the future
5. Contact for further questions

Crisis communication principles:
- Respond quickly but thoughtfully
- Take responsibility where due
- Avoid defensiveness
- Focus on resolution
- Human and empathetic tone
- Keep it concise but complete`,
    placeholders: [
      "DESCRIBE THE ISSUE OR CRISIS",
      "WHERE THIS IS POSTING",
      "YOUR BRAND TONE",
      "WHAT HAPPENED - BE HONEST",
      "WHO IS AFFECTED",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "social-media",
    exampleOutput:
      "A professional crisis response post that acknowledges the issue, takes responsibility, outlines actions, and shows empathy.",
    customizationNotes: [
      "Add legal review notes if needed",
      "Specify link to longer statement if needed",
      "Include monitoring instructions for comments",
    ],
    tags: ["crisis", "pr", "response", "damage-control"],
    order: 10,
  },

  // ============================================================================
  // BLOG CONTENT (10 prompts)
  // ============================================================================

  {
    id: "blog-post-outline",
    title: "Blog Post Outline Generator",
    description: "Create a comprehensive outline for a blog post on any topic.",
    promptText: `Create a detailed blog post outline for a post about [TOPIC].

Target audience: [AUDIENCE - knowledge level/interests]
Blog type: [TYPE - how-to/listicle/guide/opinion/case-study]
Target word count: [WORD COUNT]
Primary keyword: [MAIN KEYWORD]

Secondary keywords to include:
[SECONDARY KEYWORDS]

Goal of this post:
[GOAL - educate/convert/inform/entertain]

Please create:
1. Working title options (5 variations)
2. Meta description (155 characters)
3. H1 heading
4. Detailed outline with H2/H3 subheadings
5. Bullet points for what each section covers
6. Word count allocation per section
7. Key takeaways box content
8. Internal link suggestions
9. CTA placement recommendations`,
    placeholders: [
      "TOPIC",
      "AUDIENCE - knowledge level/interests",
      "TYPE - how-to/listicle/guide/opinion/case-study",
      "WORD COUNT",
      "MAIN KEYWORD",
      "SECONDARY KEYWORDS",
      "GOAL - educate/convert/inform/entertain",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "A comprehensive outline with title options, meta description, hierarchical headings, section content notes, and SEO recommendations.",
    customizationNotes: [
      "Add competing articles to reference or improve upon",
      "Include data or statistics to research",
      "Specify your brand voice and style guidelines",
    ],
    tags: ["blog", "outline", "seo", "content-structure"],
    order: 11,
  },

  {
    id: "blog-post-first-draft",
    title: "Blog Post First Draft",
    description: "Generate a complete first draft of a blog post from your outline.",
    promptText: `Write a first draft blog post based on this outline:

[INSERT YOUR OUTLINE OR KEY POINTS]

Target audience: [AUDIENCE]
Tone: [TONE - professional/conversational/authoritative/friendly]
Brand voice guidelines: [YOUR BRAND VOICE NOTES]

Keyword focus:
Primary: [PRIMARY KEYWORD]
Secondary: [SECONDARY KEYWORDS]

Please write:
1. Compelling headline (H1)
2. Introduction (hook + thesis + what they'll learn)
3. Body sections following the outline
4. Conclusion + clear CTA
5. Meta description suggestion

Writing guidelines:
- Use short paragraphs (2-3 sentences max)
- Include subheadings every 300 words
- Add bullet points for scannability
- Write conversationally but professionally
- Include transition phrases between sections
- Optimize for featured snippets where applicable`,
    placeholders: [
      "INSERT YOUR OUTLINE OR KEY POINTS",
      "AUDIENCE",
      "TONE - professional/conversational/authoritative/friendly",
      "YOUR BRAND VOICE NOTES",
      "PRIMARY KEYWORD",
      "SECONDARY KEYWORDS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "A complete blog draft with headline, introduction, body sections, conclusion, CTA, and meta description.",
    customizationNotes: [
      "Add specific examples or case studies to include",
      "Specify word count for each section",
      "Include internal/external link targets",
    ],
    tags: ["blog", "draft", "content-writing", "seo"],
    order: 12,
  },

  {
    id: "blog-research-assistant",
    title: "Blog Research Assistant",
    description: "Gather and synthesize research for your blog post topic.",
    promptText: `Help me research a blog post about [TOPIC].

What I want to cover:
[MY ANGLE OR SPECIFIC FOCUS]

Target audience: [AUDIENCE]
Depth level: [DEPTH - overview/detailed/expert]

Please provide:
1. Key statistics and data points (with sources)
2. Expert opinions or quotes to reference
3. Common questions people ask about this topic
4. Latest trends or developments
5. Case studies or examples
6. Counterarguments to address
7. Tools or resources mentioned frequently
8. Glossary of key terms

For each item, include:
- The information
- Why it matters for this post
- Where it would fit in the structure
- Citation or source suggestions`,
    placeholders: [
      "TOPIC",
      "MY ANGLE OR SPECIFIC FOCUS",
      "AUDIENCE",
      "DEPTH - overview/detailed/expert",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "Structured research with statistics, expert insights, trends, case studies, and placement suggestions for each piece of information.",
    customizationNotes: [
      "Specify recency requirements (e.g., only data from 2024+)",
      "Add geographic focus if relevant",
      "Include competitor research context",
    ],
    tags: ["research", "blog", "data", "statistics"],
    order: 13,
  },

  {
    id: "blog-seo-optimization",
    title: "Blog Post SEO Optimization",
    description: "Optimize an existing blog post for search engines.",
    promptText: `Optimize this blog post for SEO:

[INSERT YOUR BLOG POST]

Target keyword: [PRIMARY KEYWORD]
Secondary keywords: [SECONDARY KEYWORDS]

Current issues I'm aware of:
[ANY SEO CONCERNS]

Please analyze and provide:
1. Keyword optimization assessment
   - Primary keyword placement
   - Secondary keyword opportunities
   - Keyword density analysis
2. On-page SEO improvements
   - Title tag optimization
   - Meta description
   - H1/H2 structure
   - Internal linking opportunities
   - External linking suggestions
3. Content improvements
   - Featured snippet opportunities
   - Readability enhancements
   - Missing subtopics
4. Technical SEO notes
   - URL structure suggestions
   - Image alt text needs
   - Schema markup opportunities

Provide specific before/after examples for each improvement.`,
    placeholders: [
      "INSERT YOUR BLOG POST",
      "PRIMARY KEYWORD",
      "SECONDARY KEYWORDS",
      "ANY SEO CONCERNS",
    ],
    bestTool: "chatgpt",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "An SEO audit with specific recommendations, before/after examples, and prioritized action items.",
    customizationNotes: [
      "Add your competitors to compare against",
      "Include search intent (informational/transactional/etc.)",
      "Specify your CMS for technical recommendations",
    ],
    tags: ["seo", "optimization", "blog", "on-page-seo"],
    order: 14,
  },

  {
    id: "content-repurposing-ideas",
    title: "Content Repurposing Strategy",
    description: "Transform one piece of content into multiple formats.",
    promptText: `Generate content repurposing ideas for this existing content:

[INSERT YOUR EXISTING CONTENT - OR DESCRIBE IT]

Content type: [TYPE - blog/video/podcast/etc.]
Original goal: [ORIGINAL PURPOSE]
Target audience: [AUDIENCE]

Available resources:
[WHAT YOU HAVE - IMAGES/Data/Quotes/etc.]

Please create a repurposing plan with:
1. Content audit - what's most valuable/reusable
2. Platform-specific ideas (at least 10)
   - Social media posts
   - Short-form video
   - Email content
   - Infographic ideas
   - Podcast clips
   - LinkedIn articles
   - Newsletter sections
3. Priority ranking (quick wins to big projects)
4. Estimated effort for each
5. How to maintain quality while scaling
6. Cross-promotion strategy`,
    placeholders: [
      "INSERT YOUR EXISTING CONTENT - OR DESCRIBE IT",
      "TYPE - blog/video/podcast/etc.",
      "ORIGINAL PURPOSE",
      "AUDIENCE",
      "WHAT YOU HAVE - Images/Data/Quotes/etc.",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "A strategic repurposing plan with 10+ content ideas, effort estimates, and implementation guidance.",
    customizationNotes: [
      "Add your team capacity constraints",
      "Specify platforms you want to focus on",
      "Include your content tools and tech stack",
    ],
    tags: ["repurposing", "content-strategy", "scaling", "recycling"],
    order: 15,
  },

  {
    id: "blog-headline-generator",
    title: "Irresistible Blog Headlines",
    description: "Generate click-worthy blog headlines that drive traffic.",
    promptText: `Generate compelling blog headlines for a post about [TOPIC].

Target audience: [AUDIENCE]
Content type: [TYPE - how-to/listicle/guide/opinion/news]
Primary keyword: [KEYWORD TO INCLUDE]

Content overview:
[BRIEF CONTENT SUMMARY]

Please provide 15 headline options in these categories:
1. How-to headlines (actionable)
2. Number/list headlines (specific)
3. Question headlines (curiosity)
4. Negative/avoidance headlines (fear of missing out)
5. Testimonial/social proof headlines
6. Controversial/counterintuitive headlines
7. Ultimate/guide headlines (comprehensive)

For each headline, note:
- Character count (keep under 60 for SEO)
- Emotional trigger used
- Why it works`,
    placeholders: [
      "TOPIC",
      "AUDIENCE",
      "TYPE - how-to/listicle/guide/opinion/news",
      "KEYWORD TO INCLUDE",
      "BRIEF CONTENT SUMMARY",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "15 headline options categorized by type with character counts and psychological triggers explained.",
    customizationNotes: [
      "Add your brand voice preferences (punchy vs. professional)",
      "Exclude certain types (e.g., no clickbait)",
      "Include competitor headlines to beat",
    ],
    tags: ["headlines", "copywriting", "click-through", "titles"],
    order: 16,
  },

  {
    id: "blog-series-planner",
    title: "Blog Series Planner",
    description: "Plan a multi-part blog series that keeps readers coming back.",
    promptText: `Plan a blog series about [TOPIC].

Target audience: [AUDIENCE]
Series length: [NUMBER OF POSTS]
Publication frequency: [FREQUENCY - weekly/biweekly/etc.]
Goals: [GOALS - traffic/engagement/leads/authority]

Topic context:
[WHY THIS TOPIC MATTERS TO YOUR AUDIENCE]

Please create:
1. Series title and concept
2. Individual post topics (each builds on the last)
3. Content flow and narrative arc
4. Hook or cliffhanger between posts
5. Content upgrades/lead magnets for each post
6. Cross-linking strategy
7. How the finale ties everything together
8. Series landing page outline
9. Promotion strategy for the series

Make each post:
- Valuable as standalone content
- Connected to the larger narrative
- Progressively more valuable`,
    placeholders: [
      "TOPIC",
      "AUDIENCE",
      "NUMBER OF POSTS",
      "FREQUENCY - weekly/biweekly/etc.",
      "GOALS - traffic/engagement/leads/authority",
      "WHY THIS TOPIC MATTERS TO YOUR AUDIENCE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "A complete blog series plan with interconnected post topics, narrative arc, and promotion strategy.",
    customizationNotes: [
      "Add evergreen vs. timely content preferences",
      "Include existing posts to build from",
      "Specify your email list integration plans",
    ],
    tags: ["blog-series", "content-planning", "audience-retention"],
    order: 17,
  },

  {
    id: "guest-post-pitch",
    title: "Guest Post Pitch Email",
    description: "Craft a compelling guest post pitch that gets accepted.",
    promptText: `Write a guest post pitch for [TARGET PUBLICATION].

Publication: [PUBLICATION NAME]
My expertise: [MY CREDENTIALS/EXPERIENCE]
Topic idea: [PROPOSED TOPIC]

Why this topic fits their audience:
[WHY IT'S A GOOD FIT]

What I'll cover:
[MAIN POINTS OR UNIQUE ANGLE]

Please create:
1. Subject line that gets opened
2. Personalized opening
3. The pitch (what I'll write, why now)
4. Why I'm the right person to write it
5. Links to my best writing samples
6. Clear next steps/CTA
7. Professional sign-off

Pitch best practices:
- Show you know their content
- Propose something fresh, not covered before
- Demonstrate expertise without arrogance
- Keep it concise (under 200 words)
- Make it easy to say yes`,
    placeholders: [
      "TARGET PUBLICATION",
      "PUBLICATION NAME",
      "MY CREDENTIALS/EXPERIENCE",
      "PROPOSED TOPIC",
      "WHY IT'S A GOOD FIT",
      "MAIN POINTS OR UNIQUE ANGLE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "A concise, personalized guest post pitch with strong subject line, clear value proposition, and professional tone.",
    customizationNotes: [
      "Add specific articles from their site to reference",
      "Include your metrics/authority if relevant",
      "Specify link/bio requirements",
    ],
    tags: ["guest-post", "pitch", "outreach", "backlinks"],
    order: 18,
  },

  {
    id: "blog-content-upgrade",
    title: "Content Upgrade Ideas",
    description: "Create lead magnets that convert blog readers into subscribers.",
    promptText: `Generate content upgrade ideas for a blog post about [TOPIC].

Blog post context:
[BLOG POST SUMMARY OR MAIN POINTS]

Target audience: [AUDIENCE]
Your product/service: [WHAT YOU SELL]
Current offer: [EXISTING LEAD MAGNET IF ANY]

Please create 5 content upgrade ideas:
1. Idea name + type (PDF/checklist/template/etc.)
2. What it includes
3. Why readers will want it
4. How it delivers additional value beyond the post
5. Delivery mechanism (instant download/email/etc.)
6. How it connects to your paid offer

For each idea:
- Quick to create (under 4 hours)
- High perceived value
- Directly related to post content
- Positions you as an expert
- Natural step toward your product/service`,
    placeholders: [
      "TOPIC",
      "BLOG POST SUMMARY OR MAIN POINTS",
      "AUDIENCE",
      "WHAT YOU SELL",
      "EXISTING LEAD MAGNET IF ANY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "5 content upgrade ideas with descriptions, value propositions, and connection to paid offers.",
    customizationNotes: [
      "Add your creation tools and limitations",
      "Specify formats you can easily create",
      "Include your email platform for delivery",
    ],
    tags: ["lead-magnet", "content-upgrade", "conversion", "email-list"],
    order: 19,
  },

  {
    id: "blog-post-refresh",
    title: "Blog Post Refresh Strategy",
    description: "Update and improve old blog content for better performance.",
    promptText: `Create a refresh strategy for this existing blog post:

[PASTE YOUR OLD BLOG POST]

Original publish date: [DATE]
Current performance: [PAGEVIEWS/TRAFFIC/CONVERSIONS]
Target keyword: [KEYWORD]

Please provide:
1. Content audit
   - What's outdated
   - What's still valuable
   - What's missing compared to top results
2. Specific updates needed
   - Statistics/data to refresh
   - Examples to update
   - Screenshots to replace
   - Links to check
3. SEO improvements
   - New keyword opportunities
   - Meta description refresh
   - Title optimization
4. Format enhancements
   - Structure improvements
   - Visual additions
   - Interactive elements
5. Promotion plan for the updated version
6. How to signal the update to Google`,
    placeholders: ["PASTE YOUR OLD BLOG POST", "DATE", "PAGEVIEWS/TRAFFIC/CONVERSIONS", "KEYWORD"],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "blog-content",
    exampleOutput:
      "A comprehensive refresh strategy with specific updates, SEO improvements, and promotion plan.",
    customizationNotes: [
      "Add top competitors to compare against",
      "Include your analytics data",
      "Specify your update frequency goal",
    ],
    tags: ["content-refresh", "update", "seo", "optimization"],
    order: 20,
  },

  // ============================================================================
  // AD COPY (9 prompts)
  // ============================================================================

  {
    id: "meta-facebook-ads",
    title: "Facebook/Meta Ad Copy",
    description: "Create high-converting Facebook and Instagram ad copy.",
    promptText: `Write Facebook/Instagram ad copy for [PRODUCT/SERVICE].

Product/service:
[WHAT YOU'RE SELLING]

Target audience: [AUDIENCE]
Campaign objective: [OBJECTIVE - conversions/traffic/awareness/leads]
Funnel stage: [STAGE - cold/warm/retargeting]

Key benefits:
[BENEFITS LIST]

Pain points solved:
[PAIN POINTS]

Offer/CTA:
[WHAT YOU WANT THEM TO DO]

Please create 5 ad variations:
1. Problem-agitation-solution
2. Story-based
3. Social proof/testimonial
4. Direct response
5. Question/hook

Each ad needs:
- Hook (first line stops scroll)
- Body (persuasive, benefit-focused)
- CTA (clear, action-oriented)
- Headline (40 characters max for Facebook)

Optimize for:
- Mobile-first reading
- Skimmability
- One clear message
- Emotional or rational appeal (vary by ad)`,
    placeholders: [
      "PRODUCT/SERVICE",
      "WHAT YOU'RE SELLING",
      "AUDIENCE",
      "OBJECTIVE - conversions/traffic/awareness/leads",
      "STAGE - cold/warm/retargeting",
      "BENEFITS LIST",
      "PAIN POINTS",
      "WHAT YOU WANT THEM TO DO",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "ad-copy",
    exampleOutput:
      "5 Facebook ad variations with hooks, body copy, CTAs, and headlines optimized for different psychological triggers.",
    customizationNotes: [
      "Add your character limits (varies by placement)",
      "Include creative/video context if needed",
      "Add compliance notes for your industry",
    ],
    tags: ["facebook", "instagram", "meta-ads", "paid-social"],
    order: 21,
  },

  {
    id: "google-search-ads",
    title: "Google Search Ad Copy",
    description: "Write responsive search ads that get clicks and conversions.",
    promptText: `Write Google Search ads for [PRODUCT/SERVICE].

Landing page: [LANDING PAGE URL OR DESCRIPTION]
Business type: [BUSINESS TYPE]
Location: [LOCATION IF LOCAL BUSINESS]

Target keywords:
[PRIMARY KEYWORDS]

Unique selling proposition:
[WHAT MAKES YOU DIFFERENT]

Offer/CTA:
[PRIMARY ACTION]

Please create:
1. 10 headlines (30 characters max)
   - Mix of brand, benefit, and CTA
2. 4 descriptions (90 characters max)
   - Benefits-focused
   - Include social proof if available
3. Ad extension suggestions
   - Sitelinks
   - Callouts
   - Structured snippets
4. Keyword insertion templates where applicable

Responsive Search Ad best practices:
- Pin 1 headline to position 1 for control
- Mix exact and phrase match keywords
- Include at least 1 headline with your brand name
- Have 1 headline that's a clear CTA
- Use number/CTA in descriptions`,
    placeholders: [
      "PRODUCT/SERVICE",
      "LANDING PAGE URL OR DESCRIPTION",
      "BUSINESS TYPE",
      "LOCATION IF LOCAL BUSINESS",
      "PRIMARY KEYWORDS",
      "WHAT MAKES YOU DIFFERENT",
      "PRIMARY ACTION",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "ad-copy",
    exampleOutput:
      "10 headlines, 4 descriptions, and extension suggestions optimized for Google Responsive Search Ads.",
    customizationNotes: [
      "Add character limits for specific languages",
      "Include your display URL options",
      "Add your competitors to differentiate from",
    ],
    tags: ["google-ads", "ppc", "search-ads", "rsa"],
    order: 22,
  },

  {
    id: "linkedin-sponsored-content",
    title: "LinkedIn Sponsored Content",
    description: "Create LinkedIn ad copy that resonates with professionals.",
    promptText: `Write LinkedIn Sponsored Content ad copy for [OFFER].

Target audience: [JOB TITLES/INDUSTRIES/COMPANY SIZES]
Offer: [WHAT YOU'RE PROMOTING]
Funnel stage: [AWARENESS/CONSIDERATION/CONVERSION]

Value proposition:
[WHY THEY SHOULD CARE]

Key points to communicate:
[MAIN MESSAGES]

Please create 3 ad variations:
1. Thought leadership angle
2. Pain point/solution angle
3. Social proof/case study angle

Each ad includes:
- Intro text (up to 150 characters for mobile)
- Headline
- Description
- CTA (book demo, learn more, sign up, etc.)
- Intro text + headline for lead gen form

LinkedIn-specific considerations:
- Professional tone but conversational
- B2B appropriate
- Focus on business outcomes
- Testimonial/social proof where possible`,
    placeholders: [
      "OFFER",
      "JOB TITLES/INDUSTRIES/COMPANY SIZES",
      "WHAT YOU'RE PROMOTING",
      "AWARENESS/CONSIDERATION/CONVERSION",
      "WHY THEY SHOULD CARE",
      "MAIN MESSAGES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "ad-copy",
    exampleOutput:
      "3 LinkedIn ad variations with intros, headlines, descriptions, and CTAs optimized for B2B professionals.",
    customizationNotes: [
      "Add your lead magnet or offer specifics",
      "Include your targeting notes",
      "Add compliance notes if regulated industry",
    ],
    tags: ["linkedin", "b2b", "sponsored-content", "professional"],
    order: 23,
  },

  {
    id: "ad-variation-generator",
    title: "A/B Test Ad Variations",
    description: "Generate multiple ad variations for systematic A/B testing.",
    promptText: `Create A/B test ad variations for this base ad:

[INSERT YOUR EXISTING AD COPY]

Platform: [PLATFORM]
Current performance: [CTR/CONVERSION RATE IF KNOWN]

What to test:
[WHAT ELEMENTS TO EXPERIMENT WITH]

Please create variations testing:
1. Headlines only (5 options)
2. Opening hooks only (5 options)
3. CTAs only (3 options)
4. Value propositions (3 options)
5. Complete ad combinations (5 full ads)

For each variation, explain:
- What's being tested
- Hypothesis for why it might perform better
- Which metric it's designed to improve (CTR, conversion, etc.)

A/B testing best practices:
- Change one variable at a time
- Have a clear hypothesis
- Run until statistical significance
- Document what you learned`,
    placeholders: [
      "INSERT YOUR EXISTING AD COPY",
      "PLATFORM",
      "CTR/CONVERSION RATE IF KNOWN",
      "WHAT ELEMENTS TO EXPERIMENT WITH",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "ad-copy",
    exampleOutput:
      "Multiple ad variations with clear hypotheses, testing frameworks, and metric predictions.",
    customizationNotes: [
      "Add your statistical significance requirements",
      "Include your testing tool constraints",
      "Add budget/cycle duration considerations",
    ],
    tags: ["ab-testing", "optimization", "variations", "testing"],
    order: 24,
  },

  {
    id: "retargeting-ad-copy",
    title: "Retargeting Ad Copy",
    description: "Write ads that bring back visitors who didn't convert.",
    promptText: `Write retargeting ad copy for [PRODUCT/SERVICE].

What they did:
[WHAT ACTION THEY TOOK - visited site/cart abandon/etc.]

Where they dropped off:
[WHERE IN THE FUNNEL THEY LEFT]

Product/service:
[WHAT YOU'RE SELLING]

Objection to overcome:
[COMMON REASON THEY DIDN'T CONVERT]

Please create retargeting ads for:
1. Site visitors (general)
2. Product page viewers
3. Cart abandoners
4. Checkout starters

Each ad should:
- Acknowledge their previous interest
- Overcome a specific objection
- Create urgency or FOMO
- Offer a compelling reason to return now
- Have a clear CTA

Retargeting psychology:
- "You left something behind"
- Social proof reinforcement
- Scarcity/urgency
- New reason to return (bonus, update, etc.)`,
    placeholders: [
      "PRODUCT/SERVICE",
      "WHAT ACTION THEY TOOK - visited site/cart abandon/etc.",
      "WHERE IN THE FUNNEL THEY LEFT",
      "WHAT YOU'RE SELLING",
      "COMMON REASON THEY DIDN'T CONVERT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "ad-copy",
    exampleOutput:
      "Retargeting ads for different funnel stages with psychology-driven messaging and clear CTAs.",
    customizationNotes: [
      "Add your discount offers for abandons",
      "Include frequency cap recommendations",
      "Add creative suggestions for each stage",
    ],
    tags: ["retargeting", "remarketing", "recovery", "abandonment"],
    order: 25,
  },

  {
    id: "tiktok-ad-script",
    title: "TikTok Ad Script",
    description: "Create native-feeling TikTok ad scripts that don't feel like ads.",
    promptText: `Write a TikTok ad script for [PRODUCT/SERVICE].

Product: [WHAT YOU'RE SELLING]
Target audience: [AUDIENCE AGE/INTERESTS]
Ad format: [TYPE - spark ad/in-feed/topview]

TikTok style:
[STYLE - funny/trend/educational/asmr/testimonial]

Key message:
[MAIN POINT TO COMMUNICATE]

Please create:
1. Native-feeling script (not "ad-like")
2. Hook in first 1-2 seconds (critical)
3. Sound/trend integration suggestions
4. Visual directions
5. Text overlay recommendations
6. Natural product integration
7. CTA that fits the platform

TikTok ad best practices:
- Match organic content style
- Use trending sounds
- Vertical format optimization
- Loop-friendly ending
- Caption with relevant hashtags
- CTA in caption + on video`,
    placeholders: [
      "PRODUCT/SERVICE",
      "WHAT YOU'RE SELLING",
      "AUDIENCE AGE/INTERESTS",
      "TYPE - spark ad/in-feed/topview",
      "STYLE - funny/trend/educational/asmr/testimonial",
      "MAIN POINT TO COMMUNICATE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "ad-copy",
    exampleOutput:
      "A TikTok ad script with visual directions, trend suggestions, and native-feeling content.",
    customizationNotes: [
      "Add specific TikTok creators you admire",
      "Include your product demo requirements",
      "Add your budget/length constraints",
    ],
    tags: ["tiktok", "video-ad", "native-ads", "gen-z"],
    order: 26,
  },

  {
    id: "youtube-ad-script",
    title: "YouTube Ad Script",
    description: "Create YouTube ads that viewers actually watch.",
    promptText: `Write a YouTube ad script for [PRODUCT/SERVICE].

Ad type: [TYPE - skippable/non-skippable/bumper]
Length: [DURATION - 6s/15s/30s/60s+]
Placement: [PRE-ROLL/MID-ROLL/DISCOVERY]

Product/service:
[WHAT YOU'RE SELLING]

Target audience:
[WHO YOU'RE TARGETING]

Key message:
[MAIN POINT]

Please create a script with:
1. Pre-roll hook (first 5 seconds are critical)
2. Problem/solution framework
3. Social proof or credibility
4. Clear value proposition
5. Strong CTA
6. Visual/audio directions

Format:
- [VISUAL]: What's on screen
- [AUDIO]: What's said
- [TEXT]: Any text overlays

YouTube ad tips:
- Acknowledge it's an ad (honesty performs)
- Deliver value, don't just sell
- Consider the "skip" button in your script
- Match the video's tone if mid-roll`,
    placeholders: [
      "PRODUCT/SERVICE",
      "TYPE - skippable/non-skippable/bumper",
      "DURATION - 6s/15s/30s/60s+",
      "PRE-ROLL/MID-ROLL/DISCOVERY",
      "WHAT YOU'RE SELLING",
      "WHO YOU'RE TARGETING",
      "MAIN POINT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "ad-copy",
    exampleOutput:
      "A YouTube ad script with visual/audio directions, timed to handle the skip button effectively.",
    customizationNotes: [
      "Add your brand guidelines",
      "Include your offer/promotion details",
      "Add creator/influencer collaboration context",
    ],
    tags: ["youtube", "video-ad", "script", "pre-roll"],
    order: 27,
  },

  {
    id: "display-ad-copy",
    title: "Display/Banner Ad Copy",
    description: "Write short, punchy copy for display and banner ads.",
    promptText: `Write display ad copy for [PRODUCT/SERVICE].

Ad size: [BANNER DIMENSIONS - e.g., 300x250]
Campaign type: [CONTEXT - remarketing/prospecting/awareness]
Offer: [WHAT YOU'RE PROMOTING]

Target audience:
[WHO WILL SEE THIS]

Please create:
1. 5 headline options (short - under 25 characters)
2. 5 subheadline options (under 35 characters)
3. 5 CTA button options (2-4 words)
4. Secondary text options (if applicable)

Display ad principles:
- Less is more (minimal text)
- Clear value proposition
- Benefit-oriented
- Action-oriented CTA
- Legible at small sizes
- Consider animation potential

Pair each element and explain the combo strategy.`,
    placeholders: [
      "PRODUCT/SERVICE",
      "BANNER DIMENSIONS - e.g., 300x250",
      "CONTEXT - remarketing/prospecting/awareness",
      "WHAT YOU'RE PROMOTING",
      "WHO WILL SEE THIS",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "ad-copy",
    exampleOutput:
      "Display ad copy options with headlines, subheadlines, CTAs, and combination strategies.",
    customizationNotes: [
      "Add your brand colors and visual guidelines",
      "Include character limits for your sizes",
      "Add animation/motion capabilities if available",
    ],
    tags: ["display-ads", "banner-ads", "copy", "ppc"],
    order: 28,
  },

  {
    id: "native-ad-copy",
    title: "Native Ad Copy",
    description: "Create native advertising copy that blends with content.",
    promptText: `Write native ad copy for [PRODUCT/SERVICE].

Native platform: [PLATFORM - Taboola/Outbrain/RevContent/etc.]
Content it appears next to: [CONTENT TYPE/CONTEXT]

What you're promoting:
[PRODUCT/SERVICE/CONTENT]

Target audience:
[READER DEMOGRAPHICS/INTERESTS]

Destination:
[WHERE THEY LAND AFTER CLICKING]

Please create:
1. Headline options (up to 80 characters)
   - Click-worthy but not clickbait
   - Curiosity-driven
   - Benefit-oriented
2. Description/description options
   - Expand on the headline
   - Create intrigue without misleading
3. Disclosure options (native ads require disclosure)
   - "Sponsored," "Ad," "Promoted"

Native ad best practices:
- Match the editorial style of the platform
- Deliver on the headline's promise
- Quality content destination (don't disappoint)
- Clear value proposition
- Authentic curiosity gap`,
    placeholders: [
      "PRODUCT/SERVICE",
      "PLATFORM - Taboola/Outbrain/RevContent/etc.",
      "CONTENT TYPE/CONTEXT",
      "PRODUCT/SERVICE/CONTENT",
      "READER DEMOGRAPHICS/INTERESTS",
      "WHERE THEY LAND AFTER CLICKING",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "ad-copy",
    exampleOutput:
      "Native ad headlines, descriptions, and disclosures optimized for content-recommendation platforms.",
    customizationNotes: [
      "Add your content quality expectations",
      "Include FTC compliance requirements",
      "Add performance data from previous ads",
    ],
    tags: ["native-ads", "taboola", "outbrain", "content-discovery"],
    order: 29,
  },

  // ============================================================================
  // EMAIL MARKETING (9 prompts)
  // ============================================================================

  {
    id: "welcome-email-sequence",
    title: "Welcome Email Sequence",
    description: "Create a welcome email series that engages new subscribers.",
    promptText: `Create a welcome email sequence for new subscribers.

Business/offer: [WHAT YOU SELL OR DO]
Lead magnet: [WHAT THEY SIGNED UP FOR]
Sequence length: [NUMBER OF EMAILS - typically 3-7]
Goal: [GOAL - nurture/convert/onboard/educate]

Subscriber context:
[WHAT THEY EXPECTED WHEN SIGNING UP]

Product/service context:
[WHAT YOU ULTIMATELY WANT THEM TO BUY/DO]

Please create:
1. Email 1: Immediate deliverable + warm welcome
2. Email 2: More value, introduce yourself/brand
3. Email 3: Soft pitch or next step
4. [Additional emails as needed]

Each email needs:
- Subject line (tested for open rates)
- Preheader text
- Opening (warm, personal)
- Body (valuable content)
- CTA (clear but not pushy)
- P.S. (often the most-read line)

Welcome sequence psychology:
- Deliver value first, sell second
- Build trust through consistency
- Set expectations for future emails
- Establish sending frequency`,
    placeholders: [
      "WHAT YOU SELL OR DO",
      "WHAT THEY SIGNED UP FOR",
      "NUMBER OF EMAILS - typically 3-7",
      "GOAL - nurture/convert/onboard/educate",
      "WHAT THEY EXPECTED WHEN SIGNING UP",
      "WHAT YOU ULTIMATELY WANT THEM TO BUY/DO",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "email-marketing",
    exampleOutput:
      "A complete welcome sequence with emails that deliver value, build trust, and guide toward conversion.",
    customizationNotes: [
      "Add your email frequency expectations",
      "Include your brand voice guidelines",
      "Add your product/service specifics",
    ],
    tags: ["welcome-email", "email-sequence", "nurture", "automation"],
    order: 30,
  },

  {
    id: "newsletter-content",
    title: "Weekly Newsletter Content",
    description: "Create engaging newsletter content that subscribers actually read.",
    promptText: `Write a weekly newsletter about [TOPIC/THEME].

Newsletter name: [YOUR NEWSLETTER NAME]
Audience: [SUBSCRIBERS - who are they?]
Goal: [GOAL - educate/entertain/engage/sell]

This week's content:
[MAIN TOPIC OR STORY]

Secondary items:
[ADDITIONAL CONTENT, LINKS, OR UPDATES]

Please create:
1. Subject line options (5 variations)
2. Preheader text
3. Personal opening (sets the tone)
4. Main content section
5. Value-add (tip, resource, or insight)
6. What I'm reading/recommending section
7. Question or engagement prompt
8. Clear sign-off

Newsletter principles:
- Conversational, one-to-one tone
- Scannable structure
- One main idea per edition
- Mix of content types
- Consistent sections
- Readable on mobile`,
    placeholders: [
      "TOPIC/THEME",
      "YOUR NEWSLETTER NAME",
      "SUBSCRIBERS - who are they?",
      "GOAL - educate/entertain/engage/sell",
      "MAIN TOPIC OR STORY",
      "ADDITIONAL CONTENT, LINKS, OR UPDATES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "email-marketing",
    exampleOutput:
      "A complete newsletter with subject line variations, engaging sections, and reader-focused content.",
    customizationNotes: [
      "Add your newsletter sections (keep or modify)",
      "Include your sponsored content if applicable",
      "Add your reading recommendations sources",
    ],
    tags: ["newsletter", "email", "content", "engagement"],
    order: 31,
  },

  {
    id: "promotional-email",
    title: "Promotional/Sales Email",
    description: "Write sales emails that convert without being pushy.",
    promptText: `Write a promotional email for [PRODUCT/SERVICE/OFFER].

What you're promoting:
[WHAT YOU'RE SELLING]

Offer details:
[DISCOUNT/DEAL/OFFER]

Target audience:
[COLD/WARM/HOT LEADS]

Urgency/scarcity:
[ANY DEADLINE OR LIMITATION]

Key benefits:
[BENEFITS LIST]

Please create:
1. 5 subject line options
   - Curiosity
   - Direct
   - Benefit-driven
   - Urgency
   - Personalization
2. Email body with:
   - Hook (first line matters most)
   - Problem/solution framework
   - Benefits (not features)
   - Social proof
   - Clear CTA
   - P.S. with additional incentive

Sales email principles:
- Focus on value, not discount
- Create genuine urgency
- One clear CTA
- Mobile-optimized formatting
- Short paragraphs
- Scannable structure`,
    placeholders: [
      "PRODUCT/SERVICE/OFFER",
      "WHAT YOU'RE SELLING",
      "DISCOUNT/DEAL/OFFER",
      "COLD/WARM/HOT LEADS",
      "ANY DEADLINE OR LIMITATION",
      "BENEFITS LIST",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "email-marketing",
    exampleOutput:
      "A promotional email with subject line variations, benefit-focused copy, and conversion-optimized structure.",
    customizationNotes: [
      "Add your compliance notes for promotions",
      "Include your pricing/discount specifics",
      "Add your sending frequency considerations",
    ],
    tags: ["promotional", "sales-email", "offer", "conversion"],
    order: 32,
  },

  {
    id: "re-engagement-campaign",
    title: "Re-engagement Email Campaign",
    description: "Win back inactive subscribers with targeted emails.",
    promptText: `Create a re-engagement email campaign for inactive subscribers.

Business type: [WHAT YOU DO]
They're inactive because:
[LIKELY REASON - lost interest/to many emails/etc.]
Inactivity definition: [HOW LONG THEY'VE BEEN GONE - 30/60/90+ days]

Goal: [GOAL - re-engage/clean list/feedback]

Value to offer:
[INCENTIVE TO RETURN]

Please create a 3-email re-engagement series:
1. "We miss you" - gentle check-in
2. Value reminder - what they're missing
3. Last chance - update preferences or unsubscribe

Each email needs:
- Subject line (acknowledge absence)
- Empathetic tone (not guilt-inducing)
- Clear value proposition
- Easy action options
- Preference center link
- Unsubscribe option (sometimes better to let them go)

Re-engagement psychology:
- No shaming or guilt
- Reminder of value
- Easy to re-engage
- Respect if they want to leave`,
    placeholders: [
      "WHAT YOU DO",
      "LIKELY REASON - lost interest/to many emails/etc.",
      "HOW LONG THEY'VE BEEN GONE - 30/60/90+ days",
      "GOAL - re-engage/clean list/feedback",
      "INCENTIVE TO RETURN",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "email-marketing",
    exampleOutput:
      "A 3-email re-engagement series with empathetic messaging and clear action options.",
    customizationNotes: [
      "Add your list hygiene goals",
      "Include your re-engagement offer",
      "Add your email platform specifics",
    ],
    tags: ["re-engagement", "inactive", "win-back", "list-hygiene"],
    order: 33,
  },

  {
    id: "cart-abandonment-emails",
    title: "Cart Abandonment Sequence",
    description: "Recover lost sales with strategic abandonment emails.",
    promptText: `Create a cart abandonment email sequence.

What they abandoned:
[PRODUCTS IN CART]

Average order value:
[AVERAGE CART VALUE]

Why they might have abandoned:
[LIKELY OBJECTIONS - price/shipping/etc.]

Incentive to return:
[DISCOUNT OR OFFER IF ANY]

Please create a 3-email abandonment sequence:
1. Immediate (1 hour): "Forgot something?" gentle reminder
2. Follow-up (24 hours): Value reinforcement + social proof
3. Last chance (48-72 hours): Incentive or urgency

Each email includes:
- Product image/name
- "Complete your purchase" CTA
- Benefit or social proof
- Address common objections
- Easy return-to-cart link

Abandonment email best practices:
- Don't say "cart" in subject line
- Product image increases conversions
- Show what they're missing
- Genuine urgency (not forced)
- Easy one-click return`,
    placeholders: [
      "PRODUCTS IN CART",
      "AVERAGE CART VALUE",
      "LIKELY OBJECTIONS - price/shipping/etc.",
      "DISCOUNT OR OFFER IF ANY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "email-marketing",
    exampleOutput:
      "A 3-email cart abandonment sequence with product focus, objection handling, and recovery CTAs.",
    customizationNotes: [
      "Add your product image details",
      "Include your shipping/return policies",
      "Add your discount strategy",
    ],
    tags: ["abandonment", "recovery", "ecommerce", "conversion"],
    order: 34,
  },

  {
    id: "email-subject-line-optimizer",
    title: "Email Subject Line Tester",
    description: "Generate and optimize subject lines for higher open rates.",
    promptText: `Generate and optimize email subject lines for [EMAIL TYPE].

Email purpose: [PURPOSE - newsletter/promotion/update/etc.]
Content preview:
[BRIEF EMAIL CONTENT SUMMARY]

Current subject line (if any):
[CURRENT SUBJECT LINE]

Goal: [PRIMARY GOAL - open/click/convert]

Please create:
1. 10 subject line options in these categories:
   - Curiosity/gap
   - Benefit-driven
   - Urgency/scarcity
   - Personalization
   - Question
   - How-to
   - News/announcement
   - Story/opening
   - Direct/simple
   - Unexpected/bold

For each subject line:
- Character count (keep under 50 for mobile)
- Explain why it works
- Predict open rate potential
- Note any spam triggers to avoid`,
    placeholders: [
      "EMAIL TYPE",
      "PURPOSE - newsletter/promotion/update/etc.",
      "BRIEF EMAIL CONTENT SUMMARY",
      "CURRENT SUBJECT LINE",
      "PRIMARY GOAL - open/click/convert",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "email-marketing",
    exampleOutput:
      "10 subject line options with character counts, psychological explanations, and spam trigger warnings.",
    customizationNotes: [
      "Add your brand voice preferences",
      "Include your typical open rates",
      "Add your industry for context",
    ],
    tags: ["subject-lines", "open-rate", "optimization", "testing"],
    order: 35,
  },

  {
    id: "product-launch-emails",
    title: "Product Launch Email Sequence",
    description: "Create buzz and drive sales with a launch email sequence.",
    promptText: `Create a product launch email sequence.

Product:
[WHAT YOU'RE LAUNCHING]

Launch timeline:
[LAUNCH DATES - pre/launch/day-of/post]

Price:
[PRICE OR PRICING TIER]

Target audience:
[WHO YOU'RE LAUNCHING TO]

Key differentiators:
[WHAT MAKES IT SPECIAL]

Please create:
1. Pre-launch teaser (build anticipation)
2. Launch day announcement (excitement + CTA)
3. Launch day follow-up (scarcity/urgency)
4. Post-launch social proof (testimonials/reviews)
5. Last chance (final call)

Each email needs:
- Subject line that gets opened
- Opening that hooks
- Value proposition
- Social proof
- Clear CTA
- Visual/creative suggestions

Launch email psychology:
- Build anticipation pre-launch
- Maximum excitement launch day
- Scarcity and urgency post-launch
- Social proof to overcome objections
- Clear deadline for action`,
    placeholders: [
      "WHAT YOU'RE LAUNCHING",
      "LAUNCH DATES - pre/launch/day-of/post",
      "PRICE OR PRICING TIER",
      "WHO YOU'RE LAUNCHING TO",
      "WHAT MAKES IT SPECIAL",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "email-marketing",
    exampleOutput:
      "A complete product launch email sequence with anticipation-building, launch-day excitement, and conversion-driving follow-ups.",
    customizationNotes: [
      "Add your launch timeline specifics",
      "Include your bonus/early-bird offers",
      "Add your waitlist or VIP segment notes",
    ],
    tags: ["launch", "product-launch", "sequence", "announcement"],
    order: 36,
  },

  {
    id: "email-segmentation-strategy",
    title: "Email Segmentation Strategy",
    description: "Plan targeted email segments for personalized campaigns.",
    promptText: `Create an email segmentation strategy for my business.

Business type: [WHAT YOU DO/SELL]
Email list size: [APPROXIMATE SUBSCRIBERS]
Current segmentation: [EXISTING SEGMENTS IF ANY]

Products/services:
[WHAT YOU OFFER]

Customer journey:
[HOW PEOPLE MOVE FROM LEAD TO CUSTOMER]

Please recommend:
1. Essential segments to create
   - Demographic
   - Behavioral
   - Purchase history
   - Engagement level
2. Segmentation implementation plan
3. Tailored content strategy for each segment
4. Tagging/tracking recommendations
5. Automation opportunities by segment

For each segment, include:
- Segment name
- Definition (who's in it)
- Size estimate
- Content strategy
- Expected lift in performance`,
    placeholders: [
      "WHAT YOU DO/SELL",
      "APPROXIMATE SUBSCRIBERS",
      "EXISTING SEGMENTS IF ANY",
      "WHAT YOU OFFER",
      "HOW PEOPLE MOVE FROM LEAD TO CUSTOMER",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "email-marketing",
    exampleOutput:
      "A segmentation strategy with segment definitions, content strategies, and implementation guidance.",
    customizationNotes: [
      "Add your email platform capabilities",
      "Include your data collection points",
      "Add your resource constraints",
    ],
    tags: ["segmentation", "personalization", "targeting", "automation"],
    order: 37,
  },

  {
    id: "drip-campaign-builder",
    title: "Drip Campaign Builder",
    description: "Create automated drip campaigns for lead nurturing.",
    promptText: `Create an email drip campaign for [PURPOSE].

Campaign goal: [WHAT YOU WANT TO ACHIEVE]
Starting trigger: [WHAT STARTS THE DRIP - signup/download/etc.]
Campaign length: [NUMBER OF EMAILS + FREQUENCY]

Target audience:
[WHO RECEIVES THIS]

Offer at the end:
[ULTIMATE CONVERSION GOAL]

Please create:
1. Campaign overview and strategy
2. Individual email outlines
   - Topic/angle
   - Key content
   - CTA for each
3. Timing/frequency recommendations
4. Exit criteria (when they leave the drip)
5. Success metrics to track

Drip campaign principles:
- Progressive value building
- One clear CTA per email
- Educational over promotional (70/30)
- Personal and conversational
- Mobile-optimized formatting`,
    placeholders: [
      "PURPOSE",
      "WHAT YOU WANT TO ACHIEVE",
      "WHAT STARTS THE DRIP - signup/download/etc.",
      "NUMBER OF EMAILS + FREQUENCY",
      "WHO RECEIVES THIS",
      "ULTIMATE CONVERSION GOAL",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "email-marketing",
    exampleOutput:
      "A drip campaign with email outlines, timing strategy, and conversion tracking recommendations.",
    customizationNotes: [
      "Add your email platform automation limits",
      "Include your content creation capacity",
      "Add your lead scoring criteria if used",
    ],
    tags: ["drip-campaign", "automation", "nurture", "lead-scoring"],
    order: 38,
  },

  // ============================================================================
  // LANDING PAGES (9 prompts)
  // ============================================================================

  {
    id: "landing-page-hero-copy",
    title: "Landing Page Hero Section",
    description: "Write compelling hero copy that captures attention and drives action.",
    promptText: `Write hero section copy for a landing page.

Product/service:
[WHAT YOU'RE SELLING]

Target audience:
[IDEAL CUSTOMER]

Main benefit:
[TRANSFORMATION OR OUTCOME]

Current awareness level:
[COLD/AWARE/WARM - how much do they know?]

Offer/CTA:
[PRIMARY ACTION YOU WANT]

Please create:
1. Headline options (5 variations)
   - Clear and benefit-driven
   - Under 15 words ideally
2. Subheadline (expands on headline)
3. Primary CTA button text
4. Secondary CTA option (if applicable)
5. Trust indicators (what to show near CTA)
6. Hero image/video recommendations

Hero copy principles:
- Focus on outcome, not features
- Speak directly to the user
- One clear message
- Clear CTA above the fold
- Mobile-first readability
- Instant clarity on what/who/for whom`,
    placeholders: [
      "WHAT YOU'RE SELLING",
      "IDEAL CUSTOMER",
      "TRANSFORMATION OR OUTCOME",
      "COLD/AWARE/WARM - how much do they know?",
      "PRIMARY ACTION YOU WANT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "landing-pages",
    exampleOutput:
      "Hero section copy with headline options, subheadlines, CTA buttons, and trust indicator recommendations.",
    customizationNotes: [
      "Add your character limits for layout",
      "Include your brand voice guidelines",
      "Add your visual context (image/video)",
    ],
    tags: ["hero", "above-fold", "headline", "cta"],
    order: 39,
  },

  {
    id: "landing-page-cta-copy",
    title: "CTA Button Copy Generator",
    description: "Create CTAs that visitors actually want to click.",
    promptText: `Generate compelling CTA button copy for [CONTEXT].

Page type: [LANDING PAGE/SIGN UP/SALES PAGE/etc.]
What they're getting:
[VALUE OR OUTCOME]

Current CTA:
[EXISTING BUTTON TEXT IF ANY]

Goal: [PRIMARY CONVERSION ACTION]

Please create 15 CTA options in these categories:
1. Action-oriented (verb-first)
2. Benefit-driven (what they get)
3. Risk-reversal (guarantee-focused)
4. Urgency/scarcity (act now)
5. Curiosity (what happens next)
6. Personal (make it about them)
7. Specific (exactly what happens)

For each CTA:
- Button text (under 25 characters ideally)
- Where it works best (placement/context)
- Why it converts
- A/B testing notes

CTA principles:
- Use action verbs
- Focus on value, not clicks
- Be specific about what happens
- Create urgency when genuine
- Test different psychological triggers`,
    placeholders: [
      "CONTEXT",
      "LANDING PAGE/SIGN UP/SALES PAGE/etc.",
      "VALUE OR OUTCOME",
      "EXISTING BUTTON TEXT IF ANY",
      "PRIMARY CONVERSION ACTION",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "landing-pages",
    exampleOutput:
      "15 CTA options categorized by psychological trigger with testing recommendations.",
    customizationNotes: [
      "Add your character limits",
      "Include your compliance notes",
      "Add your button size constraints",
    ],
    tags: ["cta", "button-copy", "conversion", "click-through"],
    order: 40,
  },

  {
    id: "landing-page-benefits-section",
    title: "Benefits vs Features Section",
    description: "Write benefit-focused copy that shows real value.",
    promptText: `Create a benefits section for a landing page.

Product/service:
[WHAT YOU'RE SELLING]

Features:
[LIST YOUR FEATURES]

Target audience:
[WHO YOU'RE SELLING TO]

Pain points solved:
[PROBLEMS YOU SOLVE]

Please create:
1. Feature → Benefit translation
   - For each feature, write the benefit
   - Focus on outcome, not input
2. Benefits section copy
   - Benefit headlines
   - Supporting copy
   - How to organize visually
3. "What's in it for me" framing
4. Outcome-focused language

Benefits section principles:
- Features = what it does
- Benefits = what they get
- Focus on transformation
- Use "so that" framework
- Emotional + rational benefits
- User-centric language`,
    placeholders: [
      "WHAT YOU'RE SELLING",
      "LIST YOUR FEATURES",
      "WHO YOU'RE SELLING TO",
      "PROBLEMS YOU SOLVE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "landing-pages",
    exampleOutput:
      "Feature-to-benefit translations with section copy organized for maximum impact.",
    customizationNotes: [
      "Add your visual layout context",
      "Include your most important features",
      "Add your differentiators vs. competitors",
    ],
    tags: ["benefits", "features", "value-proposition", "copy"],
    order: 41,
  },

  {
    id: "testimonial-request-email",
    title: "Testimonial Request Email",
    description: "Request testimonials that customers actually want to give.",
    promptText: `Write a testimonial request email for [PRODUCT/SERVICE].

Customer context:
[WHAT THEY BOUGHT OR USED]

Their experience:
[HAPPY CUSTOMER CONTEXT - positive outcome/results]

Relationship duration:
[HOW LONG THEY'VE BEEN A CUSTOMER]

Incentive (if any):
[WHAT YOU'RE OFFERING IN RETURN]

Please create:
1. Subject line (friendly, not demanding)
2. Personal opening
3. Reminder of their success/results
4. Specific request (what kind of testimonial)
5. Easy ways to provide it (video/text/LinkedIn)
6. Template or questions to make it easy
7. Appreciation and next steps

Testimonial request best practices:
- Make it easy (templates help)
- Ask when they're happiest (after a win)
- Offer multiple formats
- Show you value their time
- Don't demand, invite
- Offer something in return`,
    placeholders: [
      "PRODUCT/SERVICE",
      "WHAT THEY BOUGHT OR USED",
      "HAPPY CUSTOMER CONTEXT - positive outcome/results",
      "HOW LONG THEY'VE BEEN A CUSTOMER",
      "WHAT YOU'RE OFFERING IN RETURN",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "landing-pages",
    exampleOutput:
      "A testimonial request email that makes it easy for customers to provide social proof.",
    customizationNotes: [
      "Add your testimonial collection tools",
      "Include your specific questions you want answered",
      "Add your incentive specifics",
    ],
    tags: ["testimonial", "social-proof", "request", "review"],
    order: 42,
  },

  {
    id: "landing-page-faq-section",
    title: "FAQ Section Generator",
    description: "Create FAQ content that overcomes objections and builds trust.",
    promptText: `Create an FAQ section for a landing page.

Product/service:
[WHAT YOU'RE SELLING]

Price:
[PRICING CONTEXT]

Target audience:
[WHO YOU'RE SELLING TO]

Common objections you hear:
[OBJECTIONS YOU GET]

Please create:
1. 10-15 FAQ questions that address:
   - Pricing questions
   - How it works
   - Time/effort required
   - Risk/guarantee
   - Compatibility/requirements
   - Support/contact
   - Comparison with alternatives
2. Clear, honest answers
3. How to organize visualy
4. Which to expand vs. collapse by default

FAQ writing principles:
- Address real objections (not staged questions)
- Be honest and direct
- Short, scannable answers
- Link to more detail when needed
- Consider voice search queries
- Organize by category if many FAQs`,
    placeholders: [
      "WHAT YOU'RE SELLING",
      "PRICING CONTEXT",
      "WHO YOU'RE SELLING TO",
      "OBJECTIONS YOU GET",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "landing-pages",
    exampleOutput:
      "An FAQ section with real objections addressed, clear answers, and organization recommendations.",
    customizationNotes: [
      "Add your actual customer questions",
      "Include your support contact info",
      "Add your return/guarantee policies",
    ],
    tags: ["faq", "objections", "trust", "questions"],
    order: 43,
  },

  {
    id: "landing-page-structure",
    title: "Landing Page Structure Plan",
    description: "Plan the complete structure of a high-converting landing page.",
    promptText: `Create a complete landing page structure for [OFFER].

Offer:
[WHAT YOU'RE PROMOTING]

Price:
[COST OR PRICING MODEL]

Target audience:
[WHO THIS IS FOR]

Funnel stage:
[AWARENESS/CONSIDERATION/CONVERSION]

Current landing page (if any):
[EXISTING PAGE OR REFERENCE]

Please plan:
1. Page structure (sections in order)
2. Content for each section
   - Headlines
   - Copy direction
   - Visual suggestions
3. Trust elements to include
4. Social proof placement
5. CTA strategy and placement
6. What to remove (distractions)
7. Mobile considerations

Landing page structure best practices:
- One clear goal (remove distractions)
- Logical flow from problem to solution
- Trust building throughout
- Multiple CTAs above and below fold
- Address objections progressively
- Mobile-first design`,
    placeholders: [
      "WHAT YOU'RE PROMOTING",
      "COST OR PRICING MODEL",
      "WHO THIS IS FOR",
      "AWARENESS/CONSIDERATION/CONVERSION",
      "EXISTING PAGE OR REFERENCE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "landing-pages",
    exampleOutput:
      "A complete landing page structure with section-by-section content and CTA strategy.",
    customizationNotes: [
      "Add your technical constraints (CMS, etc.)",
      "Include your brand guidelines",
      "Add your conversion goals",
    ],
    tags: ["landing-page", "structure", "wireframe", "conversion"],
    order: 44,
  },

  {
    id: "value-proposition-framework",
    title: "Value Proposition Generator",
    description: "Craft a clear, compelling value proposition for your offer.",
    promptText: `Create a value proposition for [PRODUCT/SERVICE].

What you do:
[WHAT YOU SELL OR OFFER]

Target customer:
[WHO YOU SERVE]

Key differentiator:
[WHAT MAKES YOU DIFFERENT]

Alternatives they consider:
[COMPETITORS OR STATUS QUO]

Results you deliver:
[OUTCOMES OR TRANSFORMATION]

Please create:
1. Value proposition statement (1-2 sentences)
2. Extended value proposition (paragraph)
3. Headline version
4. Subheadline expansion
5. How to communicate visually
6. Where to place on landing page

Value proposition framework:
- For [target customer]
- Who [statement of need/opportunity]
- Our [product/service name]
- Is a [product category]
- That [key benefit]
- Unlike [main competitor/alternative]
- We [primary differentiator]`,
    placeholders: [
      "PRODUCT/SERVICE",
      "WHAT YOU SELL OR OFFER",
      "WHO YOU SERVE",
      "WHAT MAKES YOU DIFFERENT",
      "COMPETITORS OR STATUS QUO",
      "OUTCOMES OR TRANSFORMATION",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "landing-pages",
    exampleOutput: "A clear value proposition with multiple formats and placement recommendations.",
    customizationNotes: [
      "Add your existing value proposition if any",
      "Include your customer research insights",
      "Add your testing ideas",
    ],
    tags: ["value-proposition", "positioning", "differentiation", "messaging"],
    order: 45,
  },

  {
    id: "social-proof-section",
    title: "Social Proof Section Copy",
    description: "Write copy that amplifies customer success stories.",
    promptText: `Create a social proof section for a landing page.

Testimonials/reviews available:
[PASTE YOUR BEST TESTIMONIALS]

Product/service:
[WHAT YOU'RE SELLING]

Customer results:
[OUTCOMES YOUR CUSTOMERS ACHIEVE]

Social proof available:
[WHAT YOU HAVE - reviews, case studies, metrics, logos]

Section placement:
[WHERE THIS APPEARS ON PAGE]

Please create:
1. Section headline and copy
2. How to organize testimonials
3. What to highlight (numbers, quotes, etc.)
4. Visual presentation suggestions
5. How to build credibility with layout
6. Additional proof elements to add

Social proof principles:
- Specific results over vague praise
- Real names and photos when possible
- Numbers and metrics stand out
- Variety of customer types
- Logos for credibility
- Video testimonials convert well`,
    placeholders: [
      "PASTE YOUR BEST TESTIMONIALS",
      "WHAT YOU'RE SELLING",
      "OUTCOMES YOUR CUSTOMERS ACHIEVE",
      "WHAT YOU HAVE - reviews, case studies, metrics, logos",
      "WHERE THIS APPEARS ON PAGE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "landing-pages",
    exampleOutput:
      "Social proof section copy with organization strategy and visual presentation recommendations.",
    customizationNotes: [
      "Add your brand guidelines for testimonials",
      "Include your best customer stories",
      "Add your visual layout context",
    ],
    tags: ["social-proof", "testimonials", "credibility", "trust"],
    order: 46,
  },

  {
    id: "pricing-page-copy",
    title: "Pricing Page Copy",
    description: "Write pricing page copy that frames value and drives decisions.",
    promptText: `Write copy for a pricing page.

Product/service:
[WHAT YOU'RE SELLING]

Pricing tiers:
[TIER 1: NAME + PRICE + FEATURES]
[TIER 2: NAME + PRICE + FEATURES]
[TIER 3: NAME + PRICE + FEATURES]

Target customer for each tier:
[WHO EACH TIER IS FOR]

Please create:
1. Pricing page headline and intro
2. Tier names that guide decisions
3. Feature descriptions (benefits, not lists)
4. "Most popular" callout strategy
5. CTA button text for each tier
6. FAQ section (pricing objections)
7. Risk reversal (guarantee, trial, etc.)
8. How to anchor and frame value

Pricing psychology principles:
- Anchor on a higher price first
- Highlight the "right" choice
- Use benefits, not feature lists
- Make comparison easy
- Reduce decision friction
- Address price objections proactively`,
    placeholders: [
      "WHAT YOU'RE SELLING",
      "TIER 1: NAME + PRICE + FEATURES",
      "WHO EACH TIER IS FOR",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "landing-pages",
    exampleOutput:
      "Complete pricing page copy with tier descriptions, psychology-driven framing, and objection handling.",
    customizationNotes: [
      "Add your discount/offering context",
      "Include your billing frequency (monthly/yearly)",
      "Add your trial or guarantee terms",
    ],
    tags: ["pricing", "tiered-pricing", "value-framing", "conversion"],
    order: 47,
  },

  // ============================================================================
  // SEO CONTENT (8 prompts)
  // ============================================================================

  {
    id: "keyword-research-helper",
    title: "Keyword Research Assistant",
    description: "Generate keyword ideas and research strategy for SEO.",
    promptText: `Help me research keywords for [TOPIC/INDUSTRY].

Main topic:
[PRIMARY TOPIC OR NICHE]

Target audience:
[WHO YOU'RE TARGETING]

Current ranking (if any):
[WHAT YOU ALREADY RANK FOR]

Competitors:
[MAIN COMPETITORS]

Business goals:
[WHAT YOU WANT TO RANK FOR]

Please provide:
1. Primary keyword opportunities
   - High volume, reasonable competition
2. Long-tail keyword ideas
   - Lower volume, higher intent
3. Question-based keywords
   - Featured snippet opportunities
4. Related/semantic keywords
   - LSI and related terms
5. Keyword difficulty assessment
6. Search intent analysis
   - Informational/transactional/etc.
7. Content gap opportunities
8. Priority ranking for targeting`,
    placeholders: [
      "TOPIC/INDUSTRY",
      "PRIMARY TOPIC OR NICHE",
      "WHO YOU'RE TARGETING",
      "WHAT YOU ALREADY RANK FOR",
      "MAIN COMPETITORS",
      "WHAT YOU WANT TO RANK FOR",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "seo-content",
    exampleOutput:
      "A comprehensive keyword research report with opportunities, difficulty assessment, and prioritization.",
    customizationNotes: [
      "Add your location for local SEO",
      "Include your current keyword tools",
      "Add your content creation capacity",
    ],
    tags: ["keyword-research", "seo", "opportunities", "ranking"],
    order: 48,
  },

  {
    id: "meta-description-generator",
    title: "Meta Description Writer",
    description: "Write meta descriptions that get clicks from search results.",
    promptText: `Write meta descriptions for [PAGE CONTENT].

Page topic:
[WHAT THE PAGE IS ABOUT]

Primary keyword:
[MAIN KEYWORD TO INCLUDE]

Target keyword:
[SECONDARY KEYWORDS]

Current meta description (if any):
[EXISTING META DESCRIPTION]

Goal: [CTR TRAFFIC/CONVERSIONS/etc.]

Please create:
1. 10 meta description options
   - Under 155 characters each
   - Include target keyword naturally
   - Compelling copy that gets clicks
   - Accurate representation of content

For each meta description:
- Character count
- Why it works
- Expected CTR impact
- Search intent match

Meta description best practices:
- Include target keyword naturally
- Benefit or curiosity-driven
- Accurate to page content (misleading hurts SEO)
- Active voice
- Include CTA when appropriate
- Unique for each page`,
    placeholders: [
      "PAGE CONTENT",
      "WHAT THE PAGE IS ABOUT",
      "MAIN KEYWORD TO INCLUDE",
      "SECONDARY KEYWORDS",
      "EXISTING META DESCRIPTION",
      "CTR TRAFFIC/CONVERSIONS/etc.",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "seo-content",
    exampleOutput:
      "10 meta description options with character counts, explanations, and CTR predictions.",
    customizationNotes: [
      "Add your brand voice preferences",
      "Include your top competitors' meta descriptions",
      "Add your character limit variations",
    ],
    tags: ["meta-description", "seo", "serp", "click-through"],
    order: 49,
  },

  {
    id: "title-tag-optimizer",
    title: "Title Tag Optimizer",
    description: "Create SEO-optimized title tags that rank and get clicks.",
    promptText: `Optimize title tags for [PAGE CONTENT].

Page topic:
[WHAT THE PAGE IS ABOUT]

Primary keyword:
[MAIN KEYWORD]

Secondary keywords:
[RELATED KEYWORDS]

Brand name:
[YOUR BRAND NAME]

Current title (if any):
[EXISTING TITLE TAG]

Please create:
1. 10 title tag options
   - Under 60 characters ideally
   - Include primary keyword near the beginning
   - Compelling for clicks
   - Accurate to content

For each title:
- Character count
- Keyword placement
- Why it works
- Search intent match

Title tag best practices:
- Primary keyword first if possible
- Brand name at the end (if used)
- Compelling, not keyword-stuffed
- Accurate representation
- Unique across pages
- Match search intent`,
    placeholders: [
      "PAGE CONTENT",
      "WHAT THE PAGE IS ABOUT",
      "MAIN KEYWORD",
      "RELATED KEYWORDS",
      "YOUR BRAND NAME",
      "EXISTING TITLE TAG",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "marketing-content",
    categoryId: "seo-content",
    exampleOutput:
      "10 title tag options with character counts, keyword placement analysis, and optimization notes.",
    customizationNotes: [
      "Add your competitor title tags to beat",
      "Include your search intent focus",
      "Add your mobile character limits if different",
    ],
    tags: ["title-tag", "seo", "on-page", "optimization"],
    order: 50,
  },

  {
    id: "content-optimization-audit",
    title: "Content SEO Optimization",
    description: "Optimize existing content for better search rankings.",
    promptText: `Audit and optimize this content for SEO:

[PASTE YOUR CONTENT]

Target keyword:
[PRIMARY KEYWORD]

Secondary keywords:
[KEYWORDS TO INCLUDE]

Current ranking:
[CURRENT POSITION IF KNOWN]

Competitors beating you:
[COMPETITOR URLs OR CONTENT]

Please provide:
1. Content structure analysis
   - H1/H2/H3 hierarchy
   - Keyword placement opportunities
2. Keyword optimization
   - Primary keyword frequency and placement
   - Secondary keyword opportunities
   - LSI keyword additions
3. Content gap analysis
   - What competitors cover that you don't
   - Missing subtopics
   - Depth improvements needed
4. On-page SEO
   - Title tag recommendation
   - Meta description
   - URL structure
   - Internal/external linking opportunities
5. Readability improvements
6. Featured snippet opportunities`,
    placeholders: [
      "PASTE YOUR CONTENT",
      "PRIMARY KEYWORD",
      "KEYWORDS TO INCLUDE",
      "CURRENT POSITION IF KNOWN",
      "COMPETITOR URLs OR CONTENT",
    ],
    bestTool: "chatgpt",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "seo-content",
    exampleOutput:
      "A comprehensive SEO audit with specific optimization recommendations and competitor comparisons.",
    customizationNotes: [
      "Add your top-ranking competitors",
      "Include your CMS constraints",
      "Add your update authority",
    ],
    tags: ["content-optimization", "seo-audit", "on-page-seo", "ranking"],
    order: 51,
  },

  {
    id: "internal-linking-strategy",
    title: "Internal Linking Strategy",
    description: "Plan internal links that boost SEO and user experience.",
    promptText: `Create an internal linking strategy for my content.

Website context:
[WHAT YOUR SITE IS ABOUT]

Key pages to link between:
[IMPORTANT PAGES AND THEIR PURPOSES]

Current internal linking:
[EXISTING STRATEGY IF ANY]

Target keywords for key pages:
[PAGE: KEYWORD PAIRINGS]

Please provide:
1. Internal linking site structure
   - Hub pages and spoke pages
   - Topic clusters
   - Site hierarchy
2. Link opportunities between pages
3. Anchor text recommendations
   - Natural, descriptive text
   - Keyword relevance
4. Link placement guidance
   - Where in content to place
   - How many per page
5. Orphan page identification
6. Page value flow strategy

Internal linking best practices:
- Use descriptive anchor text
- Link to relevant, helpful content
- Don't overlink (quality over quantity)
- Help users and search engines
- Contextual links in body copy
- Link deep, not just to homepage`,
    placeholders: [
      "WHAT YOUR SITE IS ABOUT",
      "IMPORTANT PAGES AND THEIR PURPOSES",
      "EXISTING STRATEGY IF ANY",
      "PAGE: KEYWORD PAIRINGS",
    ],
    bestTool: "chatgpt",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "seo-content",
    exampleOutput:
      "An internal linking strategy with site structure, anchor text recommendations, and linking opportunities.",
    customizationNotes: [
      "Add your CMS for implementation notes",
      "Include your existing content inventory",
      "Add your content calendar for new pages",
    ],
    tags: ["internal-linking", "site-structure", "seo", "information-architecture"],
    order: 52,
  },

  {
    id: "featured-snippet-content",
    title: "Featured Snippet Optimizer",
    description: "Write content optimized for Google's featured snippets.",
    promptText: `Optimize content to win featured snippets for [KEYWORD/QUERY].

Target query:
[SEARCH QUERY YOU WANT TO WIN]

Current content (if any):
[EXISTING CONTENT ON TOPIC]

Intent:
[QUERY TYPE - definition/how-to/list/comparison/etc.]

Please create:
1. Featured snippet-optimized content
   - Direct answer format
   - Structured for the snippet type
   - Concise, authoritative answer
2. Supporting content structure
3. Schema markup suggestions
4. On-page optimization
5. How to format for snippet type:
   - Definition snippets
   - How-to snippets
   - List snippets
   - Table snippets

Featured snippet best practices:
- Answer the question directly and immediately
- Use the same format as current winner
- Keep it concise (40-60 words)
- Use structured formatting (lists, tables)
- Include the query in H2
- Provide comprehensive content below`,
    placeholders: [
      "KEYWORD/QUERY",
      "SEARCH QUERY YOU WANT TO WIN",
      "EXISTING CONTENT ON TOPIC",
      "QUERY TYPE - definition/how-to/list/comparison/etc.",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "seo-content",
    exampleOutput:
      "Featured snippet-optimized content with formatting, schema suggestions, and ranking strategy.",
    customizationNotes: [
      "Add the current snippet holder to analyze",
      "Include your content type limitations",
      "Add your schema implementation capabilities",
    ],
    tags: ["featured-snippet", "position-zero", "schema", "rich-results"],
    order: 53,
  },

  {
    id: "local-seo-content",
    title: "Local SEO Content Strategy",
    description: "Create content that ranks for local search queries.",
    promptText: `Create a local SEO content strategy for [BUSINESS].

Business type:
[WHAT YOU DO]

Location:
[CITY/REGION/NEIGHBORHOOD]

Service area:
[WHERE YOU OPERATE]

Target keywords:
[LOCAL KEYWORDS YOU WANT TO RANK FOR]

Competition:
[LOCAL COMPETITORS]

Please provide:
1. Local keyword opportunities
   - City + service terms
   - "Near me" queries
   - Neighborhood-specific terms
2. Content ideas for local ranking
   - Location pages
   - Local guides
   - Service area pages
   - Community content
3. On-page local SEO
   - NAP consistency
   - Local schema markup
   - Review content strategy
4. Content calendar for local topics
5. Link building for local SEO`,
    placeholders: [
      "BUSINESS",
      "WHAT YOU DO",
      "CITY/REGION/NEIGHBORHOOD",
      "WHERE YOU OPERATE",
      "LOCAL KEYWORDS YOU WANT TO RANK FOR",
      "LOCAL COMPETITORS",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "marketing-content",
    categoryId: "seo-content",
    exampleOutput:
      "A local SEO content strategy with keyword opportunities, content ideas, and implementation guidance.",
    customizationNotes: [
      "Add your Google Business Profile status",
      "Include your review strategy",
      "Add your multiple locations if applicable",
    ],
    tags: ["local-seo", "local-business", "maps", "near-me"],
    order: 54,
  },

  {
    id: "seo-content-calendar",
    title: "SEO Content Calendar",
    description: "Plan a content calendar based on keyword research and opportunity.",
    promptText: `Create an SEO-focused content calendar for [SITE/BUSINESS].

Website focus:
[WHAT YOUR SITE IS ABOUT]

Target keywords:
[PRIORITY KEYWORDS TO TARGET]

Content capacity:
[HOW MANY PIECES PER MONTH]

Current content gaps:
[WHAT YOU'RE MISSING]

Seasonal factors:
[ANY SEASONALITY IN YOUR NICHE]

Please create:
1. 3-month content calendar
   - Keyword targets for each piece
   - Content type (blog/page/guide/etc.)
   - Priority ranking
   - Search intent
2. Topic clusters and pillar pages
3. Quick wins (low competition, high opportunity)
4. Long-term plays (competitive terms)
5. Update/remodel existing content opportunities
6. Keyword cannibalization prevention
7. Internal linking plan as content builds`,
    placeholders: [
      "SITE/BUSINESS",
      "WHAT YOUR SITE IS ABOUT",
      "PRIORITY KEYWORDS TO TARGET",
      "HOW MANY PIECES PER MONTH",
      "WHAT YOU'RE MISSING",
      "ANY SEASONALITY IN YOUR NICHE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "marketing-content",
    categoryId: "seo-content",
    exampleOutput:
      "A 3-month SEO content calendar with keyword targets, priority rankings, and strategic approach.",
    customizationNotes: [
      "Add your existing content inventory",
      "Include your keyword research data",
      "Add your team capacity and resources",
    ],
    tags: ["content-calendar", "seo-strategy", "editorial-calendar", "keyword-targeting"],
    order: 55,
  },
];
