/**
 * Creative & Personal Prompts
 *
 * PURPOSE: Prompts for travel planning, gift ideas, event planning, speeches, and home projects.
 *
 * DOMAIN: Creative & Personal
 * CATEGORIES:
 * - Travel Planning
 * - Gift Ideas
 * - Event Planning
 * - Speeches & Toasts
 * - Home Projects
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Creative & Personal prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const creativePersonalPrompts: Prompt[] = [
  // ============================================================================
  // TRAVEL PLANNING
  // ============================================================================

  {
    id: "trip-itinerary-builder",
    title: "Complete Trip Itinerary",
    description: "Create detailed day-by-day itineraries for any destination.",
    promptText: `Create a detailed travel itinerary for my trip.

Destination:
[LOCATION OR DESTINATIONS]

Trip details:
- Duration: [NUMBER OF DAYS]
- Dates: [TRAVEL DATES OR SEASON]
- Travelers: [SOLO/COUPLE/FAMILY/FRIENDS - INCLUDE AGES IF KIDS]
- Budget level: [BUDGET/MODERATE/LUXURY]

My interests:
[INTERESTS AND PREFERENCES]

Must-see or must-do:
[NON-NEGOTIABLES]

What to avoid:
[DISLIKES OR RESTRICTIONS]

Please provide:
1. Day-by-day itinerary with timing
2. Top attractions with time estimates
3. Restaurant recommendations by meal
4. Transportation between locations
5. Tips for saving time or money
6. Local customs or etiquette to know
7. Backup indoor options for bad weather`,
    placeholders: [
      "LOCATION OR DESTINATIONS",
      "NUMBER OF DAYS",
      "TRAVEL DATES OR SEASON",
      "SOLO/COUPLE/FAMILY/FRIENDS - INCLUDE AGES IF KIDS",
      "BUDGET/MODERATE/LUXURY",
      "INTERESTS AND PREFERENCES",
      "NON-NEGOTIABLES",
      "DISLIKES OR RESTRICTIONS",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "travel",
    exampleOutput:
      "A comprehensive day-by-day itinerary with attractions, restaurants, transportation tips, and local insights.",
    customizationNotes: [
      "Be specific about physical limitations if any",
      "Include mobility considerations for your group",
      "Mention if you prefer planned vs. spontaneous days",
    ],
    tags: ["travel", "itinerary", "planning", "vacation"],
    order: 1,
  },

  {
    id: "travel-packing-list",
    title: "Smart Packing List",
    description: "Create comprehensive packing lists for any trip type and destination.",
    promptText: `Create a packing list for my trip.

Destination:
[LOCATION]

Trip details:
- Duration: [NUMBER OF DAYS]
- Activities: [WHAT I'LL BE DOING]
- Weather: [EXPECTED CONDITIONS]
- Accommodation: [TYPE OF LODGING]

Luggage constraints:
[LUGGAGE LIMITATIONS OR PREFERENCES]

My needs:
[SPECIAL CONSIDERATIONS]

Please provide:
1. A complete packing list organized by category
2. Essential items vs. nice-to-haves
3. What to wear on the plane
4. Items to pack in carry-on vs. checked
5. Things I'm likely to forget
6. Luggage tips for efficient packing
7. What to buy there vs. bring from home
8. A checklist format for easy use`,
    placeholders: [
      "LOCATION",
      "NUMBER OF DAYS",
      "WHAT I'LL BE DOING",
      "EXPECTED CONDITIONS",
      "TYPE OF LODGING",
      "LUGGAGE LIMITATIONS OR PREFERENCES",
      "SPECIAL CONSIDERATIONS",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "travel",
    exampleOutput:
      "An organized packing list with categories, priorities, luggage organization tips, and commonly forgotten items.",
    customizationNotes: [
      "Include any specific gear needs (sports, professional, etc.)",
      "Mention if you're a light or heavy packer",
      "Share toiletry and medication needs",
    ],
    tags: ["travel", "packing", "checklist"],
    order: 2,
  },

  {
    id: "destination-researcher",
    title: "Destination Research Assistant",
    description: "Research destinations with key information for trip planning.",
    promptText: `Research this destination for my trip planning.

Place I'm considering:
[DESTINATION]

What I want to know:
[WHAT YOU'RE RESEARCHING: SAFETY/COST/BEST TIME TO VISIT/ETC]

My travel context:
- When I'm planning to go: [DATES OR SEASON]
- Travel style: [PREFERENCES]
- Budget range: [APPROXIMATE BUDGET]

Please provide:
1. Overview of why people visit this destination
2. Best time of year to visit (weather, crowds, prices)
3. Estimated daily budget for different travel styles
4. Top neighborhoods or areas to stay
5. Must-see attractions and experiences
6. Safety considerations and local tips
7. Transportation options
8. What to skip (tourist traps or overrated attractions)
9. How many days to spend there`,
    placeholders: [
      "DESTINATION",
      "WHAT YOU'RE RESEARCHING: SAFETY/COST/BEST TIME TO VISIT/ETC",
      "DATES OR SEASON",
      "PREFERENCES",
      "APPROXIMATE BUDGET",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "travel",
    exampleOutput:
      "Comprehensive destination research covering timing, costs, areas to stay, attractions, safety, and insider tips.",
    customizationNotes: [
      "Include your main interests and priorities",
      "Mention any deal-breakers (climate, altitude, etc.)",
      "Share if this is your first time in the region",
    ],
    tags: ["travel", "research", "destination"],
    order: 3,
  },

  {
    id: "travel-budget-planner",
    title: "Travel Budget Planner",
    description: "Create detailed budgets for trips with cost breakdowns and saving strategies.",
    promptText: `Help me plan and budget for this trip.

Destination:
[LOCATION]

Trip details:
- Duration: [DAYS]
- Travelers: [NUMBER OF PEOPLE]
- Travel style: [BUDGET/MODERATE/LUXURY]

My total budget:
[TOTAL BUDGET]

What's included:
[WHAT'S ALREADY PAID OR BOOKED]

Please provide:
1. Realistic cost breakdown by category:
   - Flights/transportation
   - Accommodation
   - Food and dining
   - Activities and attractions
   - Local transportation
   - Miscellaneous
2. Daily spending estimates
3. Hidden costs to anticipate
4. Where to splurge vs. save
5. Money-saving tips specific to this destination
6. Emergency buffer recommendations
7. Strategies to stay within budget`,
    placeholders: [
      "LOCATION",
      "DAYS",
      "NUMBER OF PEOPLE",
      "BUDGET/MODERATE/LUXURY",
      "TOTAL BUDGET",
      "WHAT'S ALREADY PAID OR BOOKED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "travel",
    exampleOutput:
      "A detailed budget breakdown with category estimates, hidden costs identified, and money-saving strategies.",
    customizationNotes: [
      "Be realistic about your spending habits",
      "Include any fixed costs already booked",
      "Mention currency if traveling internationally",
    ],
    tags: ["travel", "budget", "money", "planning"],
    order: 4,
  },

  {
    id: "travel-with-kids",
    title: "Family Trip Planner",
    description: "Plan family-friendly travel with considerations for children.",
    promptText: `Help me plan a family trip with kids.

Destination:
[LOCATION]

Family details:
- Kids' ages: [AGES]
- Number of children: [NUMBER]
- Travel experience: [EXPERIENCED TRAVELERS OR NEW]

Trip details:
- Duration: [DAYS]
- Time of year: [SEASON]

My concerns:
[CHALLENGES OR CONCERNS]

Please provide:
1. Kid-friendly itinerary with realistic pacing
2. Accommodation recommendations (space, amenities, location)
3. Family-friendly restaurants and food options
4. Attractions and activities by age group
5. Transportation strategies with kids
6. Items to pack for the kids
7. Managing travel days and transitions
8. Backup plans for meltdowns or bad weather
9. Tips for keeping kids engaged and happy`,
    placeholders: [
      "LOCATION",
      "AGES",
      "NUMBER",
      "EXPERIENCED TRAVELERS OR NEW",
      "DAYS",
      "SEASON",
      "CHALLENGES OR CONCERNS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "travel",
    exampleOutput:
      "A family-focused itinerary with age-appropriate activities, realistic pacing, and practical parenting tips.",
    customizationNotes: [
      "Include specific interests of each child",
      "Mention any special needs or considerations",
      "Share what has or hasn't worked on past trips",
    ],
    tags: ["travel", "family", "kids", "parenting"],
    order: 5,
  },

  // ============================================================================
  // GIFT IDEAS
  // ============================================================================

  {
    id: "gift-recommender",
    title: "Personalized Gift Recommendations",
    description: "Get thoughtful gift ideas tailored to specific people and occasions.",
    promptText: `Help me find the perfect gift.

Who it's for:
[RELATIONSHIP AND BRIEF DESCRIPTION]

Occasion:
[OCCASION]

Budget:
[PRICE RANGE]

What I know about them:
- Interests: [INTERESTS AND HOBBIES]
- Personality: [PERSONALITY TRAITS]
- Lifestyle: [LIFESTYLE DETAILS]

Gift history:
- Past gifts they loved: [EXAMPLES]
- Past gifts that didn't work: [EXAMPLES]

Please provide:
1. 10-15 gift ideas organized by category
2. For each suggestion:
   - Why it fits this person
   - Price range
   - Where to buy it
3. A mix of practical, sentimental, and fun options
4. Experience or subscription gift ideas
5. Last-minute options if time is tight
6. How to make any gift more personal`,
    placeholders: [
      "RELATIONSHIP AND BRIEF DESCRIPTION",
      "OCCASION",
      "PRICE RANGE",
      "INTERESTS AND HOBBIES",
      "PERSONALITY TRAITS",
      "LIFESTYLE DETAILS",
      "EXAMPLES",
      "EXAMPLES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "gifts",
    exampleOutput:
      "Thoughtful gift recommendations tailored to the recipient with explanations, price ranges, and personalization tips.",
    customizationNotes: [
      "Include the person's age if relevant",
      "Mention any allergies or restrictions",
      "Share how long you've known them",
    ],
    tags: ["gifts", "presents", "ideas", "recommendations"],
    order: 6,
  },

  {
    id: "last-minute-gifts",
    title: "Last-Minute Gift Ideas",
    description: "Find great gifts that can be obtained quickly or instantly.",
    promptText: `I need a last-minute gift. Help me fast!

Who it's for:
[RELATIONSHIP]

Occasion:
[OCCASION]

Timeline:
- How soon I need it: [TIMEFRAME]
- Delivery method: [EMAIL/IN-PERSON/SHIPPING]

Budget:
[PRICE RANGE]

What I know about them:
[BASIC INFO]

Please provide:
1. Digital/instant delivery gifts (subscriptions, experiences, etc.)
2. Same-day pickup options (retail stores)
3. Quick shipping with guaranteed delivery
4. DIY gifts I can make quickly
5. Gift card ideas that feel personal
6. Creative presentation ideas for last-minute gifts
7. What to say when giving a last-minute gift`,
    placeholders: [
      "RELATIONSHIP",
      "OCCASION",
      "TIMEFRAME",
      "EMAIL/IN-PERSON/SHIPPING",
      "PRICE RANGE",
      "BASIC INFO",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "gifts",
    exampleOutput:
      "Quick gift solutions organized by delivery method with options for instant, same-day, and fast shipping.",
    customizationNotes: [
      "Include the recipient's location for availability",
      "Mention if local stores are available",
      "Be honest about your crafting or DIY abilities",
    ],
    tags: ["gifts", "last-minute", "quick", "urgent"],
    order: 7,
  },

  {
    id: "gift-message-writer",
    title: "Gift Card & Note Messages",
    description: "Write heartfelt messages for gifts and cards.",
    promptText: `Help me write the perfect message for this gift.

Gift:
[WHAT YOU'RE GIVING]

Who it's for:
[RELATIONSHIP]

Occasion:
[OCCASION]

Tone I want:
[SENTIMENTAL/FUNNY/SINCERE/CASUAL/FORMAL]

What I want to express:
[KEY FEELINGS OR MESSAGES]

Please provide:
1. 5-10 message options of different lengths:
   - Short (for gift tags or small cards)
   - Medium (for standard cards)
   - Longer (for letters or significant gifts)
2. Messages at different emotional levels
3. How to close the message
4. What to include about the gift itself
5. How to reference inside jokes or shared memories`,
    placeholders: [
      "WHAT YOU'RE GIVING",
      "RELATIONSHIP",
      "OCCASION",
      "SENTIMENTAL/FUNNY/SINCERE/CASUAL/FORMAL",
      "KEY FEELINGS OR MESSAGES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "gifts",
    exampleOutput:
      "Multiple message options at various lengths and emotional levels, tailored to the recipient and occasion.",
    customizationNotes: [
      "Include shared memories if you want them referenced",
      "Mention if this is a long-distance relationship",
      "Share how long you've known the person",
    ],
    tags: ["gifts", "messages", "cards", "notes"],
    order: 8,
  },

  {
    id: "diy-gift-ideas",
    title: "DIY & Handmade Gift Ideas",
    description: "Creative handmade gift ideas with instructions.",
    promptText: `Give me DIY gift ideas that I can make myself.

Who it's for:
[RELATIONSHIP]

Occasion:
[OCCASION]

My skills:
[MY CRAFTING OR DIY ABILITIES]

Time available:
[TIME I HAVE TO MAKE IT]

Budget for supplies:
[BUDGET]

Please provide:
1. 10-15 DIY gift ideas I can actually make
2. For each idea:
   - Difficulty level
   - Estimated time to make
   - Materials needed and cost
   - Step-by-step instructions
   - How to package or present it
3. Ideas organized by skill level
4. Tips for making handmade gifts look polished
5. What to write on the gift tag`,
    placeholders: [
      "RELATIONSHIP",
      "OCCASION",
      "MY CRAFTING OR DIY ABILITIES",
      "TIME I HAVE TO MAKE IT",
      "BUDGET",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "gifts",
    exampleOutput:
      "Achievable DIY gift ideas with difficulty levels, materials lists, step-by-step instructions, and presentation tips.",
    customizationNotes: [
      "Be honest about your crafting skills",
      "Include tools you already have",
      "Mention any crafting experience",
    ],
    tags: ["gifts", "diy", "handmade", "crafts"],
    order: 9,
  },

  {
    id: "experience-gift-ideas",
    title: "Experience Gift Ideas",
    description: "Gift experiences instead of things with creative ideas.",
    promptText: `Help me give an experience as a gift.

Who it's for:
[RELATIONSHIP AND BASIC INFO]

Occasion:
[OCCASION]

Location:
[CITY OR AREA]

Budget:
[PRICE RANGE]

Their interests:
[INTERESTS]

Constraints:
- Time of year: [SEASON]
- Physical limitations: [ANY LIMITATIONS]
- Their schedule: [AVAILABILITY]

Please provide:
1. 10+ experience gift ideas organized by category:
   - Classes and workshops
   - Events and entertainment
   - Outdoor activities
   - Food and drink experiences
   - Relaxation and wellness
2. For each idea:
   - Why it makes a great gift
   - What's included
   - How to present it creatively
3. Virtual/online experience options
4. Experience gifts that keep giving (memberships, subscriptions)
5. How to make the experience feel special`,
    placeholders: [
      "RELATIONSHIP AND BASIC INFO",
      "OCCASION",
      "CITY OR AREA",
      "PRICE RANGE",
      "INTERESTS",
      "SEASON",
      "ANY LIMITATIONS",
      "AVAILABILITY",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "gifts",
    exampleOutput:
      "Diverse experience gift ideas with details on what's included, pricing, and creative presentation methods.",
    customizationNotes: [
      "Include the recipient's adventure level",
      "Mention if they prefer planned or spontaneous activities",
      "Share past experiences they've enjoyed",
    ],
    tags: ["gifts", "experiences", "activities", "events"],
    order: 10,
  },

  // ============================================================================
  // EVENT PLANNING
  // ============================================================================

  {
    id: "party-planner",
    title: "Party Planning Guide",
    description: "Plan memorable parties from concept to execution.",
    promptText: `Help me plan a party.

Party type:
[TYPE OF PARTY]

Occasion:
[OCCASION]

Guest details:
- Number of guests: [NUMBER]
- Ages: [AGE RANGE]
- Relationships: [HOW THEY KNOW EACH OTHER]

My budget:
[BUDGET]

Venue and date:
[LOCATION AND DATE]

My vision:
[THEME OR VISION]

Please provide:
1. Party concept and theme development
2. Timeline planning (what to do when)
3. Food and drink menu ideas
4. Decoration ideas on my budget
5. Entertainment and activity suggestions
6. Music playlist recommendations
7. A detailed day-of schedule
8. Must-have items vs. nice-to-haves`,
    placeholders: [
      "TYPE OF PARTY",
      "OCCASION",
      "NUMBER",
      "AGE RANGE",
      "HOW THEY KNOW EACH OTHER",
      "BUDGET",
      "LOCATION AND DATE",
      "THEME OR VISION",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "events",
    exampleOutput:
      "A comprehensive party plan with concept, timeline, menu, decorations, entertainment, and day-of schedule.",
    customizationNotes: [
      "Include what made past parties successful or not",
      "Mention any dietary restrictions among guests",
      "Share your comfort level with hosting",
    ],
    tags: ["party", "planning", "events", "hosting"],
    order: 11,
  },

  {
    id: "guest-list-manager",
    title: "Guest List & Invitation Strategist",
    description: "Manage guest lists and create effective invitations.",
    promptText: `Help me manage my guest list and invitations.

Event:
[TYPE OF EVENT]

My guest list dilemma:
[CHALLENGES WITH GUEST LIST]

Total capacity/budget:
[LIMITATIONS]

Please help me with:
1. Who to invite (tiered categories if needed)
2. How to handle tricky situations:
   - Plus-ones
   - Children
   - Out-of-town guests
   - Family politics
3. Invitation wording options
4. When to send invitations
5. How to track RSVPs
6. What to include in the invitation
7. How to handle declines and last-minute changes`,
    placeholders: ["TYPE OF EVENT", "CHALLENGES WITH GUEST LIST", "LIMITATIONS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "events",
    exampleOutput:
      "Strategic guest list guidance with solutions for tricky situations, invitation wording, and RSVP management.",
    customizationNotes: [
      "Be specific about the family dynamics",
      "Include venue capacity constraints",
      "Mention your budget constraints honestly",
    ],
    tags: ["events", "guest-list", "invitations"],
    order: 12,
  },

  {
    id: "event-timeline",
    title: "Event Timeline & Schedule",
    description: "Create detailed timelines for any event.",
    promptText: `Create a timeline for my event.

Event type:
[TYPE OF EVENT]

Event details:
- Duration: [HOURS]
- Start time: [TIME]
- Location: [VENUE TYPE]

Key moments:
[MUST-HAVE ELEMENTS]

My concerns:
[CONCERNS OR PAST ISSUES]

Please provide:
1. Detailed event timeline with:
   - Setup time
   - Guest arrival
   - Key moments (speeches, food, cake, etc.)
   - Wind-down and cleanup
2. What can be flexible vs. what's fixed
3. How to handle delays or speed things up
4. Day-of checklist for the timeline
5. Who should be doing what when
6. Realistic time estimates for each phase`,
    placeholders: [
      "TYPE OF EVENT",
      "HOURS",
      "TIME",
      "VENUE TYPE",
      "MUST-HAVE ELEMENTS",
      "CONCERNS OR PAST ISSUES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "events",
    exampleOutput:
      "A detailed event timeline with setup, key moments, flexibility notes, and role assignments.",
    customizationNotes: [
      "Include key moments that must happen",
      "Mention what's gone wrong at past events",
      "Share your comfort with going off-schedule",
    ],
    tags: ["events", "timeline", "schedule", "planning"],
    order: 13,
  },

  {
    id: "event-menu-planner",
    title: "Event Menu Designer",
    description: "Create menus for events that work for your guests and budget.",
    promptText: `Help me plan the menu for my event.

Event type:
[TYPE OF EVENT]

Guest count:
[NUMBER OF GUESTS]

Meal type:
[BREAKFAST/LUNCH/DINNER/APPETIZERS/DESSERT]

Budget:
[BUDGET]

Dietary needs:
[RESTRICTIONS OR ALLERGIES]

My cooking/serving situation:
[KITCHEN FACILITIES OR CATERING CONSTRAINTS]

Please provide:
1. Menu options for my event
2. Appetizers, mains, sides, and desserts
3. Accommodations for dietary restrictions
4. What can be made ahead vs. day-of
5. Quantity planning (how much food)
6. Beverage suggestions
7. Presentation ideas
8. Self-serve vs. served considerations`,
    placeholders: [
      "TYPE OF EVENT",
      "NUMBER OF GUESTS",
      "BREAKFAST/LUNCH/DINNER/APPETIZERS/DESSERT",
      "BUDGET",
      "RESTRICTIONS OR ALLERGIES",
      "KITCHEN FACILITIES OR CATERING CONSTRAINTS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "events",
    exampleOutput:
      "A complete event menu with dietary accommodations, make-ahead planning, and presentation ideas.",
    customizationNotes: [
      "Be specific about your cooking abilities",
      "Include equipment you have access to",
      "Mention if help is available for prep/service",
    ],
    tags: ["events", "menu", "food", "catering"],
    order: 14,
  },

  {
    id: "party-entertainment",
    title: "Entertainment & Activities Planner",
    description: "Plan engaging entertainment and activities for any gathering.",
    promptText: `Help me plan entertainment for my event.

Event type:
[TYPE OF EVENT]

Guest demographics:
[AGES AND BACKGROUNDS]

Event vibe:
[DESIRED ATMOSPHERE]

Venue constraints:
[SPACE LIMITATIONS]

Budget:
[BUDGET FOR ENTERTAINMENT]

What I'm considering:
[IDEAS I'M THINKING ABOUT]

Please provide:
1. Entertainment ideas organized by type:
   - Interactive activities
   - Hired entertainment
   - DIY stations
   - Games and contests
2. Options for different budgets
3. How to entertain mixed-age groups
4. Conversation starters and icebreakers
5. Backup options if things don't go as planned
6. When to schedule entertainment`,
    placeholders: [
      "TYPE OF EVENT",
      "AGES AND BACKGROUNDS",
      "DESIRED ATMOSPHERE",
      "SPACE LIMITATIONS",
      "BUDGET FOR ENTERTAINMENT",
      "IDEAS I'M THINKING ABOUT",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "events",
    exampleOutput:
      "Diverse entertainment ideas organized by type and budget with timing guidance and backup options.",
    customizationNotes: [
      "Include guests' energy levels and interests",
      "Mention indoor/outdoor constraints",
      "Share what has worked at past events",
    ],
    tags: ["events", "entertainment", "activities", "games"],
    order: 15,
  },

  // ============================================================================
  // SPEECHES & TOASTS
  // ============================================================================

  {
    id: "wedding-toast-writer",
    title: "Wedding Speech & Toast Writer",
    description: "Create heartfelt wedding speeches and toasts.",
    promptText: `Help me write a wedding speech or toast.

My role:
[BEST MAN/MAID OF HONOR/PARENT/GUEST]

Couple:
[NAMES AND MY RELATIONSHIP TO THEM]

Tone:
[SENTIMENTAL/FUNNY/INSPIRATIONAL/MIXED]

Length:
[DESIRED DURATION]

Key things to mention:
[STORIES OR QUALITIES TO HIGHLIGHT]

What to avoid:
[TOPICS TO AVOID]

Please provide:
1. A complete speech with:
   - Opening that grabs attention
   - 2-3 meaningful stories or points
   - A heartfelt toast
   - Memorable closing
2. Delivery tips
3. How to personalize it further
4. Appropriate length
5. Backup lines if I get nervous
6. What to definitely avoid`,
    placeholders: [
      "BEST MAN/MAID OF HONOR/PARENT/GUEST",
      "NAMES AND MY RELATIONSHIP TO THEM",
      "SENTIMENTAL/FUNNY/INSPIRATIONAL/MIXED",
      "DESIRED DURATION",
      "STORIES OR QUALITIES TO HIGHLIGHT",
      "TOPICS TO AVOID",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "speeches",
    exampleOutput:
      "A complete wedding speech with structure, stories, toast, delivery tips, and backup content.",
    customizationNotes: [
      "Include specific memories or stories",
      "Mention how long you've known the couple",
      "Share your comfort level with public speaking",
    ],
    tags: ["wedding", "speech", "toast", "best-man", "maid-of-honor"],
    order: 16,
  },

  {
    id: "eulogy-writer",
    title: "Eulogy Writing Assistant",
    description: "Help crafting meaningful eulogies with sensitivity and care.",
    promptText: `Help me write a eulogy for someone I've lost.

Person who died:
[NAME AND RELATIONSHIP]

What I want to capture:
[THEIR QUALITIES, STORIES, LEGACY]

Key memories or stories:
[IMPORTANT MEMORIES]

Tone preference:
[CELEBRATORY/COMFORTING/SIMPLE/DETAILED]

Time limit:
[SPEAKING TIME]

Please help me create:
1. A respectful eulogy that:
   - Honors who they were
   - Includes 2-3 meaningful stories
   - Captures their spirit and impact
   - Brings comfort to mourners
2. Guidance on:
   - How to open and close
   - Handling emotions during delivery
   - Speaking through tears
3. What to avoid
4. How to make it personal without making it about me`,
    placeholders: [
      "NAME AND RELATIONSHIP",
      "THEIR QUALITIES, STORIES, LEGACY",
      "IMPORTANT MEMORIES",
      "CELEBRATORY/COMFORTING/SIMPLE/DETAILED",
      "SPEAKING TIME",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "creative-personal",
    categoryId: "speeches",
    exampleOutput:
      "A sensitive, respectful eulogy structure with guidance on delivery and emotional support.",
    customizationNotes: [
      "Share what made this person special",
      "Include their approach to life and death",
      "Mention the audience (family, friends, mixed)",
    ],
    tags: ["eulogy", "funeral", "memorial", "tribute"],
    order: 17,
  },

  {
    id: "presentation-speech",
    title: "Presentation & Public Speaking Helper",
    description: "Create engaging presentations and speeches for any occasion.",
    promptText: `Help me create a presentation or speech.

Topic:
[TOPIC]

Purpose:
[PURPOSE - INFORM/PERSUADE/INSPIRE/ENTERTAIN]

Audience:
[WHO THEY ARE]

Length:
[TIME OR WORD COUNT]

My goal:
[WHAT I WANT THE AUDIENCE TO DO/FEEL/THINK]

My main points:
[KEY POINTS TO COVER]

Please provide:
1. A complete presentation structure:
   - Compelling opening
   - Organized main points
   - Memorable closing
2. Transitions between sections
3. Visual suggestions (if applicable)
4. Delivery tips for this specific presentation
5. How to engage the audience
6. How to handle questions
7. Backup plans if technology fails or I lose my place`,
    placeholders: [
      "TOPIC",
      "PURPOSE - INFORM/PERSUADE/INSPIRE/ENTERTAIN",
      "WHO THEY ARE",
      "TIME OR WORD COUNT",
      "WHAT I WANT THE AUDIENCE TO DO/FEEL/THINK",
      "KEY POINTS TO COVER",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "speeches",
    exampleOutput:
      "A complete presentation structure with engaging opening, organized content, memorable close, and delivery guidance.",
    customizationNotes: [
      "Include your expertise level on the topic",
      "Mention your experience with public speaking",
      "Share the context (work, school, event)",
    ],
    tags: ["presentation", "speech", "public-speaking"],
    order: 18,
  },

  {
    id: "graduation-speech",
    title: "Graduation Speech Writer",
    description: "Write inspiring graduation speeches for any level.",
    promptText: `Help me write a graduation speech.

Graduation level:
[HIGH SCHOOL/COLLEGE/GRADUATE/OTHER]

My role:
[STUDENT/TEACHER/GUEST SPEAKER]

Audience:
[WHO'S IN THE AUDIENCE]

Tone:
[INSPIRATIONAL/HUMBLE/REFLECTIVE/UPBEAT]

Time limit:
[DURATION]

Key themes I want to include:
[THEMES OR MESSAGES]

Please provide:
1. A complete graduation speech with:
   - Attention-grabbing opening
   - 2-3 key messages or stories
   - Inspiration for the future
   - Memorable conclusion
2. How to balance humor and sincerity
3. References to shared experiences
4. How to make it feel personal, not generic
5. Delivery tips for nervous speakers`,
    placeholders: [
      "HIGH SCHOOL/COLLEGE/GRADUATE/OTHER",
      "STUDENT/TEACHER/GUEST SPEAKER",
      "WHO'S IN THE AUDIENCE",
      "INSPIRATIONAL/HUMBLE/REFLECTIVE/UPBEAT",
      "DURATION",
      "THEMES OR MESSAGES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "speeches",
    exampleOutput:
      "A complete graduation speech with inspiring messages, relatable content, and delivery guidance.",
    customizationNotes: [
      "Include specific class experiences or milestones",
      "Mention shared challenges you overcame",
      "Share your connection to the graduating class",
    ],
    tags: ["graduation", "speech", "commencement"],
    order: 19,
  },

  {
    id: "toast-generator",
    title: "Toast & Short Speech Generator",
    description: "Create brief, impactful toasts for any celebration.",
    promptText: `Help me write a memorable toast.

Occasion:
[OCCASION]

My relationship to the honoree:
[RELATIONSHIP]

Desired tone:
[HEARTFELT/FUNNY/INSPIRATIONAL/CLASSY]

Length:
[SHORT - UNDER 2 MINUTES/MEDIUM - 2-5 MINUTES]

Key points to include:
[WHAT YOU WANT TO MENTION]

Please provide:
1. A polished toast with:
   - Attention-getting opening
   - Core message or story
   - Perfect toast line to raise a glass to
   - Strong closing
2. 3-5 alternative toast lines at the end
3. Delivery tips
4. How to adjust if I'm nervous
5. What to avoid in toasts`,
    placeholders: [
      "OCCASION",
      "RELATIONSHIP",
      "HEARTFELT/FUNNY/INSPIRATIONAL/CLASSY",
      "SHORT - UNDER 2 MINUTES/MEDIUM - 2-5 MINUTES",
      "WHAT YOU WANT TO MENTION",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "speeches",
    exampleOutput:
      "A memorable toast with perfect opening, core message, toast lines, and delivery guidance.",
    customizationNotes: [
      "Include specific stories or qualities",
      "Mention if the audience knows you",
      "Share your comfort with public speaking",
    ],
    tags: ["toast", "speech", "celebration"],
    order: 20,
  },

  // ============================================================================
  // HOME PROJECTS
  // ============================================================================

  {
    id: "home-renovation-planner",
    title: "Home Renovation Project Planner",
    description: "Plan home renovations with realistic timelines and budgets.",
    promptText: `Help me plan a home renovation project.

Project:
[WHAT I WANT TO RENOVATE]

Scope:
- Size of space: [DIMENSIONS OR ROOM TYPE]
- What I want to change: [CHANGES]
- What's staying the same: [CONSTRAINTS]

Budget:
[TOTAL BUDGET]

My skills:
[DIY EXPERIENCE LEVEL]

Timeline:
[DEADLINE OR PREFERRED TIMING]

Please provide:
1. Project breakdown by phase
2. Realistic timeline for completion
3. Budget breakdown (materials, tools, labor if needed)
4. What to DIY vs. hire out
5. Permits or professional help needed
6. Order of operations
7. Common mistakes to avoid
8. How to save money without sacrificing quality`,
    placeholders: [
      "WHAT I WANT TO RENOVATE",
      "DIMENSIONS OR ROOM TYPE",
      "CHANGES",
      "CONSTRAINTS",
      "TOTAL BUDGET",
      "DIY EXPERIENCE LEVEL",
      "DEADLINE OR PREFERRED TIMING",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "home-projects",
    exampleOutput:
      "A comprehensive renovation plan with timeline, budget breakdown, DIY guidance, and mistake avoidance.",
    customizationNotes: [
      "Be honest about your DIY skills",
      "Include specific materials or styles you want",
      "Mention any unexpected challenges with the space",
    ],
    tags: ["home", "renovation", "diy", "improvement"],
    order: 21,
  },

  {
    id: "room-makeover-planner",
    title: "Room Makeover Design",
    description: "Design room makeovers with layout, color, and decor suggestions.",
    promptText: `Help me redesign my room.

Room type:
[BEDROOM/LIVING ROOM/KITCHEN/ETC]

Room dimensions:
[SIZE]

Current situation:
[WHAT I'M WORKING WITH - FURNITURE, COLORS, ETC.]

My goals:
[WHAT I WANT TO ACHIEVE]

Style preferences:
[DESIGN STYLE]

Budget:
[BUDGET FOR THE PROJECT]

Please provide:
1. Layout suggestions
2. Color palette recommendations
3. Furniture recommendations (keep, replace, add)
4. Decor and accessory ideas
5. Lighting suggestions
6. How to implement in phases if budget is tight
7. Shopping list with priorities
8. DIY options vs. buy decisions`,
    placeholders: [
      "BEDROOM/LIVING ROOM/KITCHEN/ETC",
      "SIZE",
      "WHAT I'M WORKING WITH - FURNITURE, COLORS, ETC.",
      "WHAT I WANT TO ACHIEVE",
      "DESIGN STYLE",
      "BUDGET FOR THE PROJECT",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "home-projects",
    exampleOutput:
      "A complete room redesign plan with layout, colors, furniture, decor, and phased implementation.",
    customizationNotes: [
      "Include your lifestyle needs for the room",
      "Mention any furniture you must keep",
      "Share your commitment level to DIY projects",
    ],
    tags: ["home", "design", "interior", "makeover"],
    order: 22,
  },

  {
    id: "home-organization-plan",
    title: "Home Organization System",
    description: "Create organizational systems for any space in your home.",
    promptText: `Help me organize this space in my home.

Space to organize:
[ROOM OR AREA]

Current problems:
[WHAT'S NOT WORKING]

What needs to be stored:
[ITEMS THAT NEED ORGANIZATION]

Constraints:
- Budget: [BUDGET FOR SUPPLIES]
- Can I modify the space? [YES/NO]
- Storage available: [CURRENT STORAGE]

My organizational style:
[PREFERENCES: VISIBLE/HIDDEN/MINIMAL/LABELED/ETC]

Please provide:
1. Decluttering strategy (what to keep, donate, toss)
2. Zoning plan (what goes where)
3. Storage solution recommendations
4. Organization systems that work for my style
5. Shopping list for containers/supplies
6. How to maintain the organization
7. Habits to prevent re-cluttering`,
    placeholders: [
      "ROOM OR AREA",
      "WHAT'S NOT WORKING",
      "ITEMS THAT NEED ORGANIZATION",
      "BUDGET FOR SUPPLIES",
      "YES/NO",
      "CURRENT STORAGE",
      "PREFERENCES: VISIBLE/HIDDEN/MINIMAL/LABELED/ETC",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "creative-personal",
    categoryId: "home-projects",
    exampleOutput:
      "A complete organization plan with decluttering strategy, storage solutions, and maintenance habits.",
    customizationNotes: [
      "Be honest about your organizational habits",
      "Include what you've tried before",
      "Mention household members who use the space",
    ],
    tags: ["home", "organization", "declutter"],
    order: 23,
  },

  {
    id: "diy-project-instructions",
    title: "DIY Project Instructions",
    description: "Get step-by-step instructions for DIY home projects.",
    promptText: `Give me instructions for this DIY project.

Project I want to do:
[WHAT I WANT TO BUILD OR CREATE]

My skill level:
[BEGINNER/INTERMEDIATE/ADVANCED DIY]

Tools I have:
[AVAILABLE TOOLS]

Budget:
[HOW MUCH I CAN SPEND]

Space constraints:
[LIMITATIONS ON WHERE I CAN WORK]

Please provide:
1. Complete materials list with quantities
2. Tools needed (what I have vs. what I need to buy/borrow)
3. Step-by-step instructions
4. Estimated time to complete
5. Skill level required for each step
6. Common mistakes and how to avoid them
7. How to know if I'm in over my head
8. What a pro would charge for comparison`,
    placeholders: [
      "WHAT I WANT TO BUILD OR CREATE",
      "BEGINNER/INTERMEDIATE/ADVANCED DIY",
      "AVAILABLE TOOLS",
      "HOW MUCH I CAN SPEND",
      "LIMITATIONS ON WHERE I CAN WORK",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "home-projects",
    exampleOutput:
      "Complete DIY instructions with materials, tools, step-by-step guidance, and realistic difficulty assessment.",
    customizationNotes: [
      "Be honest about your DIY experience",
      "Include any specific constraints or concerns",
      "Mention past projects you've completed",
    ],
    tags: ["home", "diy", "projects", "instructions"],
    order: 24,
  },

  {
    id: "garden-outdoor-planner",
    title: "Garden & Outdoor Space Planner",
    description: "Plan gardens, yards, and outdoor living spaces.",
    promptText: `Help me plan my outdoor space.

Type of space:
[YARD/PATIO/BALCONY/ROOFTOP/GARDEN]

Size:
[DIMENSIONS OR APPROXIMATE SIZE]

Climate:
[CLIMATE OR REGION]

Sun exposure:
[SUN/SHADE/PARTIAL]

My goals:
[WHAT I WANT TO ACHIEVE]

My experience level:
[GARDENING EXPERIENCE]

Budget:
[BUDGET]

Time commitment:
[HOURS PER WEEK I CAN MAINTAIN]

Please provide:
1. Layout and design suggestions
2. Plant recommendations for my climate and conditions
3. Hardscaping ideas (paths, seating, etc.)
4. phased implementation plan
5. Maintenance requirements
6. Seasonal considerations
7. What to plant for year-round interest`,
    placeholders: [
      "YARD/PATIO/BALCONY/ROOFTOP/GARDEN",
      "DIMENSIONS OR APPROXIMATE SIZE",
      "CLIMATE OR REGION",
      "SUN/SHADE/PARTIAL",
      "WHAT I WANT TO ACHIEVE",
      "GARDENING EXPERIENCE",
      "BUDGET",
      "HOURS PER WEEK I CAN MAINTAIN",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "creative-personal",
    categoryId: "home-projects",
    exampleOutput:
      "A complete outdoor space plan with plants, hardscaping, phased implementation, and maintenance guidance.",
    customizationNotes: [
      "Include what you want to grow or use the space for",
      "Mention any specific features you want (fire pit, etc.)",
      "Share if you have pets or children",
    ],
    tags: ["home", "garden", "outdoor", "landscaping"],
    order: 25,
  },
];
