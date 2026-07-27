import heroStudents from "@/assets/hero-students.jpg";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryActivities from "@/assets/gallery-activities.jpg";
import galleryPrize from "@/assets/gallery-prize.jpg";
import galleryAnnual from "@/assets/gallery-annual.jpg";
import galleryEvents from "@/assets/gallery-events.jpg";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";

export const academy = {
  name: "Paradeshi Academy",
  short: "PA",
  tagline: "Our Effort, Your Result.",
  phone: "+91 73047 73704",
  phoneRaw: "+917304773704",
  whatsapp: "917304773704",
  email: "pardeshiacademy01@gmail.com",
  instagram: "https://instagram.com/pardeshiacademy_01",
  instagramHandle: "@pardeshiacademy_01",
  addressLines: [
    "Shop No. 9, Labh Aspire, Plot No. 162",
    "Sector 4, Opp. HDFC Bank, Near Lenskart",
    "Karanjade, Panvel (W)",
    "Maharashtra - 410206",
  ],
  mapQuery: "Labh Aspire, Sector 4, Karanjade, Panvel West, Maharashtra 410206",
  hours: "Mon – Sat · 8:00 AM – 8:00 PM",
  heroImage: heroStudents,
};

export const stats = [
  { value: 1000, suffix: "+", label: "Students" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 20, suffix: "+", label: "Experienced Teachers" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
];

export const courses = [
  {
    slug: "nursery",
    icon: "Baby",
    title: "Nursery",
    age: "Age 3+",
    description:
      "A joyful first step into learning with play-based phonics, motor skills and storytelling in a safe, caring space.",
    highlights: ["Play-based learning", "Phonics & rhymes", "Motor skill activities"],
  },
  {
    slug: "jr-kg",
    icon: "Blocks",
    title: "Jr KG",
    age: "Age 4+",
    description:
      "Structured foundation in letters, numbers and language confidence through activity-led daily sessions.",
    highlights: ["Letter & number sense", "Speech confidence", "Creative activities"],
  },
  {
    slug: "sr-kg",
    icon: "Pencil",
    title: "Sr KG",
    age: "Age 5+",
    description:
      "School readiness programme building reading, writing and early maths with gentle assessment.",
    highlights: ["Reading & writing", "Early mathematics", "School readiness"],
  },
  {
    slug: "school",
    icon: "BookOpen",
    title: "School Section",
    age: "1st to 10th Std",
    description:
      "Concept-first coaching for all boards with regular tests, doubt sessions and weekly progress tracking.",
    highlights: ["All boards covered", "Weekly tests", "Board exam mastery"],
  },
  {
    slug: "commerce",
    icon: "LineChart",
    title: "Commerce",
    age: "11th to 12th",
    description:
      "Accounts, Economics, OCM, SP and Maths taught by specialists with exam-oriented practice and CA foundation guidance.",
    highlights: ["Specialist faculty", "Exam-oriented notes", "CA / CS guidance"],
  },
];

export const whyChooseUs = [
  { icon: "GraduationCap", title: "Experienced Teachers", text: "Subject specialists with years of classroom results behind them." },
  { icon: "UserCheck", title: "Personal Attention", text: "Every student is known by name, strength and weakness." },
  { icon: "ClipboardCheck", title: "Regular Tests", text: "Weekly and monthly assessments modelled on board patterns." },
  { icon: "Users", title: "Small Batches", text: "Limited seats per batch so no doubt goes unanswered." },
  { icon: "Wallet", title: "Affordable Fees", text: "Transparent, instalment-friendly fee structure for every family." },
  { icon: "MessageCircleQuestion", title: "Doubt Solving Sessions", text: "Dedicated daily slots for one-on-one doubt clearing." },
  { icon: "TrendingUp", title: "Weekly Progress Tracking", text: "Parents receive clear weekly reports on performance." },
  { icon: "ShieldCheck", title: "Safe Learning Environment", text: "CCTV-monitored, hygienic and welcoming classrooms." },
];

export const gallery = [
  { src: galleryClassroom, alt: "Students in a Paradeshi Academy classroom", category: "Classroom", span: "md:row-span-2" },
  { src: galleryActivities, alt: "Kindergarten activity session", category: "Activities", span: "" },
  { src: galleryPrize, alt: "Prize distribution ceremony", category: "Prize Distribution", span: "md:row-span-2" },
  { src: galleryAnnual, alt: "Annual function performance", category: "Annual Functions", span: "" },
  { src: galleryEvents, alt: "Commerce students group study", category: "Events", span: "" },
  { src: heroStudents, alt: "Happy students of Paradeshi Academy", category: "Students", span: "" },
];

export const faculty = [
  { name: "Rahul Paradeshi", subject: "Mathematics & Science", experience: "12 years", photo: faculty1 },
  { name: "Sunita Deshmukh", subject: "Accounts & Economics", experience: "15 years", photo: faculty2 },
  { name: "Pooja Kulkarni", subject: "Primary & Pre-Primary", experience: "8 years", photo: faculty3 },
  { name: "Anil Sharma", subject: "English & Social Studies", experience: "18 years", photo: faculty4 },
];

export const testimonials = [
  { name: "Shreya Patil", role: "Student · 10th Std", quote: "The weekly tests and doubt sessions changed everything for me. I scored 92% in my board exams and never felt alone during preparation." },
  { name: "Mahesh Jadhav", role: "Parent", quote: "The teachers call us every week with an honest update. That level of communication is rare and it keeps my son accountable." },
  { name: "Aditi Rane", role: "Student · 12th Commerce", quote: "Accounts finally made sense here. The notes and practice papers were exactly what the board exam asked." },
  { name: "Priya Nair", role: "Parent", quote: "My daughter started in Jr KG and is still here in 5th standard. The care and discipline are consistent year after year." },
  { name: "Rohan Gupta", role: "Student · 9th Std", quote: "Small batches mean I can ask anything without hesitation. My marks have gone up in every single subject." },
];

export const notices = [
  { date: "05 Jan 2026", title: "Admissions open for Academic Year 2026-27", tag: "Admission" },
  { date: "18 Jan 2026", title: "Scholarship test for 8th to 10th std students", tag: "Scholarship" },
  { date: "02 Feb 2026", title: "Parent-teacher meeting for all batches", tag: "Meeting" },
  { date: "20 Feb 2026", title: "Prelim exam schedule released for 10th & 12th", tag: "Exam" },
];

export const events = [
  { date: "14 Feb 2026", title: "Annual Function 2026", place: "Karanjade Community Hall", text: "A full evening of performances, prize distribution and student showcases." },
  { date: "08 Mar 2026", title: "Career Guidance Seminar", place: "Academy Campus", text: "Experts guide 10th & 12th students through stream and career choices." },
  { date: "22 Mar 2026", title: "Scholarship Test Round 2", place: "Academy Campus", text: "Merit scholarships worth up to 50% of tuition fees." },
];

export const results = [
  { name: "Shreya Patil", score: "96.4%", detail: "10th Std · Board Topper" },
  { name: "Aditi Rane", score: "94.2%", detail: "12th Commerce" },
  { name: "Kunal More", score: "93.8%", detail: "10th Std" },
  { name: "Sanika Bhoir", score: "92.6%", detail: "12th Commerce" },
];

export const scholarships = [
  { title: "Merit Scholarship", amount: "Up to 50% fee waiver", text: "For students scoring above 85% in the academy scholarship test." },
  { title: "Sibling Benefit", amount: "10% fee waiver", text: "When two or more children from one family study with us." },
  { title: "Support Scholarship", amount: "Up to 30% fee waiver", text: "Need-based assistance for deserving students from the Panvel region." },
];

export const faqs = [
  { q: "Which classes and boards do you teach?", a: "We coach students from Nursery through 10th standard across SSC, CBSE and ICSE boards, and 11th–12th Commerce (all subjects)." },
  { q: "How large is each batch?", a: "Batches are capped so every student gets personal attention — usually 12 to 18 students depending on the standard." },
  { q: "Are demo lectures available?", a: "Yes. You can attend up to two free demo lectures before confirming admission." },
  { q: "How are fees paid?", a: "Fees can be paid in full or in easy instalments. We share a written fee structure with no hidden charges." },
  { q: "How do parents track progress?", a: "Weekly test reports, monthly performance summaries and regular parent-teacher meetings keep you fully informed." },
  { q: "Do you provide study material?", a: "Yes — curated notes, worksheets and previous year question banks are included in the fees." },
];

export const posts = [
  { slug: "study-plan", title: "How to Build a Study Plan That Actually Works", date: "12 Jan 2026", excerpt: "A realistic weekly timetable beats a perfect one you never follow. Here is the method our toppers use.", readTime: "5 min read" },
  { slug: "board-exam-tips", title: "10 Board Exam Habits of High Scorers", date: "28 Jan 2026", excerpt: "From answer presentation to revision cycles — small habits that add up to double-digit mark gains.", readTime: "6 min read" },
  { slug: "choosing-commerce", title: "Choosing Commerce After 10th: A Parent's Guide", date: "09 Feb 2026", excerpt: "What Commerce really opens up, which subjects matter, and how to plan for CA, CS and BBA early.", readTime: "7 min read" },
];

export const achievements = [
  "12 students above 90% in the 2025 SSC board exams",
  "State-level Maths Olympiad qualifiers — 6 students",
  "100% pass rate for five consecutive academic years",
  "Inter-school elocution champions, Panvel zone 2025",
];
