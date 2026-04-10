/**
 * Email & Communication Prompts
 *
 * PURPOSE: Prompts for professional emails, messages, and business correspondence.
 *
 * DOMAIN: Email & Communication
 * CATEGORIES:
 * - Cold Outreach
 * - Follow-ups
 * - Professional Requests
 * - Difficult Conversations
 * - Team Communication
 * - Customer Communication
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Email & Communication prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const emailCommunicationPrompts: Prompt[] = [
  // ============================================================================
  // COLD OUTREACH
  // ============================================================================

  {
    id: "linkedin-outreach-personalized",
    title: "LinkedIn Outreach Message",
    description: "Create personalized LinkedIn connection messages that get responses.",
    promptText: `Write a personalized LinkedIn connection request for the following scenario:

Who I'm reaching out to:
- Name: [NAME]
- Role: [THEIR ROLE]
- Company: [COMPANY]

Who I am:
- My role: [YOUR ROLE]
- My company: [YOUR COMPANY]
- What I do: [BRIEF DESCRIPTION]

My goal:
- [GOAL - e.g., networking, sales, partnership, job opportunity]

Connection point:
- [HOW I FOUND THEM OR WHAT WE HAVE IN COMMON]

Please write a connection request under 300 characters that:
1. Personalizes based on their background
2. Clearly states why I'm connecting
3. Offers value or shows genuine interest
4. Ends with a low-friction next step`,
    placeholders: [
      "NAME",
      "THEIR ROLE",
      "COMPANY",
      "YOUR ROLE",
      "YOUR COMPANY",
      "BRIEF DESCRIPTION",
      "GOAL",
      "HOW I FOUND THEM OR WHAT WE HAVE IN COMMON",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "cold-outreach",
    exampleOutput:
      "A concise, personalized connection message that references specific details about the recipient and offers a clear reason to connect.",
    customizationNotes: [
      "Keep it under 300 characters (LinkedIn limit)",
      "Reference specific posts or achievements if possible",
      "Avoid sales pitches in first connection",
    ],
    tags: ["linkedin", "networking", "cold-outreach", "connection"],
    order: 1,
  },

  {
    id: "cold-email-value-proposition",
    title: "Cold Email Value Proposition",
    description: "Write cold emails that clearly communicate value and earn replies.",
    promptText: `Write a cold email that gets responses by focusing on value, not features.

Recipient:
- Name: [NAME]
- Role: [ROLE]
- Company: [COMPANY]

What I'm offering:
- Product/Service: [DESCRIPTION]
- Key benefit: [MAIN BENEFIT]

My goal:
- [DESIRED OUTCOME]

Research I found:
- [ANY SPECIFIC INFO ABOUT THEM OR THEIR COMPANY]

Please write a cold email that:
1. Has a compelling subject line (under 50 characters)
2. Opens with a personalized observation
3. Identifies a specific problem they likely face
4. Presents my solution as the answer
5. Includes social proof if relevant
6. Ends with a specific, low-friction call to action
7. Is under 200 words

Make it sound like a human, not a template.`,
    placeholders: [
      "NAME",
      "ROLE",
      "COMPANY",
      "DESCRIPTION",
      "MAIN BENEFIT",
      "DESIRED OUTCOME",
      "ANY SPECIFIC INFO ABOUT THEM OR THEIR COMPANY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "cold-outreach",
    exampleOutput:
      "A concise cold email with a strong subject line, personalized opening, clear value proposition, and specific next step.",
    customizationNotes: [
      "Include 1-2 specific details about their company for authenticity",
      "Focus on their pain points, not your features",
      "Make the CTA specific but low commitment",
    ],
    tags: ["cold-email", "sales", "outreach", "value-proposition"],
    order: 2,
  },

  {
    id: "networking-email-event-followup",
    title: "Post-Event Networking Email",
    description: "Follow up with new contacts after conferences, events, or meetings.",
    promptText: `Write a follow-up email after meeting someone at an event.

Where we met:
- Event: [EVENT NAME]
- Context: [HOW WE MET - e.g., panel discussion, coffee break, intro]

Who they are:
- Name: [NAME]
- Role: [ROLE]
- Company: [COMPANY]

Who I am:
- My role: [YOUR ROLE]
- What I do: [BRIEF DESCRIPTION]

What we discussed:
- [KEY TOPIC(S) OF CONVERSATION]

My goal:
- [WHAT I HOPE TO ACCOMPLISH]

Write an email that:
1. References our conversation specifically
2. Shows I listened and was interested
3. Offers something of value (resource, intro, insight)
4. Proposes a specific next step if appropriate
5. Is warm but professional

Send within [TIMEFRAME] of meeting.`,
    placeholders: [
      "EVENT NAME",
      "HOW WE MET - e.g., panel discussion, coffee break, intro",
      "NAME",
      "ROLE",
      "COMPANY",
      "YOUR ROLE",
      "BRIEF DESCRIPTION",
      "KEY TOPIC(S) OF CONVERSATION",
      "WHAT I HOPE TO ACCOMPLISH",
      "TIMEFRAME",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "cold-outreach",
    exampleOutput:
      "A warm, personalized follow-up that references specific conversation points and offers clear next steps.",
    customizationNotes: [
      "Send within 24-48 hours for best response",
      "Reference something specific you discussed",
      "Offer value before asking for anything",
    ],
    tags: ["networking", "follow-up", "events", "relationship-building"],
    order: 3,
  },

  {
    id: "partnership-outreach-email",
    title: "Partnership Outreach Email",
    description: "Propose strategic partnerships and collaborations via email.",
    promptText: `Write an email proposing a partnership or collaboration.

Potential partner:
- Company: [COMPANY]
- Contact name: [NAME] (if known)
- Their focus area: [WHAT THEY DO]

My company:
- Company: [YOUR COMPANY]
- What we do: [YOUR FOCUS]

Partnership proposal:
- Type of partnership: [PARTNERSHIP TYPE]
- Mutual benefit: [WHAT EACH GAINS]
- Specific idea: [THE PROPOSAL]

My credibility:
- [RELEVANT CREDENTIALS or SOCIAL PROOF]

Write an email that:
1. Shows I understand their business and audience
2. Clearly articulates the mutual benefit
3. Proposes a specific collaboration idea
4. Establishes credibility without being boastful
5. Suggests a brief call to discuss
6. Keeps it under 200 words`,
    placeholders: [
      "COMPANY",
      "NAME",
      "WHAT THEY DO",
      "YOUR COMPANY",
      "YOUR FOCUS",
      "PARTNERSHIP TYPE",
      "WHAT EACH GAINS",
      "THE PROPOSAL",
      "RELEVANT CREDENTIALS or SOCIAL PROOF",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "cold-outreach",
    exampleOutput:
      "A professional partnership proposal highlighting mutual value with a specific collaboration idea.",
    customizationNotes: [
      "Research their current partnerships first",
      "Be specific about what you bring to the table",
      "Keep the initial ask small - just a conversation",
    ],
    tags: ["partnership", "collaboration", "business-development", "outreach"],
    order: 4,
  },

  {
    id: "guest-post-pitch-email",
    title: "Guest Post Pitch Email",
    description: "Pitch articles and guest posts to editors and publications.",
    promptText: `Write a pitch email for a guest post or article.

Publication:
- Name: [PUBLICATION]
- Editor: [EDITOR NAME] (if known)
- Their focus: [WHAT THEY COVER]

My pitch:
- Topic: [ARTICLE TOPIC]
- Angle: [FRESH PERSPECTIVE]
- Target audience: [WHO IT'S FOR]

My credentials:
- My background: [YOUR CREDENTIALS]
- Relevant links: [PORTFOLIO or PREVIOUS WORK]

Write a pitch email that:
1. Has a compelling subject line that hints at value
2. Shows I know the publication and audience
3. Identifies a gap or angle they haven't covered
4. Outlines the article structure (3-4 key points)
5. Explains why I'm the right person to write it
6. Is concise (under 200 words)
7. Links to 2-3 relevant writing samples`,
    placeholders: [
      "PUBLICATION",
      "EDITOR NAME",
      "WHAT THEY COVER",
      "ARTICLE TOPIC",
      "FRESH PERSPECTIVE",
      "WHO IT'S FOR",
      "YOUR CREDENTIALS",
      "PORTFOLIO or PREVIOUS WORK",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "cold-outreach",
    exampleOutput:
      "A concise pitch with a strong article angle, clear structure, and relevant credentials.",
    customizationNotes: [
      "Read 3-5 recent articles to understand their style",
      "Reference specific articles you enjoyed",
      "Include working headline options",
    ],
    tags: ["guest-post", "pitching", "content-marketing", "writing"],
    order: 5,
  },

  {
    id: "podcast-guest-pitch",
    title: "Podcast Guest Pitch",
    description: "Pitch yourself as a guest on podcasts in your niche.",
    promptText: `Write a pitch email to be a guest on a podcast.

Podcast:
- Name: [PODCAST NAME]
- Host: [HOST NAME]
- Topics they cover: [THEIR FOCUS]

My pitch:
- Topic I can discuss: [EXPERTISE TOPIC]
- Unique angle: [WHAT MAKES IT INTERESTING]
- Stories/case studies: [COMPELLING EXAMPLES]

My credentials:
- Background: [YOUR CREDENTIALS]
- Audience I can bring: [FOLLOWING or REACH]

Write a pitch email that:
1. Shows I've listened to specific episodes
2. Identifies a topic their audience would love
3. Outlines 3-5 discussion points/questions
4. Demonstrates expertise without bragging
5. Mentions audience I can bring (if applicable)
6. Is concise and enthusiastic
7. Includes links to previous interviews (if any)`,
    placeholders: [
      "PODCAST NAME",
      "HOST NAME",
      "THEIR FOCUS",
      "EXPERTISE TOPIC",
      "WHAT MAKES IT INTERESTING",
      "COMPELLING EXAMPLES",
      "YOUR CREDENTIALS",
      "FOLLOWING or REACH",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "cold-outreach",
    exampleOutput:
      "A personalized podcast pitch with specific episode references and discussion points.",
    customizationNotes: [
      "Listen to at least 2-3 episodes before pitching",
      "Reference a specific episode you enjoyed",
      "Suggest a compelling episode title",
    ],
    tags: ["podcast", "pitch", "guest-appearance", "media"],
    order: 6,
  },

  {
    id: "job-referral-request",
    title: "Job Referral Request",
    description: "Request referrals from employees at companies you want to join.",
    promptText: `Write a message asking for a job referral.

Person I'm asking:
- Name: [NAME]
- How we know each other: [CONNECTION]
- Last contact: [WHEN WE LAST SPOKE]

Job I want:
- Company: [COMPANY]
- Role: [POSITION]
- Why I'm interested: [MY INTEREST]

My background:
- Relevant experience: [QUALIFICATIONS]
- Why I'd be good: [FIT]

Write a message that:
1. Acknowledges it's been a while (if applicable)
2. Briefly catches them up on what I'm doing
3. Mentions the role I'm applying for
4. Highlights 2-3 reasons I'm a strong fit
5. Asks if they'd be comfortable referring me
6. Makes it easy to say no (no pressure)
7. Thanks them regardless of their answer`,
    placeholders: [
      "NAME",
      "CONNECTION",
      "WHEN WE LAST SPOKE",
      "COMPANY",
      "POSITION",
      "MY INTEREST",
      "QUALIFICATIONS",
      "FIT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "cold-outreach",
    exampleOutput:
      "A respectful referral request that provides context and makes it easy to decline.",
    customizationNotes: [
      "Include your resume or LinkedIn for easy reference",
      "Offer to catch up properly after the process",
      "Follow the company's referral process",
    ],
    tags: ["job-search", "referral", "networking", "career"],
    order: 7,
  },

  {
    id: "cold-dm-social-media",
    title: "Social Media Cold DM",
    description: "Send thoughtful direct messages on Twitter, Instagram, or other platforms.",
    promptText: `Write a cold DM for social media.

Platform: [PLATFORM]

Person I'm messaging:
- Name: [NAME]
- Handle: [@USERNAME]
- Why I'm reaching out: [REASON]
- What I admire: [THEIR WORK/CONTENT]

Who I am:
- My background: [ABOUT ME]
- What I do: [MY WORK]

My goal:
- [DESIRED OUTCOME]

Connection point:
- [WHAT WE HAVE IN COMMON or WHY THEM SPECIFICALLY]

Write a DM that:
1. Feels authentic, not transactional
2. References specific content they've created
3. Offers genuine value or appreciation
4. Has a clear but not pushy ask
5. Is conversational and brief (under 150 words)
6. Fits the platform's culture

Avoid making it look like a copy-paste job.`,
    placeholders: [
      "PLATFORM",
      "NAME",
      "@USERNAME",
      "REASON",
      "THEIR WORK/CONTENT",
      "ABOUT ME",
      "MY WORK",
      "DESIRED OUTCOME",
      "WHAT WE HAVE IN COMMON or WHY THEM SPECIFICALLY",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "cold-outreach",
    exampleOutput: "A genuine, platform-appropriate DM that feels personal and thoughtful.",
    customizationNotes: [
      "Engage with their content before DMing",
      "Keep it shorter than email (under 150 words)",
      "Match their communication style",
    ],
    tags: ["social-media", "dm", "outreach", "twitter", "instagram"],
    order: 8,
  },

  // ============================================================================
  // FOLLOW-UPS
  // ============================================================================

  {
    id: "no-response-followup",
    title: "No Response Follow-up",
    description: "Politely follow up when someone hasn't replied to your email.",
    promptText: `Write a follow-up email when someone hasn't responded.

Original email context:
- What I sent: [ORIGINAL EMAIL CONTENT SUMMARY]
- When I sent it: [DATE SENT]
- Desired action: [WHAT I NEEDED]

Recipient:
- Name: [NAME]
- Context: [OUR RELATIONSHIP if any]

This is follow-up number: [1/2/3]

Write a follow-up that:
1. Bumps to the top of their inbox professionally
2. Briefly reminds them of the original email
3. Adds new value if possible (update, resource, insight)
4. Asks if they're still interested or if circumstances changed
5. Makes it easy to respond with a simple yes/no
6. Is gracious and understanding of their busyness
7. Keeps it under 100 words

Don't make them feel guilty for not replying.`,
    placeholders: [
      "ORIGINAL EMAIL CONTENT SUMMARY",
      "DATE SENT",
      "WHAT I NEEDED",
      "NAME",
      "OUR RELATIONSHIP if any",
      "1/2/3",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "follow-ups",
    exampleOutput: "A polite, brief follow-up that gently reminds without guilt-tripping.",
    customizationNotes: [
      "Wait 3-5 business days before first follow-up",
      'Change the subject line or add "Re:" for visibility',
      "Add new value with each follow-up if possible",
    ],
    tags: ["follow-up", "no-response", "email", "reminder"],
    order: 9,
  },

  {
    id: "gentle-nudge-deadline",
    title: "Gentle Deadline Nudge",
    description: "Remind someone about an upcoming deadline without being pushy.",
    promptText: `Write a gentle reminder about an upcoming deadline.

Deadline context:
- What's due: [DELIVERABLE OR TASK]
- When it's due: [DEADLINE DATE]
- Original agreement: [WHAT WAS AGREED]

Recipient:
- Name: [NAME]
- Their role: [THEIR ROLE]
- Our relationship: [COLLEAGUE/CLIENT/FRIEND/etc]

My role:
- [MY ROLE IN THIS PROJECT]

Time until deadline:
- [DAYS REMAINING]

Write a message that:
1. Assumes they're on top of things
2. Offers help if they need it
3. Checks if there are any blockers
4. Clarifies expectations if needed
5. Maintains a collaborative tone
6. Is brief and friendly

Avoid sounding like I'm micromanaging.`,
    placeholders: [
      "DELIVERABLE OR TASK",
      "DEADLINE DATE",
      "WHAT WAS AGREED",
      "NAME",
      "THEIR ROLE",
      "COLLEAGUE/CLIENT/FRIEND/etc",
      "MY ROLE IN THIS PROJECT",
      "DAYS REMAINING",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "follow-ups",
    exampleOutput: "A supportive reminder that offers help and checks for blockers.",
    customizationNotes: [
      "Send early enough that they have time to respond",
      'Frame it as "checking in" not "chasing"',
      "Offer specific ways you can help",
    ],
    tags: ["deadline", "reminder", "project", "collaboration"],
    order: 10,
  },

  {
    id: "proposal-followup-stalled",
    title: "Stalled Proposal Follow-up",
    description: "Revive a stalled proposal or sales conversation.",
    promptText: `Write a follow-up for a stalled proposal or deal.

Proposal context:
- What I proposed: [PROPOSAL SUMMARY]
- When I sent it: [DATE]
- Value: [KEY BENEFITS]

Current situation:
- Last contact: [LAST COMMUNICATION]
- Their feedback: [ANY OBJECTIONS or CONCERNS]
- Why it might be stalled: [POSSIBLE REASONS]

My goal:
- [NEXT STEP I WANT]

Write a follow-up that:
1. Acknowledges they're busy
2. Addresses likely objections proactively
3. Offers new information or social proof
4. Asks one clarifying question to restart dialogue
5. Suggests a specific next step
6. Is persistent but professional
7. Creates urgency without being pushy

Don't sound desperate or frustrated.`,
    placeholders: [
      "PROPOSAL SUMMARY",
      "DATE",
      "KEY BENEFITS",
      "LAST COMMUNICATION",
      "ANY OBJECTIONS or CONCERNS",
      "POSSIBLE REASONS",
      "NEXT STEP I WANT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "follow-ups",
    exampleOutput:
      "A strategic follow-up that addresses objections and moves the conversation forward.",
    customizationNotes: [
      "Include new case studies or updates since last contact",
      "Reference competitors or market changes that make your solution more urgent",
      "Consider offering a limited-time incentive",
    ],
    tags: ["sales", "proposal", "follow-up", "re-engagement"],
    order: 11,
  },

  {
    id: "interview-thank-you-followup",
    title: "Post-Interview Thank You",
    description: "Send a thank you note after job interviews.",
    promptText: `Write a thank you email after a job interview.

Interview context:
- Company: [COMPANY]
- Role: [POSITION]
- Interviewer(s): [NAME(S)]
- Date: [INTERVIEW DATE]
- Format: [IN PERSON/VIDEO/PHONE]

What we discussed:
- [KEY TOPICS FROM INTERVIEW]

My qualifications:
- [MY RELEVANT EXPERIENCE]

What I'm excited about:
- [COMPANY ASPECTS I ENJOYED]

Why I'm a good fit:
- [HOW I CAN HELP THEM]

Write a thank you that:
1. Thanks them for their time
2. References specific topics we discussed
3. Reinforces my enthusiasm for the role
4. Highlights 1-2 key qualifications
5. Addresses any concerns raised
6. Includes something I wished I'd mentioned
7. Is warm but professional
8. Asks about next steps

Send within [TIMEFRAME] hours.`,
    placeholders: [
      "COMPANY",
      "POSITION",
      "NAME(S)",
      "INTERVIEW DATE",
      "IN PERSON/VIDEO/PHONE",
      "KEY TOPICS FROM INTERVIEW",
      "MY RELEVANT EXPERIENCE",
      "COMPANY ASPECTS I ENJOYED",
      "HOW I CAN HELP THEM",
      "TIMEFRAME",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "follow-ups",
    exampleOutput: "A thoughtful thank you that references interview details and reinforces fit.",
    customizationNotes: [
      "Send within 24 hours for best impression",
      "Personalize for each interviewer if multiple",
      "Keep it brief - they're busy",
    ],
    tags: ["interview", "thank-you", "job-search", "follow-up"],
    order: 12,
  },

  {
    id: "meeting-confirmation-reminder",
    title: "Meeting Confirmation Reminder",
    description: "Confirm upcoming meetings and ensure attendance.",
    promptText: `Write a meeting confirmation reminder.

Meeting details:
- Purpose: [MEETING TOPIC]
- Date: [DATE]
- Time: [TIME]
- Duration: [DURATION]
- Location/Link: [LOCATION or ZOOM LINK]

Attendees:
- [LIST OF ATTENDEES]

Agenda:
- [KEY POINTS TO COVER]

Preparation needed:
- [WHAT ATTENDEES SHOULD PREPARE]

Write a message that:
1. Confirms the meeting details clearly
2. Reminds them of the purpose/value
3. Lists the agenda briefly
4. Specifies any preparation needed
5. Asks for confirmation of attendance
6. Is polite and concise
7. Includes calendar invite if applicable

Send [TIMEFRAME] before the meeting.`,
    placeholders: [
      "MEETING TOPIC",
      "DATE",
      "TIME",
      "DURATION",
      "LOCATION or ZOOM LINK",
      "LIST OF ATTENDEES",
      "KEY POINTS TO COVER",
      "WHAT ATTENDEES SHOULD PREPARE",
      "TIMEFRAME",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "follow-ups",
    exampleOutput: "A clear, helpful reminder with all meeting details and prep requirements.",
    customizationNotes: [
      "Send 24-48 hours in advance for important meetings",
      "Include the agenda to show respect for their time",
      "Make it easy to reschedule if needed",
    ],
    tags: ["meeting", "confirmation", "reminder", "agenda"],
    order: 13,
  },

  {
    id: "payment-followup-polite",
    title: "Polite Payment Follow-up",
    description: "Request overdue payments without damaging relationships.",
    promptText: `Write a polite payment follow-up email.

Invoice context:
- Invoice number: [INVOICE #]
- Amount: [AMOUNT]
- Due date: [DUE DATE]
- Days overdue: [DAYS]

Client context:
- Company: [CLIENT COMPANY]
- Contact: [CONTACT NAME]
- Relationship: [HOW LONG WE'VE WORKED TOGETHER]
- Typical payment speed: [USUAL PAYMENT PATTERN]

Work delivered:
- [WHAT WAS DELIVERED]

Write a follow-up that:
1. Assumes it's an oversight (they're busy)
2. Provides invoice details for easy reference
3. Attaches the invoice again
4. Asks if there are any issues
5. Provides payment instructions
6. Is professional but firm
7. Maintains the relationship

Don't sound accusatory or frustrated.`,
    placeholders: [
      "INVOICE #",
      "AMOUNT",
      "DUE DATE",
      "DAYS",
      "CLIENT COMPANY",
      "CONTACT NAME",
      "HOW LONG WE'VE WORKED TOGETHER",
      "USUAL PAYMENT PATTERN",
      "WHAT WAS DELIVERED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "follow-ups",
    exampleOutput:
      "A professional payment reminder that assumes goodwill and makes it easy to pay.",
    customizationNotes: [
      "Wait at least 7 days past due before first follow-up",
      "Escalate gradually - gentle reminder, then firm, then final notice",
      "Include payment link for convenience",
    ],
    tags: ["payment", "invoice", "follow-up", "freelance"],
    order: 14,
  },

  {
    id: "application-status-check",
    title: "Application Status Check",
    description: "Inquire about job or application status professionally.",
    promptText: `Write an email to check on an application status.

Application context:
- Company: [COMPANY]
- Role/Program: [POSITION or PROGRAM]
- Applied on: [DATE APPLIED]
- How I applied: [APPLICATION METHOD]

Last contact:
- [ANY COMMUNICATION SINCE APPLYING]

My continued interest:
- [WHY I'M STILL INTERESTED]

Any updates:
- [NEW QUALIFICATIONS or ACHIEVEMENTS]

Write a message that:
1. Reaffirms my interest in the role
2. Asks about the timeline
3. Offers to provide additional information
4. Shares a brief update if relevant
5. Is respectful of their process
6. Is brief and professional
7. Thanks them for their time

Don't sound impatient or entitled.`,
    placeholders: [
      "COMPANY",
      "POSITION or PROGRAM",
      "DATE APPLIED",
      "APPLICATION METHOD",
      "ANY COMMUNICATION SINCE APPLYING",
      "WHY I'M STILL INTERESTED",
      "NEW QUALIFICATIONS or ACHIEVEMENTS",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "follow-ups",
    exampleOutput: "A professional status inquiry that shows continued interest and respect.",
    customizationNotes: [
      "Wait at least 2 weeks after applying",
      "Send to the recruiter or hiring manager if possible",
      "Keep it brief - they're reviewing many applications",
    ],
    tags: ["job-search", "application", "follow-up", "status-check"],
    order: 15,
  },

  // ============================================================================
  // PROFESSIONAL REQUESTS
  // ============================================================================

  {
    id: "meeting-request-email",
    title: "Meeting Request Email",
    description: "Request a meeting with a clear purpose and agenda.",
    promptText: `Write a meeting request email.

Recipient:
- Name: [NAME]
- Role: [THEIR ROLE]
- Relationship: [HOW WE KNOW EACH OTHER]

Meeting purpose:
- Topic: [WHAT I WANT TO DISCUSS]
- Why them: [WHY THEY'RE THE RIGHT PERSON]
- Expected duration: [LENGTH]

Context:
- [BACKGROUND OR REASON FOR MEETING]

What I'll bring:
- [WHAT I'LL PREPARE or SHARE]

Proposed times:
- [TIME SLOT OPTIONS]

Write a request that:
1. Respects their time (be specific about duration)
2. Clearly states the meeting purpose
3. Explains why I'm asking them specifically
4. Outlines what they'll get out of it
5. Provides context upfront
6. Suggests specific times but offers flexibility
7. Offers to make it async if they prefer

Make it easy for them to say yes.`,
    placeholders: [
      "NAME",
      "THEIR ROLE",
      "HOW WE KNOW EACH OTHER",
      "WHAT I WANT TO DISCUSS",
      "WHY THEY'RE THE RIGHT PERSON",
      "LENGTH",
      "BACKGROUND OR REASON FOR MEETING",
      "WHAT I'LL PREPARE or SHARE",
      "TIME SLOT OPTIONS",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "professional-requests",
    exampleOutput: "A clear, respectful meeting request with purpose, agenda, and time options.",
    customizationNotes: [
      "Suggest 2-3 specific time slots in their timezone",
      "Offer a video call link for convenience",
      "Keep the purpose focused - don't combine topics",
    ],
    tags: ["meeting", "request", "agenda", "scheduling"],
    order: 16,
  },

  {
    id: "informational-interview-request",
    title: "Informational Interview Request",
    description: "Request an informational interview to learn from someone.",
    promptText: `Write a request for an informational interview.

Person I'm asking:
- Name: [NAME]
- Their role: [THEIR ROLE]
- Company: [COMPANY]
- How I found them: [CONNECTION or SOURCE]

Who I am:
- My background: [ABOUT ME]
- My interests: [WHAT I'M INTERESTED IN]
- Career stage: [STUDENT/CAREER CHANGER/ETC]

What I want to learn:
- [TOPICS I WANT TO DISCUSS]
- [QUESTIONS I HAVE]

Time commitment:
- [REQUESTED DURATION - keep it short: 15-20 min]

Write a request that:
1. Shows I've done my homework on them
2. Is specific about what I want to learn
3. Respects their time (ask for 15-20 minutes max)
4. Offers flexibility in format (call, coffee, email)
5. Makes it easy to say no
6. Expresses genuine interest, not just job seeking
7. Is humble and appreciative

Don't make it sound like I'm asking for a job.`,
    placeholders: [
      "NAME",
      "THEIR ROLE",
      "COMPANY",
      "CONNECTION or SOURCE",
      "ABOUT ME",
      "WHAT I'M INTERESTED IN",
      "STUDENT/CAREER CHANGER/ETC",
      "TOPICS I WANT TO DISCUSS",
      "QUESTIONS I HAVE",
      "REQUESTED DURATION - keep it short: 15-20 min",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "professional-requests",
    exampleOutput: "A respectful, specific request that shows preparation and respects their time.",
    customizationNotes: [
      "Research their background before asking",
      "Offer to come to them or do a call",
      "Send questions in advance if they prefer",
    ],
    tags: ["informational-interview", "networking", "career", "learning"],
    order: 17,
  },

  {
    id: "resource-or-favor-request",
    title: "Resource or Favor Request",
    description: "Ask for help, resources, or advice professionally.",
    promptText: `Write an email requesting a resource or favor.

Recipient:
- Name: [NAME]
- Relationship: [HOW I KNOW THEM]
- Last contact: [WHEN WE LAST SPOKE]

What I'm requesting:
- [THE RESOURCE or FAVOR]
- Why I'm asking them: [WHY THEM SPECIFICALLY]
- How I'll use it: [INTENDED USE]

What I've tried:
- [WHAT I'VE ALREADY DONE]

My offer:
- [HOW I CAN RECIPROCATE]

Write a request that:
1. Acknowledges their expertise
2. Is specific about what I need
3. Shows I've done my homework
4. Makes it easy to help (be clear)
5. Offers to reciprocate
6. Gives them an easy out
7. Expresses genuine gratitude

Don't make it sound transactional.`,
    placeholders: [
      "NAME",
      "HOW I KNOW THEM",
      "WHEN WE LAST SPOKE",
      "THE RESOURCE or FAVOR",
      "WHY THEM SPECIFICALLY",
      "INTENDED USE",
      "WHAT I'VE ALREADY DONE",
      "HOW I CAN RECIPROCATE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "professional-requests",
    exampleOutput: "A thoughtful request that shows preparation and offers reciprocity.",
    customizationNotes: [
      "Keep initial requests small",
      "Follow through on any offers to reciprocate",
      "Send a thank you regardless of the outcome",
    ],
    tags: ["favor", "help", "request", "reciprocity"],
    order: 18,
  },

  {
    id: "introduction-request-email",
    title: "Introduction Request Email",
    description: "Ask someone to introduce you to a valuable contact.",
    promptText: `Write an email asking for an introduction.

Person I'm asking:
- Name: [NAME]
- Our relationship: [HOW WE KNOW EACH OTHER]

Who I want to meet:
- Target person: [TARGET NAME and ROLE]
- Company: [THEIR COMPANY]
- Why I want to meet them: [REASON]

My value proposition:
- What I can offer: [VALUE FOR TARGET]
- Why this introduction makes sense: [MUTUAL BENEFIT]

Context:
- [BACKGROUND INFORMATION]

Write an email that:
1. Respects their relationship with the target
2. Clearly explains why I want the intro
3. Shows I've done research on the target
4. Articulates the value for everyone involved
5. Makes it easy to forward (draft included)
6. Gives them an easy out
7. Expresses appreciation regardless

Include a draft message they can forward.`,
    placeholders: [
      "NAME",
      "HOW WE KNOW EACH OTHER",
      "TARGET NAME and ROLE",
      "THEIR COMPANY",
      "REASON",
      "VALUE FOR TARGET",
      "MUTUAL BENEFIT",
      "BACKGROUND INFORMATION",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "email-communication",
    categoryId: "professional-requests",
    exampleOutput:
      "A well-crafted introduction request with a clear value proposition and draft forward.",
    customizationNotes: [
      "Include a draft they can easily customize",
      "Make it clear why this benefits their contact",
      "Offer to write something they can just forward",
    ],
    tags: ["introduction", "referral", "networking", "warm-intro"],
    order: 19,
  },

  {
    id: "recommendation-request",
    title: "Recommendation Request",
    description: "Request professional recommendations (LinkedIn or otherwise).",
    promptText: `Write a request for a professional recommendation.

Person I'm asking:
- Name: [NAME]
- How we worked together: [RELATIONSHIP]
- Time worked together: [DURATION]

What I want them to highlight:
- [SPECIFIC SKILLS or QUALITIES]
- [PROJECTS or ACHIEVEMENTS]

Where this is for:
- [PURPOSE - e.g., LinkedIn, job application, grad school]

My recent work:
- [WHAT I'VE BEEN DOING]

Write a request that:
1. Reminds them of our work together
2. Specifies what I'd appreciate them highlighting
3. Provides context on my recent work
4. Makes it as easy as possible (talking points)
5. Gives them a deadline but with flexibility
6. Offers to write a draft for their approval
7. Expresses genuine gratitude

Include specific examples they can reference.`,
    placeholders: [
      "NAME",
      "RELATIONSHIP",
      "DURATION",
      "SPECIFIC SKILLS or QUALITIES",
      "PROJECTS or ACHIEVEMENTS",
      "PURPOSE - e.g., LinkedIn, job application, grad school",
      "WHAT I'VE BEEN DOING",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "professional-requests",
    exampleOutput: "A thoughtful recommendation request with helpful context and talking points.",
    customizationNotes: [
      "Provide a draft they can edit - most people appreciate this",
      "Refresh their memory with specific projects",
      "Give them at least 2 weeks before the deadline",
    ],
    tags: ["recommendation", "linkedin", "reference", "job-search"],
    order: 20,
  },

  {
    id: "quote-or-pricing-request",
    title: "Quote or Pricing Request",
    description: "Request quotes or pricing information professionally.",
    promptText: `Write a request for a quote or pricing.

Vendor:
- Company: [VENDOR COMPANY]
- Contact: [CONTACT NAME if known]

What I need:
- Service/product: [WHAT I NEED]
- Quantity/scope: [SPECIFICATIONS]
- Timeline: [WHEN I NEED IT]

My situation:
- [CONTEXT - budget, urgency, etc.]

My decision process:
- [DECISION TIMELINE]
- [WHO ELSE IS INVOLVED]

Write a request that:
1. Is specific about what I need
2. Provides enough detail for accurate pricing
3. Explains my timeline and urgency
4. Mentions if I'm comparing options
5. Asks what's included in the price
6. Requests information about tiers or options
7. Asks about implementation time if relevant

Make it easy for them to give a complete quote.`,
    placeholders: [
      "VENDOR COMPANY",
      "CONTACT NAME if known",
      "WHAT I NEED",
      "SPECIFICATIONS",
      "WHEN I NEED IT",
      "CONTEXT - budget, urgency, etc.",
      "DECISION TIMELINE",
      "WHO ELSE IS INVOLVED",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "professional-requests",
    exampleOutput: "A clear, detailed request that enables accurate pricing and comparison.",
    customizationNotes: [
      "Be specific about requirements to avoid back-and-forth",
      "Mention your budget range if comfortable",
      "Ask about implementation/onboarding if relevant",
    ],
    tags: ["quote", "pricing", "vendor", "procurement"],
    order: 21,
  },

  {
    id: "speaker-request",
    title: "Speaker or Panelist Request",
    description: "Invite someone to speak at your event or on a panel.",
    promptText: `Write a request for someone to speak at an event.

Event details:
- Event name: [EVENT NAME]
- Date: [DATE]
- Location: [VENUE or PLATFORM]
- Expected audience: [AUDIENCE SIZE and TYPE]

Speaker:
- Name: [NAME]
- Why they're a great fit: [WHY THEM]
- Topic to speak on: [PROPOSED TOPIC]

My credibility:
- Organization: [WHO IS HOSTING]
- Past events: [CREDIBILITY or HISTORY]

What we offer:
- [SPEAKER BENEFITS - exposure, compensation, etc.]
- [LOGISTICS - travel, accommodation, etc.]

Write a request that:
1. Flatters them sincerely (why they're perfect)
2. Clearly outlines the event and audience
3. Specifies what we're asking (topic, duration)
4. Explains what's in it for them
5. Covers logistics upfront
6. Is respectful of their time
7. Makes it easy to say yes or ask questions`,
    placeholders: [
      "EVENT NAME",
      "DATE",
      "VENUE or PLATFORM",
      "AUDIENCE SIZE and TYPE",
      "NAME",
      "WHY THEM",
      "PROPOSED TOPIC",
      "WHO IS HOSTING",
      "CREDIBILITY or HISTORY",
      "SPEAKER BENEFITS - exposure, compensation, etc.",
      "LOGISTICS - travel, accommodation, etc.",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "professional-requests",
    exampleOutput: "A flattering, clear speaker invitation with event details and benefits.",
    customizationNotes: [
      "Research their speaking fees beforehand",
      "Offer flexibility on format and topic",
      "Follow up with a calendar invite if they agree",
    ],
    tags: ["speaker", "event", "panel", "invitation"],
    order: 22,
  },

  {
    id: "mentorship-request",
    title: "Mentorship Request",
    description: "Request someone to be your mentor or advisor.",
    promptText: `Write a request for mentorship.

Potential mentor:
- Name: [NAME]
- Why I admire them: [QUALITIES or ACHIEVEMENTS]
- How I know them: [CONNECTION]

Who I am:
- Background: [ABOUT ME]
- Goals: [WHAT I WANT TO ACHIEVE]
- Current stage: [WHERE I AM NOW]

What I'm seeking:
- Type of guidance: [WHAT HELP I NEED]
- Time commitment: [WHAT I'M ASKING - e.g., monthly call]
- Duration: [PROPOSED LENGTH]

What I bring:
- [MY COMMITMENT or QUALITIES]

Write a request that:
1. Shows genuine admiration and research
2. Is specific about what I'm seeking
3. Respects their time (ask for less than you hope)
4. Demonstrates my commitment
5. Makes it easy to say yes or no
6. Suggests a low-commitment trial
7. Expresses gratitude regardless

Don't ask for too much upfront.`,
    placeholders: [
      "NAME",
      "QUALITIES or ACHIEVEMENTS",
      "CONNECTION",
      "ABOUT ME",
      "WHAT I WANT TO ACHIEVE",
      "WHERE I AM NOW",
      "WHAT HELP I NEED",
      "WHAT I'M ASKING - e.g., monthly call",
      "PROPOSED LENGTH",
      "MY COMMITMENT or QUALITIES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "email-communication",
    categoryId: "professional-requests",
    exampleOutput: "A respectful mentorship request that shows preparation and commitment.",
    customizationNotes: [
      "Start with a one-time call before asking for ongoing mentorship",
      "Come prepared to every interaction",
      "Follow through on their advice and report back",
    ],
    tags: ["mentorship", "career", "guidance", "development"],
    order: 23,
  },

  // ============================================================================
  // DIFFICULT CONVERSATIONS
  // ============================================================================

  {
    id: "salary-negotiation-email",
    title: "Salary Negotiation Email",
    description: "Negotiate salary and compensation professionally.",
    promptText: `Write a salary negotiation email.

Offer context:
- Company: [COMPANY]
- Role: [POSITION]
- Offered salary: [OFFERED AMOUNT]
- Other compensation: [BENEFITS, EQUITY, etc.]

My research:
- Market rate: [RESEARCHED SALARY RANGE]
- My experience: [RELEVANT QUALIFICATIONS]
- Unique value: [WHAT I BRING]

My counter:
- Desired salary: [TARGET AMOUNT]
- Range if flexible: [RANGE]

Write a negotiation that:
1. Expresses gratitude for the offer
2. Shows enthusiasm for the role and company
3. Presents the counter professionally
4. Backs up the request with market data
5. Highlights my unique value
6. Is collaborative (not adversarial)
7. Leaves room for discussion
8. Suggests total compensation if salary is firm

Be confident but gracious.`,
    placeholders: [
      "COMPANY",
      "POSITION",
      "OFFERED AMOUNT",
      "BENEFITS, EQUITY, etc.",
      "RESEARCHED SALARY RANGE",
      "RELEVANT QUALIFICATIONS",
      "WHAT I BRING",
      "TARGET AMOUNT",
      "RANGE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "email-communication",
    categoryId: "difficult-conversations",
    exampleOutput: "A professional negotiation that justifies the ask with data and value.",
    customizationNotes: [
      "Research market rates for your location and experience",
      "Consider negotiating non-salary items if salary is fixed",
      "Practice this conversation - it may become a call",
    ],
    tags: ["salary", "negotiation", "compensation", "job-offer"],
    order: 24,
  },

  {
    id: "resignation-email",
    title: "Resignation Email",
    description: "Resign from a job professionally and gracefully.",
    promptText: `Write a professional resignation email.

Resignation details:
- Company: [COMPANY]
- Manager: [MANAGER NAME]
- Last day: [LAST WORKING DAY]
- Role: [POSITION]

My reason (optional):
- [REASON - keep it brief or say "personal reasons"]

My transition plan:
- [HANDOVER PLAN]
- [WILLINGNESS TO HELP]

Positive reflections:
- [WHAT I'VE APPRECIATED]
- [KEY LEARNINGS]

Write a resignation that:
1. Is clear and direct about resigning
2. States the last day explicitly
3. Expresses gratitude for the opportunity
4. Offers to help with transition
5. Maintains relationships
6. Is brief and professional
7. Avoids burning bridges
8. Doesn't over-explain the reason

Keep it classy - this email may be read years from now.`,
    placeholders: [
      "COMPANY",
      "MANAGER NAME",
      "LAST WORKING DAY",
      "POSITION",
      'REASON - keep it brief or say "personal reasons"',
      "HANDOVER PLAN",
      "WILLINGNESS TO HELP",
      "WHAT I'VE APPRECIATED",
      "KEY LEARNINGS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "difficult-conversations",
    exampleOutput: "A graceful, professional resignation that preserves relationships.",
    customizationNotes: [
      "Have a face-to-face conversation first if possible",
      "Prepare a transition document",
      "Connect on LinkedIn and offer to stay in touch",
    ],
    tags: ["resignation", "quitting", "career", "professional"],
    order: 25,
  },

  {
    id: "difficult-feedback-email",
    title: "Difficult Feedback Email",
    description: "Give constructive feedback on sensitive issues.",
    promptText: `Write an email giving difficult feedback.

Recipient:
- Name: [NAME]
- Relationship: [WORKING RELATIONSHIP]
- Context: [PROJECT or SITUATION]

The issue:
- What happened: [SPECIFIC BEHAVIOR or SITUATION]
- Impact: [HOW IT AFFECTED WORK/TEAM]
- Frequency: [ONE-TIME or ONGOING]

My goal:
- [DESIRED OUTCOME]

My approach:
- [HOW I WANT TO FRAME THIS]

Write feedback that:
1. Starts with positive intent
2. Is specific about the behavior (not the person)
3. Explains the impact clearly
4. Uses "I" statements to avoid blame
5. Focuses on the future (how to improve)
6. Asks for their perspective
7. Suggests a conversation to discuss
8. Maintains respect and relationship

Be direct but kind.`,
    placeholders: [
      "NAME",
      "WORKING RELATIONSHIP",
      "PROJECT or SITUATION",
      "SPECIFIC BEHAVIOR or SITUATION",
      "HOW IT AFFECTED WORK/TEAM",
      "ONE-TIME or ONGOING",
      "DESIRED OUTCOME",
      "HOW I WANT TO FRAME THIS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "email-communication",
    categoryId: "difficult-conversations",
    exampleOutput: "Direct but compassionate feedback that focuses on improvement.",
    customizationNotes: [
      "Consider if this should be a conversation instead of email",
      "Focus on behaviors, not character",
      "Offer to discuss in person for sensitive topics",
    ],
    tags: ["feedback", "difficult", "constructive", "performance"],
    order: 26,
  },

  {
    id: "apology-email-professional",
    title: "Professional Apology Email",
    description: "Apologize for mistakes professionally and sincerely.",
    promptText: `Write a professional apology email.

Situation:
- What happened: [THE MISTAKE]
- Who was affected: [IMPACTED PARTIES]
- How it happened: [CONTEXT - briefly]

Recipient:
- Name: [NAME]
- Relationship: [CLIENT/COLLEAGUE/BOSS]

My apology:
- What I'm sorry for: [SPECIFIC APOLOGY]
- [HOW I FEEL ABOUT IT]

The fix:
- Immediate action: [WHAT I'M DOING NOW]
- Long-term solution: [HOW I'LL PREVENT RECURRENCE]
- Compensation if applicable: [MAKING IT RIGHT]

Write an apology that:
1. Apologizes clearly and sincerely
2. Takes full responsibility (no excuses)
3. Acknowledges the impact on others
4. Outlines the fix clearly
5. Explains prevention
6. Offers to discuss further
7. Is concise and professional

No "buts" or qualifications - just own it.`,
    placeholders: [
      "THE MISTAKE",
      "IMPACTED PARTIES",
      "CONTEXT - briefly",
      "NAME",
      "CLIENT/COLLEAGUE/BOSS",
      "SPECIFIC APOLOGY",
      "HOW I FEEL ABOUT IT",
      "WHAT I'M DOING NOW",
      "HOW I'LL PREVENT RECURRENCE",
      "MAKING IT RIGHT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "difficult-conversations",
    exampleOutput: "A sincere, accountable apology with clear remediation steps.",
    customizationNotes: [
      "Apologize quickly - don't wait",
      "Don't make excuses or shift blame",
      "Follow through on your prevention plan",
    ],
    tags: ["apology", "mistake", "accountability", "professional"],
    order: 27,
  },

  {
    id: "decline-offer-email",
    title: "Decline Offer Email",
    description: "Decline a job offer or proposal gracefully.",
    promptText: `Write an email declining an offer.

Offer details:
- Company: [COMPANY]
- Role/Project: [WHAT WAS OFFERED]
- Person who made offer: [CONTACT NAME]

Why I'm declining:
- Main reason: [REASON - keep it brief]

What I appreciated:
- [WHAT I LIKED ABOUT THE OPPORTUNITY]

Future possibilities:
- [OPENNESS TO FUTURE OPPORTUNITIES]

Write a decline that:
1. Thanks them sincerely for the offer
2. Expresses gratitude for their time
3. Declines clearly but gracefully
4. Gives a brief, honest reason (optional)
5. Keeps the door open for future
6. Wishes them well
7. Maintains the relationship

Don't over-explain or justify extensively.`,
    placeholders: [
      "COMPANY",
      "WHAT WAS OFFERED",
      "CONTACT NAME",
      "REASON - keep it brief",
      "WHAT I LIKED ABOUT THE OPPORTUNITY",
      "OPENNESS TO FUTURE OPPORTUNITIES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "difficult-conversations",
    exampleOutput: "A gracious decline that preserves the relationship.",
    customizationNotes: [
      "Respond within 24-48 hours of receiving the offer",
      "Connect on LinkedIn to maintain the relationship",
      "Be honest but brief about your reason",
    ],
    tags: ["decline", "rejection", "job-offer", "professional"],
    order: 28,
  },

  {
    id: "bad-news-delivery",
    title: "Bad News Delivery Email",
    description: "Deliver difficult news professionally and compassionately.",
    promptText: `Write an email delivering difficult news.

Situation:
- What happened: [THE NEWS]
- Why it happened: [CONTEXT - if relevant]

Recipients:
- Who will receive this: [AUDIENCE]
- Impact on them: [HOW AFFECTED]

My approach:
- Tone: [DIRECT but COMPASSIONATE/EMPATHETIC]

Next steps:
- Immediate actions: [WHAT HAPPENS NOW]
- Resources/support: [AVAILABLE HELP]
- Timeline: [WHAT TO EXPECT]

Write the message that:
1. Delivers the news clearly and directly
2. Shows empathy for those affected
3. Provides necessary context
4. Outlines next steps clearly
5. Offers support or resources
6. Invites questions or discussion
7. Is honest but not brutal

Lead with the news, don't bury it.`,
    placeholders: [
      "THE NEWS",
      "CONTEXT - if relevant",
      "AUDIENCE",
      "HOW AFFECTED",
      "DIRECT but COMPASSIONATE/EMPATHETIC",
      "WHAT HAPPENS NOW",
      "AVAILABLE HELP",
      "WHAT TO EXPECT",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "email-communication",
    categoryId: "difficult-conversations",
    exampleOutput: "A compassionate but clear delivery of difficult news with next steps.",
    customizationNotes: [
      "Consider if this news requires a meeting instead",
      "Be available for follow-up conversations",
      "Provide resources for emotional support if appropriate",
    ],
    tags: ["bad-news", "difficult", "announcement", "compassion"],
    order: 29,
  },

  {
    id: "extension-request",
    title: "Deadline Extension Request",
    description: "Request more time on a project or deadline professionally.",
    promptText: `Write a request for a deadline extension.

Current situation:
- Project/Task: [WHAT'S DUE]
- Original deadline: [CURRENT DEADLINE]
- Why I need more time: [REASON]

My progress:
- What's done: [COMPLETED WORK]
- What remains: [REMAINING WORK]
- Estimated time needed: [HOW MUCH MORE TIME]

New proposal:
- Suggested deadline: [PROPOSED DATE]
- Why this works: [JUSTIFICATION]

My commitment:
- [QUALITY or DELIVERABLE COMMITMENT]

Write a request that:
1. Takes responsibility for the delay
2. Shows progress made so far
3. Explains the situation honestly
4. Proposes a specific new deadline
5. Justifies why the extension is needed
6. Commits to quality in the extra time
7. Asays how this won't happen again

Don't wait until the last minute - ask early.`,
    placeholders: [
      "WHAT'S DUE",
      "CURRENT DEADLINE",
      "REASON",
      "COMPLETED WORK",
      "REMAINING WORK",
      "HOW MUCH MORE TIME",
      "PROPOSED DATE",
      "JUSTIFICATION",
      "QUALITY or DELIVERABLE COMMITMENT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "difficult-conversations",
    exampleOutput: "A professional extension request with clear justification and commitment.",
    customizationNotes: [
      "Ask as soon as you know you'll need more time",
      "Show significant progress before asking",
      "Propose a specific date, not an open extension",
    ],
    tags: ["deadline", "extension", "request", "project"],
    order: 30,
  },

  // ============================================================================
  // TEAM COMMUNICATION
  // ============================================================================

  {
    id: "team-announcement-email",
    title: "Team Announcement Email",
    description: "Make important announcements to your team clearly.",
    promptText: `Write a team announcement email.

Announcement:
- What's happening: [THE NEWS]
- Why it matters: [SIGNIFICANCE]
- When it takes effect: [TIMING]

Recipients:
- Team: [WHO'S RECEIVING THIS]
- Context: [TEAM SITUATION]

Impact on team:
- What changes: [WHAT'S DIFFERENT]
- What stays the same: [WHAT'S UNCHANGED]
- What they need to do: [ACTIONS REQUIRED]

Resources:
- [LINKS or ATTACHMENTS]

Q&A:
- [HOW TO GET QUESTIONS ANSWERED]

Write an announcement that:
1. Is clear about what's happening
2. Explains why it matters
3. Specifies when changes take effect
4. Addresses impact on the team
5. Lists required actions clearly
6. Provides resources for more info
7. Invites questions and feedback

Be transparent and complete.`,
    placeholders: [
      "THE NEWS",
      "SIGNIFICANCE",
      "TIMING",
      "WHO'S RECEIVING THIS",
      "TEAM SITUATION",
      "WHAT'S DIFFERENT",
      "WHAT'S UNCHANGED",
      "ACTIONS REQUIRED",
      "LINKS or ATTACHMENTS",
      "HOW TO GET QUESTIONS ANSWERED",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "team-communication",
    exampleOutput: "A clear, complete announcement that addresses team concerns.",
    customizationNotes: [
      "Consider sensitive information and timing",
      "Schedule announcements to avoid busy periods",
      "Follow up with a Q&A session for major changes",
    ],
    tags: ["announcement", "team", "change", "communication"],
    order: 31,
  },

  {
    id: "project-status-update",
    title: "Project Status Update",
    description: "Share project progress with stakeholders and team.",
    promptText: `Write a project status update.

Project:
- Name: [PROJECT NAME]
- Status: [ON TRACK/AT RISK/DELAYED]
- Timeline: [WEEK/MONTH/PHASE]

Progress:
- Completed this period: [ACCOMPLISHMENTS]
- In progress: [CURRENT WORK]
- Up next: [NEXT STEPS]

Challenges:
- Blockers: [OBSTACLES]
- Help needed: [SUPPORT REQUIRED]

Metrics:
- Key numbers: [IMPORTANT METRICS]

Write a status update that:
1. Is visual and scannable (use formatting)
2. Highlights key accomplishments
3. Flags risks or blockers clearly
4. Requests specific help if needed
5. Provides context for metrics
6. Is honest about status
7. Sets expectations for next period

Use a consistent format for regular updates.`,
    placeholders: [
      "PROJECT NAME",
      "ON TRACK/AT RISK/DELAYED",
      "WEEK/MONTH/PHASE",
      "ACCOMPLISHMENTS",
      "CURRENT WORK",
      "NEXT STEPS",
      "OBSTACLES",
      "SUPPORT REQUIRED",
      "IMPORTANT METRICS",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "team-communication",
    exampleOutput: "A scannable status update with clear progress, risks, and next steps.",
    customizationNotes: [
      "Use emoji or formatting for visual scanning",
      "Keep the same format for consistency",
      "Attach screenshots or dashboards if relevant",
    ],
    tags: ["status-update", "project", "stakeholders", "progress"],
    order: 32,
  },

  {
    id: "team-feedback-request",
    title: "Team Feedback Request",
    description: "Request feedback from your team effectively.",
    promptText: `Write a request for team feedback.

Feedback context:
- What I want feedback on: [TOPIC or PROJECT]
- Purpose: [HOW I'LL USE IT]
- Timeline: [WHEN NEEDED]

What I'm looking for:
- Specific areas: [WHAT FEEDBACK I NEED]
- Questions to consider: [PROMPT QUESTIONS]

My commitment:
- [HOW I'LL RESPOND to FEEDBACK]

Anonymity:
- [ANONYMOUS or ATTRIBUTED]

Write a request that:
1. States clearly what feedback I need
2. Explains how it will be used
3. Asks specific, actionable questions
4. Creates psychological safety
5. Commits to acting on feedback
6. Specifies if it's anonymous
7. Expresses genuine appreciation
8. Makes it easy to respond

Show you're open to honest feedback.`,
    placeholders: [
      "TOPIC or PROJECT",
      "HOW I'LL USE IT",
      "WHEN NEEDED",
      "WHAT FEEDBACK I NEED",
      "PROMPT QUESTIONS",
      "HOW I'LL RESPOND to FEEDBACK",
      "ANONYMOUS or ATTRIBUTED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "team-communication",
    exampleOutput: "A genuine feedback request that creates safety and specificity.",
    customizationNotes: [
      "Use anonymous forms for sensitive topics",
      "Share results and actions taken afterward",
      "Don't get defensive - thank people for honesty",
    ],
    tags: ["feedback", "team", "improvement", "questions"],
    order: 33,
  },

  {
    id: "delegation-email",
    title: "Delegation Assignment Email",
    description: "Delegate tasks clearly and effectively.",
    promptText: `Write a delegation email.

Task details:
- What needs doing: [TASK DESCRIPTION]
- Why it's important: [CONTEXT and IMPORTANCE]
- Deadline: [WHEN DUE]

Recipient:
- Name: [NAME]
- Their role: [THEIR POSITION]

Resources:
- What they need: [MATERIALS, ACCESS, INFO]
- Support available: [WHO CAN HELP]

Success criteria:
- What done looks like: [COMPLETION STANDARDS]
- How it will be reviewed: [REVIEW PROCESS]

Authority level:
- Decision scope: [WHAT THEY CAN DECIDE]
- Escalation path: [WHEN TO CHECK IN]

Write a delegation that:
1. Is crystal clear about the task
2. Explains why it matters
3. Sets clear expectations and deadline
4. Provides necessary resources
5. Defines their authority level
6. Specifies how to get help
7. Establishes review process
8. Expresses confidence

Give ownership, not just tasks.`,
    placeholders: [
      "TASK DESCRIPTION",
      "CONTEXT and IMPORTANCE",
      "WHEN DUE",
      "NAME",
      "THEIR POSITION",
      "MATERIALS, ACCESS, INFO",
      "WHO CAN HELP",
      "COMPLETION STANDARDS",
      "REVIEW PROCESS",
      "WHAT THEY CAN DECIDE",
      "WHEN TO CHECK IN",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "team-communication",
    exampleOutput: "A clear delegation with authority, resources, and expectations defined.",
    customizationNotes: [
      "Match the task to their capabilities and growth goals",
      "Provide enough authority to complete the task",
      "Schedule check-ins without micromanaging",
    ],
    tags: ["delegation", "assignment", "task", "management"],
    order: 34,
  },

  {
    id: "team-meeting-recap",
    title: "Team Meeting Recap",
    description: "Summarize team meetings with action items.",
    promptText: `Write a meeting recap email.

Meeting details:
- Meeting: [MEETING NAME]
- Date: [DATE]
- Attendees: [WHO WAS THERE]

Key decisions:
- [DECISION 1]
- [DECISION 2]
- [DECISION 3]

Discussion highlights:
- [MAIN POINTS DISCUSSED]

Action items:
- [TASK] - [OWNER] - [DUE DATE]
- [TASK] - [OWNER] - [DUE DATE]
- [TASK] - [OWNER] - [DUE DATE]

Next steps:
- [WHAT HAPPENS NEXT]

Next meeting:
- [DATE/TIME]

Write a recap that:
1. Is scannable with clear sections
2. Captures key decisions explicitly
3. Lists action items with owners and dates
4. Includes relevant context only
5. Sets up next steps clearly
6. Gets sent within 24 hours

Be brief but complete - people use this for reference.`,
    placeholders: [
      "MEETING NAME",
      "DATE",
      "WHO WAS THERE",
      "DECISION 1",
      "DECISION 2",
      "DECISION 3",
      "MAIN POINTS DISCUSSED",
      "TASK",
      "OWNER",
      "DUE DATE",
      "WHAT HAPPENS NEXT",
      "DATE/TIME",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "team-communication",
    exampleOutput: "A scannable meeting recap with decisions, action items, and next steps.",
    customizationNotes: [
      "Use bolding for action items and deadlines",
      "Include links to related documents",
      "Send same-day for best retention",
    ],
    tags: ["meeting", "recap", "action-items", "summary"],
    order: 35,
  },

  {
    id: "conflict-resolution-initiation",
    title: "Conflict Resolution Initiation",
    description: "Initiate a conversation to resolve team conflict.",
    promptText: `Write an email to address conflict with a colleague.

Situation:
- The issue: [WHAT'S WRONG - OBJECTIVELY]
- Recent example: [SPECIFIC INCIDENT]
- Impact: [HOW IT'S AFFECTING WORK]

Recipient:
- Name: [NAME]
- Relationship: [WORKING RELATIONSHIP]

My perspective:
- [MY VIEW - use "I" statements]
- [MY CONCERNS]

My goal:
- [DESIRED OUTCOME]

Write a message that:
1. Focuses on the issue, not the person
2. Uses "I" statements to avoid blame
3. References specific situations objectively
4. Explains the impact on work
5. Seeks to understand their perspective
6. Proposes a conversation to resolve
7. Assumes positive intent

Keep it professional and solution-focused.`,
    placeholders: [
      "WHAT'S WRONG - OBJECTIVELY",
      "SPECIFIC INCIDENT",
      "HOW IT'S AFFECTING WORK",
      "NAME",
      "WORKING RELATIONSHIP",
      'MY VIEW - use "I" statements',
      "MY CONCERNS",
      "DESIRED OUTCOME",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "email-communication",
    categoryId: "team-communication",
    exampleOutput: "A professional conflict initiation that focuses on resolution, not blame.",
    customizationNotes: [
      "Consider if this should be face-to-face instead",
      "Focus on work impact, not personality",
      "Come with curiosity, not accusations",
    ],
    tags: ["conflict", "resolution", "difficult", "professional"],
    order: 36,
  },

  {
    id: "recognition-appreciation-email",
    title: "Team Recognition Email",
    description: "Recognize and appreciate team members publicly.",
    promptText: `Write a recognition email for a team member.

Person being recognized:
- Name: [NAME]
- Role: [THEIR POSITION]

What they did:
- Achievement: [SPECIFIC ACCOMPLISHMENT]
- Impact: [HOW IT HELPED]
- Context: [WHY IT MATTERED]

Why it's exceptional:
- [WHAT MAKES THIS SPECIAL]

Their qualities:
- [TRAITS or BEHAVIORS TO HIGHLIGHT]

Audience:
- Who will see this: [TEAM/COMPANY/LEADERSHIP]

Write recognition that:
1. Is specific about what they did
2. Explains the impact clearly
3. Connects to team/company values
4. Highlights the qualities behind the work
5. Is sincere and authentic
6. Is public when appropriate
7. Encourages others to celebrate

Be specific - vague praise feels hollow.`,
    placeholders: [
      "NAME",
      "THEIR POSITION",
      "SPECIFIC ACCOMPLISHMENT",
      "HOW IT HELPED",
      "WHY IT MATTERED",
      "WHAT MAKES THIS SPECIAL",
      "TRAITS or BEHAVIORS TO HIGHLIGHT",
      "TEAM/COMPANY/LEADERSHIP",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "team-communication",
    exampleOutput: "A sincere, specific recognition that celebrates the person and their impact.",
    customizationNotes: [
      "Copy their manager for extra visibility",
      "Time it for when they need a boost",
      "Consider if they prefer public or private recognition",
    ],
    tags: ["recognition", "appreciation", "praise", "team"],
    order: 37,
  },

  {
    id: "remote-team-check-in",
    title: "Remote Team Check-in",
    description: "Check in on remote team members' wellbeing.",
    promptText: `Write a check-in email for remote team members.

Context:
- Team situation: [TEAM CONTEXT]
- Recent changes: [ANY CHALLENGES or CHANGES]
- Timeframe: [HOW LONG SINCE LAST CHECK-IN]

My intent:
- Focus: [WELLBEING/WORK/BOTH]

What I want to know:
- [SPECIFIC CONCERNS or TOPICS]

What I'm offering:
- Support: [HOW I CAN HELP]

Write a check-in that:
1. Is genuine about their wellbeing
2. Asks how they're doing personally
3. Checks on work challenges
4. Asks what support they need
5. Is not about productivity or monitoring
6. Creates space for honest responses
7. Follows up meaningfully

Show you care about them as people.`,
    placeholders: [
      "TEAM CONTEXT",
      "ANY CHALLENGES or CHANGES",
      "HOW LONG SINCE LAST CHECK-IN",
      "WELLBEING/WORK/BOTH",
      "SPECIFIC CONCERNS or TOPICS",
      "HOW I CAN HELP",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "team-communication",
    exampleOutput: "A caring check-in that prioritizes wellbeing over productivity.",
    customizationNotes: [
      "Regular check-ins build trust - don't wait for crises",
      "Share your own challenges to create safety",
      "Follow up on what they share",
    ],
    tags: ["remote", "check-in", "wellbeing", "team"],
    order: 38,
  },

  // ============================================================================
  // CUSTOMER COMMUNICATION
  // ============================================================================

  {
    id: "customer-onboarding-email",
    title: "Customer Onboarding Email",
    description: "Welcome new customers and guide them to success.",
    promptText: `Write a customer onboarding email sequence.

New customer:
- Name: [CUSTOMER NAME]
- Company: [COMPANY]
- Plan/Product: [WHAT THEY PURCHASED]

Their goal:
- What they want to achieve: [THEIR OBJECTIVE]
- Use case: [HOW THEY'LL USE IT]

Onboarding context:
- First step: [GETTING STARTED ACTION]
- Resources available: [HELPFUL LINKS/DOCS]
- Support contact: [HOW TO GET HELP]

Success metrics:
- What success looks like: [DESIRED OUTCOME]
- Time to value: [WHEN THEY'LL SEE BENEFITS]

Write an onboarding email that:
1. Welcomes them warmly and personally
2. Congratulates them on their decision
3. Sets clear expectations for getting started
4. Provides 2-3 specific first steps
5. Links to key resources
6. Makes support easy to access
7. Paints a picture of success
8. Feels like having a guide

Make them excited and confident.`,
    placeholders: [
      "CUSTOMER NAME",
      "COMPANY",
      "WHAT THEY PURCHASED",
      "THEIR OBJECTIVE",
      "HOW THEY'LL USE IT",
      "GETTING STARTED ACTION",
      "HELPFUL LINKS/DOCS",
      "HOW TO GET HELP",
      "DESIRED OUTCOME",
      "WHEN THEY'LL SEE BENEFITS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "customer-comms",
    exampleOutput: "A warm, actionable onboarding that guides customers to their first win.",
    customizationNotes: [
      "Send within 1 hour of purchase/sign-up",
      'Focus on their first "aha moment"',
      "Include a simple onboarding checklist",
    ],
    tags: ["onboarding", "welcome", "customer-success", "getting-started"],
    order: 39,
  },

  {
    id: "customer-support-response",
    title: "Customer Support Response",
    description: "Respond to customer inquiries helpfully and professionally.",
    promptText: `Write a customer support response.

Customer inquiry:
- Their issue: [WHAT THEY NEED HELP WITH]
- Their emotion: [FRUSTRATED/CONFUSED/CURIOUS]
- Context: [ADDITIONAL CONTEXT]

Product/Situation:
- What happened: [THE PROBLEM]
- Cause (if known): [WHY IT HAPPENED]

The solution:
- Fix: [HOW TO RESOLVE]
- Steps: [SPECIFIC INSTRUCTIONS]

Follow-up:
- Prevention: [HOW TO AVOID THIS]
- Additional resources: [HELPFUL LINKS]

Write a response that:
1. Empathizes with their frustration
2. Explains what happened clearly
3. Provides a step-by-step solution
4. Includes visuals or examples if helpful
5. Prevents future occurrences
6. Offers additional help
7. Ends positively

Make them feel heard and helped.`,
    placeholders: [
      "WHAT THEY NEED HELP WITH",
      "FRUSTRATED/CONFUSED/CURIOUS",
      "ADDITIONAL CONTEXT",
      "THE PROBLEM",
      "WHY IT HAPPENED",
      "HOW TO RESOLVE",
      "SPECIFIC INSTRUCTIONS",
      "HOW TO AVOID THIS",
      "HELPFUL LINKS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "customer-comms",
    exampleOutput: "An empathetic, clear solution that makes customers feel cared for.",
    customizationNotes: [
      "Match their tone - mirror their emotion but positive",
      "Use screenshots or videos for complex issues",
      "Follow up to ensure the issue is resolved",
    ],
    tags: ["support", "help", "response", "service"],
    order: 40,
  },

  {
    id: "customer-apology-compensation",
    title: "Service Failure Apology",
    description: "Apologize for service failures and offer compensation.",
    promptText: `Write a service failure apology email.

What happened:
- The issue: [WHAT WENT WRONG]
- Impact: [HOW IT AFFECTED CUSTOMERS]
- Cause: [WHY IT HAPPENED]
- Resolution: [CURRENT STATUS]

Affected customer:
- Name: [CUSTOMER NAME]
- Specific impact: [HOW THEY WERE AFFECTED]
- Duration: [HOW LONG THEY WERE AFFECTED]

Compensation:
- What we're offering: [MAKE-GOOD]
- Why: [JUSTIFICATION]

Prevention:
- [HOW WE'LL PREVENT THIS]

Write an apology that:
1. Apologizes sincerely without excuses
2. Takes full responsibility
3. Explains what happened and why
4. Shows the current status
5. Offers meaningful compensation
6. Explains prevention steps
7. Reaffirms commitment to them

Own the problem completely.`,
    placeholders: [
      "WHAT WENT WRONG",
      "HOW IT AFFECTED CUSTOMERS",
      "WHY IT HAPPENED",
      "CURRENT STATUS",
      "CUSTOMER NAME",
      "HOW THEY WERE AFFECTED",
      "HOW LONG THEY WERE AFFECTED",
      "MAKE-GOOD",
      "JUSTIFICATION",
      "HOW WE'LL PREVENT THIS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "email-communication",
    categoryId: "customer-comms",
    exampleOutput: "A sincere, accountable apology with meaningful compensation.",
    customizationNotes: [
      "Respond quickly - every minute matters",
      "Match compensation to the impact level",
      "Share post-mortem findings to build trust",
    ],
    tags: ["apology", "service-failure", "compensation", "accountability"],
    order: 41,
  },

  {
    id: "customer-churn-prevention",
    title: "Churn Prevention Email",
    description: "Reach out to at-risk customers to prevent cancellation.",
    promptText: `Write a churn prevention email.

Customer context:
- Name: [CUSTOMER NAME]
- Company: [COMPANY]
- Plan: [THEIR PLAN]
- Tenure: [HOW LONG THEY'VE BEEN A CUSTOMER]

Risk indicators:
- Why they might leave: [CHURN REASONS]
- Last activity: [WHEN THEY LAST ENGAGED]
- Usage level: [CURRENT USAGE]

My offer:
- Incentive: [WHAT I CAN OFFER]
- Alternative: [OTHER SOLUTIONS]

Success story:
- [SIMILAR CUSTOMER EXAMPLE]

Write an outreach that:
1. Acknowledges they've been quiet
2. Shows genuine concern about their success
3. Asks what would make things better
4. Offers specific help or incentives
5. Shares a relevant success story
6. Makes it easy to respond honestly
7. Is not desperate but genuinely caring

Focus on their success, not your retention.`,
    placeholders: [
      "CUSTOMER NAME",
      "COMPANY",
      "THEIR PLAN",
      "HOW LONG THEY'VE BEEN A CUSTOMER",
      "CHURN REASNS",
      "WHEN THEY LAST ENGAGED",
      "CURRENT USAGE",
      "WHAT I CAN OFFER",
      "OTHER SOLUTIONS",
      "SIMILAR CUSTOMER EXAMPLE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "email-communication",
    categoryId: "customer-comms",
    exampleOutput: "A caring outreach that focuses on customer success over retention.",
    customizationNotes: [
      "Reach out before they cancel - watch usage patterns",
      "Offer alternatives to cancellation (downgrade, pause)",
      "Share ROI data they may have forgotten",
    ],
    tags: ["churn", "retention", "prevention", "customer-success"],
    order: 42,
  },

  {
    id: "customer-upgrade-opportunity",
    title: "Upgrade Opportunity Email",
    description: "Present upgrade opportunities to existing customers.",
    promptText: `Write an upgrade opportunity email.

Customer:
- Name: [CUSTOMER NAME]
- Current plan: [THEIR CURRENT PLAN]
- Usage patterns: [HOW THEY USE IT]
- Tenure: [HOW LONG THEY'VE BEEN CUSTOMER]

Upgrade opportunity:
- What's available: [UPGRADE OPTION]
- Additional features: [WHAT THEY GET]
- Additional value: [WHY IT MATTERS]

Why now:
- Timeliness: [WHY THIS MOMENT]
- Limited offer: [URGENCY if any]

Their benefit:
- ROI calculation: [VALUE THEY GAIN]
- Use case: [HOW THEY'D USE NEW FEATURES]

Write an email that:
1. Recognizes their current success
2. Identifies a gap or opportunity
3. Presents the upgrade as a solution
4. Quantifies the value clearly
5. Shows how it addresses their needs
6. Creates relevant urgency
7. Makes it easy to upgrade

Focus on their expanded success, not upselling.`,
    placeholders: [
      "CUSTOMER NAME",
      "THEIR CURRENT PLAN",
      "HOW THEY USE IT",
      "HOW LONG THEY'VE BEEN CUSTOMER",
      "UPGRADE OPTION",
      "WHAT THEY GET",
      "WHY IT MATTERS",
      "WHY THIS MOMENT",
      "URGENCY if any",
      "VALUE THEY GAIN",
      "HOW THEY'D USE NEW FEATURES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "customer-comms",
    exampleOutput: "A value-focused upgrade pitch that shows expanded success.",
    customizationNotes: [
      "Time with product usage or milestones",
      "Offer a trial or demo of premium features",
      "Social proof from similar customers helps",
    ],
    tags: ["upgrade", "upsell", "expansion", "revenue"],
    order: 43,
  },

  {
    id: "customer-feedback-request",
    title: "Customer Feedback Request",
    description: "Request valuable feedback from satisfied customers.",
    promptText: `Write a customer feedback request email.

Customer:
- Name: [CUSTOMER NAME]
- Company: [COMPANY]
- How long they've been a customer: [TENURE]
- Recent positive interaction: [GOOD EXPERIENCE]

Feedback context:
- What feedback I want: [SPECIFIC AREA]
- How I'll use it: [PURPOSE]
- Time required: [ESTIMATED TIME]

Incentive:
- [WHAT THEY GET FOR PARTICIPATING]

Write a request that:
1. Thanks them for being a customer
2. References a positive interaction
3. Explains why their feedback matters
4. Specifies what I'm asking for
5. Respects their time (keep it short)
6. Offers something in return
7. Makes it easy to respond

Show you value their opinion, not just their data.`,
    placeholders: [
      "CUSTOMER NAME",
      "COMPANY",
      "TENURE",
      "GOOD EXPERIENCE",
      "SPECIFIC AREA",
      "PURPOSE",
      "ESTIMATED TIME",
      "WHAT THEY GET FOR PARTICIPATING",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "email-communication",
    categoryId: "customer-comms",
    exampleOutput: "A respectful feedback request that shows genuine interest.",
    customizationNotes: [
      "Ask right after a positive interaction",
      "Keep surveys under 5 minutes",
      "Share how you used their feedback afterward",
    ],
    tags: ["feedback", "survey", "testimonial", "voice-of-customer"],
    order: 44,
  },

  {
    id: "customer-renewal-reminder",
    title: "Renewal Reminder Email",
    description: "Remind customers about upcoming renewals and reinforce value.",
    promptText: `Write a renewal reminder email.

Customer:
- Name: [CUSTOMER NAME]
- Company: [COMPANY]
- Current plan: [THEIR PLAN]
- Renewal date: [WHEN IT RENEWS]

Their success:
- Key achievements: [WHAT THEY'VE ACCOMPLISHED]
- Metrics: [THEIR USAGE or ROI]
- Features used: [WHAT THEY USE MOST]

Renewal details:
- Action needed: [WHAT THEY NEED TO DO]
- Price: [RENEWAL COST]
- Changes: [ANY UPDATES]

My support:
- [HELP AVAILABLE]

Write a reminder that:
1. Reminds them of the renewal date
2. Highlights their success this year
3. Shows concrete value they've received
4. Outlines any changes or actions needed
5. Offers to discuss their future needs
6. Makes renewal easy
7. Expresses appreciation for their business

Focus on value received, not payment due.`,
    placeholders: [
      "CUSTOMER NAME",
      "COMPANY",
      "THEIR PLAN",
      "WHEN IT RENEWS",
      "WHAT THEY'VE ACCOMPLISHED",
      "THEIR USAGE or ROI",
      "WHAT THEY USE MOST",
      "WHAT THEY NEED TO DO",
      "RENEWAL COST",
      "ANY UPDATES",
      "HELP AVAILABLE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "email-communication",
    categoryId: "customer-comms",
    exampleOutput: "A value-focused renewal reminder that reinforces the partnership.",
    customizationNotes: [
      "Send 30, 14, and 3 days before renewal",
      "Include a year-in-review of their success",
      "Offer a renewal discount or bonus for early action",
    ],
    tags: ["renewal", "retention", "value", "customer-success"],
    order: 45,
  },
];
