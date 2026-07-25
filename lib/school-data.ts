// Local knowledge base for Shashi Madan Public School, Chandausi.
// Built from the content on smpschandausi.com — no external API required.
// Each entry has keywords to match against the user's question, and an answer to return.

type KnowledgeEntry = {
  id: string
  keywords: string[]
  answer: string
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    id: 'about',
    keywords: [
      'about', 'school', 'who are you', 'smps', 'shashi madan', 'foundation',
      'history', 'started', 'm.p. singh', 'mp singh',
    ],
    answer:
      "Shashi Madan Public School (SMPS) is run by the M.P. Singh Foundation, a registered non-profit charitable trust. The foundation was established in 2002 and also runs Delhi Public School, Meerut (with branches at Baghpat Road and Daurala). It promotes and manages educational institutions without any discrimination of caste, colour or creed.",
  },
  {
    id: 'vision',
    keywords: ['vision', 'goal', 'aim', 'purpose'],
    answer:
      "Our vision is to create an inclusive community of empowered lifelong learners, where every member is driven towards building a better future for themselves and the world, in a field of their choice.",
  },
  {
    id: 'mission',
    keywords: ['mission', 'objective'],
    answer:
      "Our mission is to foster critical thinking, encourage creativity, and provide opportunities for collaboration and open communication — backed by robust infrastructure for learning across different areas of academics.",
  },
  {
    id: 'values',
    keywords: ['values', 'principles', 'culture'],
    answer:
      "Our core values are: Principled, Inclusive, Growth, and Service.",
  },
  {
    id: 'admissions',
    keywords: [
      'admission', 'admissions', 'apply', 'enroll', 'enrollment', 'registration',
      'register', 'join', 'form', 'seat',
    ],
    answer:
      "Registration for 2026-27 is open! You can apply online through the official registration form at smpschandausi.com/online-forms/registration. For specific queries about the admission process, timelines, or documents needed, it's best to call the school directly at +91-9258159506.",
  },
  {
    id: 'facilities',
    keywords: [
      'facility', 'facilities', 'campus', 'infrastructure', 'lab', 'library',
      'ground', 'classroom', 'building',
    ],
    answer:
      "Our 10-acre campus includes a Science Lab, Math Lab, Computer Lab, Library, Activity Room, spacious classrooms, a Conference Room, and a large green campus with a football ground — all designed with a focus on real-world, hands-on learning.",
  },
  {
    id: 'sports',
    keywords: [
      'sport', 'sports', 'games', 'cricket', 'basketball', 'chess', 'skating',
      'football', 'kho kho', 'table tennis', 'carrom', 'extracurricular',
    ],
    answer:
      "We offer a wide range of sports and games: Cricket, Football, Basketball, Kho-Kho, Skating, Chess, Table Tennis, and Carrom, along with dance and other activity programs — all supported by our dedicated sports facilities.",
  },
  {
    id: 'leadership',
    keywords: [
      'leadership', 'chairman', 'chairperson', 'director', 'promoter', 'founder',
      'management', 'principal', 'head',
    ],
    answer:
      "The school is guided by: Mr. M.P. Singh (Founder Chairman), Mrs. Shashi Singh (Chairperson), and Mr. Atul Kumar Singh (Managing Director) of the M.P. Singh Foundation.",
  },
  {
    id: 'affiliates',
    keywords: ['affiliate', 'affiliated', 'sister school', 'related school', 'dps'],
    answer:
      "SMPS Chandausi is affiliated with Delhi Public School, Dehradun, Delhi Public School, Meerut, and Shashi Madan Public School, Daurala — all under the M.P. Singh Foundation.",
  },
  {
    id: 'contact',
    keywords: [
      'contact', 'phone', 'number', 'call', 'email', 'address', 'location',
      'where', 'reach', 'directions',
    ],
    answer:
      "You can reach us at:\n📍 SM Education City, Shiv Shakti Nagar, NH-509, Chandausi, Sambhal – 244414\n📞 +91-9258159506\n✉️ info@smpschandausi.com\n🌐 smpschandausi.com",
  },
  {
    id: 'timings',
    keywords: ['timing', 'timings', 'time', 'hours', 'schedule', 'open', 'closing'],
    answer:
      "For exact school timings, it's best to confirm directly with the school office at +91-9258159506, as timings can vary by grade and season.",
  },
  {
    id: 'fees',
    keywords: ['fee', 'fees', 'cost', 'price', 'tuition', 'payment'],
    answer:
      "For detailed fee structure information, please contact the school office directly at +91-9258159506 or info@smpschandausi.com, as fees vary by grade level.",
  },
  {
    id: 'career',
    keywords: ['career', 'job', 'vacancy', 'hiring', 'teacher job', 'work here', 'employment'],
    answer:
      "We're often hiring! You can check current openings and apply through the Recruitment Form on our official website (smpschandausi.com/hiring), or email career@smpschandausi.com.",
  },
  {
    id: 'social',
    keywords: ['facebook', 'instagram', 'twitter', 'social media', 'follow'],
    answer:
      "You can follow SMPS Chandausi on Facebook, Instagram, and Twitter — links are available in the footer of our website, smpschandausi.com.",
  },
]

const GREETINGS = ['hi', 'hello', 'hey', 'namaste', 'hii', 'helo']

const FALLBACK =
  "I don't have an exact answer for that yet, but I can help with admissions, facilities, sports, fees, contact info, and more about Shashi Madan Public School. You can also call the school directly at +91-9258159506 for anything specific."

const GREETING_REPLY =
  "Hello! 👋 I'm the SMPS Chandausi assistant. Ask me about admissions, facilities, sports, fees, or contact details."

function normalize(text: string): string {
  return text.toLowerCase().trim()
}

/**
 * Scores each knowledge base entry by counting how many of its keywords
 * appear in the user's question, and returns the best match.
 * This runs entirely in the browser — no API calls, no cost.
 */
export function getAnswer(question: string): string {
  const q = normalize(question)

  if (GREETINGS.some((g) => q === g || q.startsWith(g + ' ') || q.startsWith(g + '!'))) {
    return GREETING_REPLY
  }

  let bestMatch: KnowledgeEntry | null = null
  let bestScore = 0

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0
    for (const keyword of entry.keywords) {
      if (q.includes(keyword)) {
        score += keyword.split(' ').length // multi-word keywords count more
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = entry
    }
  }

  return bestMatch ? bestMatch.answer : FALLBACK
}
