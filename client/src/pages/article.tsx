import { useLocation, Link } from "wouter";
import { Clock, ArrowLeft, User, Calendar, Share2, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articleContent: Record<number, {
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string;
}> = {
  1: {
    title: "Morning Routines for Peak Productivity",
    category: "Productivity",
    readTime: "5 min read",
    date: "December 15, 2024",
    author: "Francessawomen Team",
    content: `
      <h2>Start Your Day with Intention</h2>
      <p>Your morning routine sets the tone for your entire day. Research shows that successful women who maintain consistent morning habits are 67% more likely to achieve their daily goals and report higher levels of life satisfaction.</p>
      
      <h3>The Science Behind Morning Routines</h3>
      <p>When you wake up, your cortisol levels are naturally elevated, giving you a window of peak mental clarity and energy. This is why the first 2-3 hours of your day are crucial for tackling important tasks and setting positive intentions.</p>
      
      <h3>5 Essential Elements of a Productive Morning</h3>
      <ol>
        <li><strong>Hydration First:</strong> Drink 16-20 oz of water immediately upon waking to jumpstart your metabolism and brain function.</li>
        <li><strong>Movement:</strong> Even 10 minutes of stretching or light exercise increases blood flow and releases endorphins.</li>
        <li><strong>Mindfulness:</strong> 5-10 minutes of meditation, journaling, or deep breathing centers your mind.</li>
        <li><strong>Intention Setting:</strong> Review your top 3 priorities for the day and visualize successful completion.</li>
        <li><strong>Nourishment:</strong> Eat a balanced breakfast with protein, healthy fats, and complex carbohydrates.</li>
      </ol>
      
      <h3>Implementation Tips</h3>
      <p>Start small. Choose just one element to implement this week. Consistency beats perfection every time. Once that becomes automatic, add another element.</p>
      
      <blockquote>"A morning routine is not about perfection—it's about intention. When you start your day with purpose, everything else falls into place." — Francessawomen</blockquote>
      
      <p>Remember, your morning routine should serve you, not stress you. Customize these elements to fit your lifestyle and schedule. The key is creating a consistent practice that energizes and prepares you for the day ahead.</p>
    `
  },
  2: {
    title: "How to Build Unstoppable Confidence",
    category: "Mindset",
    readTime: "7 min read",
    date: "December 12, 2024",
    author: "Francessawomen Team",
    content: `
      <h2>Confidence is a Skill, Not a Gift</h2>
      <p>Contrary to popular belief, confidence isn't something you're born with or without. It's a skill that can be developed, strengthened, and maintained through specific practices and mindset shifts.</p>
      
      <h3>Understanding True Confidence</h3>
      <p>True confidence isn't about feeling fearless or never doubting yourself. It's about taking action despite fear, learning from failures, and trusting in your ability to handle whatever comes your way.</p>
      
      <h3>The Confidence-Building Framework</h3>
      <h4>1. Master Your Inner Voice</h4>
      <p>Pay attention to your self-talk. Replace "I can't do this" with "I'm learning how to do this." Small language shifts create massive mindset changes over time.</p>
      
      <h4>2. Collect Evidence</h4>
      <p>Keep a "confidence journal" where you record daily wins, no matter how small. Completed a difficult task? Write it down. Received a compliment? Document it. This creates a mental library of proof that you're capable.</p>
      
      <h4>3. Take Aligned Action</h4>
      <p>Confidence grows through action, not thinking. Set small, achievable goals and follow through consistently. Each completed commitment builds trust with yourself.</p>
      
      <h4>4. Embrace Discomfort</h4>
      <p>Growth happens outside your comfort zone. Regularly do things that stretch you slightly. The more you prove to yourself that you can handle new situations, the more confident you become.</p>
      
      <h3>Practical Exercises</h3>
      <ul>
        <li><strong>Power Posing:</strong> Stand in a confident posture for 2 minutes before challenging situations</li>
        <li><strong>Skill Stacking:</strong> Focus on improving one small skill each month</li>
        <li><strong>Boundary Practice:</strong> Say no to one request that doesn't align with your values</li>
        <li><strong>Compliment Acceptance:</strong> Simply say "thank you" when receiving praise</li>
      </ul>
      
      <blockquote>"Confidence isn't about having all the answers. It's about being comfortable with not knowing and trusting yourself to figure it out." — Francessawomen</blockquote>
      
      <p>Remember, building confidence is a journey, not a destination. Be patient with yourself and celebrate the small wins along the way.</p>
    `
  },
  3: {
    title: "Small Habits That Transform Your Mindset",
    category: "Growth",
    readTime: "6 min read",
    date: "December 10, 2024",
    author: "Francessawomen Team",
    content: `
      <h2>The Power of Micro-Changes</h2>
      <p>Transformation doesn't require dramatic overhauls. The most profound changes often come from tiny, consistent habits that compound over time. A 1% improvement daily leads to being 37 times better over a year.</p>
      
      <h3>Why Small Habits Work</h3>
      <p>Small habits bypass your brain's resistance to change. They're easy to start, hard to mess up, and create momentum that naturally leads to bigger changes. Plus, they wire new neural pathways without triggering your fight-or-flight response.</p>
      
      <h3>5 Micro-Habits for Mindset Transformation</h3>
      
      <h4>1. The 3-Breath Reset (30 seconds)</h4>
      <p>Before reacting to any stressful situation, take three deep breaths. This activates your parasympathetic nervous system and helps you respond from wisdom rather than emotion.</p>
      
      <h4>2. Daily Wins Acknowledgment (2 minutes)</h4>
      <p>Each evening, write down three things you accomplished that day. This trains your brain to look for success rather than dwelling on what went wrong.</p>
      
      <h4>3. Gratitude Bookends (1 minute each)</h4>
      <p>Start and end your day by naming one thing you're grateful for. This simple practice rewires your brain for positivity and abundance thinking.</p>
      
      <h4>4. The 5-Minute Future Self Visualization</h4>
      <p>Before bed, spend 5 minutes visualizing yourself successfully handling tomorrow's challenges. This primes your subconscious for success and reduces anxiety.</p>
      
      <h4>5. Positive Self-Talk Check-ins</h4>
      <p>Set three random phone alarms. When they go off, notice your thoughts and gently redirect any negative self-talk to something neutral or positive.</p>
      
      <h3>The Habit Stacking Method</h3>
      <p>Attach new habits to existing ones. For example: "After I brush my teeth, I will write down one thing I'm grateful for." This leverages your existing neural pathways to build new ones.</p>
      
      <h3>Progress Tracking</h3>
      <p>Use a simple habit tracker or mark X's on a calendar. The visual progress creates dopamine hits that reinforce the behavior.</p>
      
      <blockquote>"You don't have to be great to get started, but you have to get started to be great. Small habits are the starting point of all transformation." — Francessawomen</blockquote>
      
      <p>Choose just one micro-habit to focus on this week. Master it before adding another. Remember, consistency beats intensity every time.</p>
    `
  },
  4: {
    title: "Overcoming Procrastination Effectively",
    category: "Productivity",
    readTime: "8 min read",
    date: "December 8, 2024",
    author: "Francessawomen Team",
    content: `
      <h2>Understanding the Procrastination Puzzle</h2>
      <p>Procrastination isn't a character flaw—it's a coping mechanism. When we procrastinate, we're trying to avoid negative emotions like anxiety, overwhelm, or fear of failure. Understanding this is the first step to overcoming it.</p>
      
      <h3>The Science Behind Procrastination</h3>
      <p>When faced with an unpleasant task, your brain's limbic system (emotion center) overpowers your prefrontal cortex (rational planning center). This creates an immediate desire to seek more pleasurable activities instead.</p>
      
      <h3>The Four Types of Procrastinators</h3>
      <h4>1. The Perfectionist</h4>
      <p>Delays starting because the outcome might not be perfect. Solution: Set "good enough" standards and time limits for tasks.</p>
      
      <h4>2. The Overwhelmed</h4>
      <p>Feels paralyzed by the size of the task. Solution: Break projects into tiny, specific actions (5-minute tasks).</p>
      
      <h4>3. The Pleasure Seeker</h4>
      <p>Chooses immediate gratification over long-term benefits. Solution: Make tasks more enjoyable or reward completion.</p>
      
      <h4>4. The People Pleaser</h4>
      <p>Avoids tasks that might disappoint others. Solution: Reframe the task as serving others through your growth.</p>
      
      <h3>The Anti-Procrastination Toolkit</h3>
      
      <h4>Technique 1: The 2-Minute Rule</h4>
      <p>If a task takes less than 2 minutes, do it immediately. For larger tasks, commit to just 2 minutes of work. Often, starting is the hardest part.</p>
      
      <h4>Technique 2: Time Boxing</h4>
      <p>Set a timer for 25 minutes and work on one task only. When it rings, take a 5-minute break. This makes work feel finite and manageable.</p>
      
      <h4>Technique 3: Environment Design</h4>
      <p>Remove distractions and create cues for desired behaviors. Put your phone in another room and have your work materials ready.</p>
      
      <h4>Technique 4: Implementation Intentions</h4>
      <p>Use "if-then" planning: "If it's 9 AM, then I will work on my presentation for 30 minutes." This reduces decision fatigue.</p>
      
      <h4>Technique 5: Energy Management</h4>
      <p>Schedule your most challenging tasks during your natural energy peaks. Don't fight your biology—work with it.</p>
      
      <h3>The Procrastination Emergency Protocol</h3>
      <p>When you catch yourself procrastinating:</p>
      <ol>
        <li>Pause and acknowledge it without judgment</li>
        <li>Ask: "What emotion am I trying to avoid?"</li>
        <li>Choose the smallest possible next step</li>
        <li>Set a 10-minute timer and start</li>
        <li>Celebrate the attempt, regardless of outcome</li>
      </ol>
      
      <blockquote>"Procrastination is not a time management problem; it's an emotion management problem. When you learn to sit with discomfort, you unlock your true potential." — Francessawomen</blockquote>
      
      <p>Remember, overcoming procrastination is a practice, not a one-time fix. Be compassionate with yourself as you build these new neural pathways.</p>
    `
  },
  5: {
    title: "The Power of Self-Care in Personal Growth",
    category: "Self-Care",
    readTime: "5 min read",
    date: "December 5, 2024",
    author: "Francessawomen Team",
    content: `
      <h2>Redefining Self-Care Beyond Bubble Baths</h2>
      <p>Real self-care isn't just spa days and face masks (though those are lovely too). It's about making choices that honor your well-being, values, and long-term goals—even when those choices are difficult.</p>
      
      <h3>The Four Pillars of Authentic Self-Care</h3>
      
      <h4>1. Physical Self-Care</h4>
      <p>This includes the basics: adequate sleep, nourishing food, regular movement, and medical check-ups. Your body is your vessel for achieving everything else—treat it with respect.</p>
      
      <h4>2. Emotional Self-Care</h4>
      <p>Learning to feel your feelings without being overwhelmed by them. This means setting boundaries, seeking therapy when needed, and surrounding yourself with supportive people.</p>
      
      <h4>3. Mental Self-Care</h4>
      <p>Protecting your mental energy by curating what you consume (media, conversations, thoughts) and engaging in activities that stimulate and challenge your mind positively.</p>
      
      <h4>4. Spiritual Self-Care</h4>
      <p>Connecting with something larger than yourself—whether through religion, nature, meditation, or service to others. This provides meaning and perspective during difficult times.</p>
      
      <h3>Why Self-Care Accelerates Growth</h3>
      <p>When you're running on empty, you operate from survival mode. Self-care fills your cup so you can:</p>
      <ul>
        <li>Think more clearly and make better decisions</li>
        <li>Have energy for pursuing goals and opportunities</li>
        <li>Bounce back faster from setbacks</li>
        <li>Show up as your best self in relationships</li>
        <li>Model healthy behavior for others</li>
      </ul>
      
      <h3>Practical Self-Care Strategies</h3>
      
      <h4>Micro Self-Care (0-5 minutes)</h4>
      <ul>
        <li>Take five deep breaths</li>
        <li>Drink a glass of water mindfully</li>
        <li>Step outside for fresh air</li>
        <li>Listen to one favorite song</li>
        <li>Send yourself a kind text message</li>
      </ul>
      
      <h4>Mini Self-Care (5-30 minutes)</h4>
      <ul>
        <li>Take a shower or bath</li>
        <li>Call a friend who makes you laugh</li>
        <li>Do gentle stretching or yoga</li>
        <li>Journal three pages of stream-of-consciousness writing</li>
        <li>Organize one small area of your space</li>
      </ul>
      
      <h4>Mega Self-Care (30+ minutes)</h4>
      <ul>
        <li>Go for a nature walk or hike</li>
        <li>Cook a nourishing meal from scratch</li>
        <li>Have a difficult but necessary conversation</li>
        <li>Attend a fitness class or work out</li>
        <li>Engage in a creative hobby</li>
      </ul>
      
      <h3>Making Self-Care Non-Negotiable</h3>
      <p>Schedule self-care like you would any important appointment. Start small—even 5 minutes daily makes a difference. Remember, self-care isn't selfish; it's strategic.</p>
      
      <blockquote>"Taking care of yourself isn't a luxury—it's a responsibility. You can't pour from an empty cup, and the world needs what you have to offer." — Francessawomen</blockquote>
      
      <p>Self-care is an investment in your future self. When you prioritize your well-being, you create a foundation for sustainable success and fulfillment.</p>
    `
  },
  6: {
    title: "Setting Boundaries That Actually Work",
    category: "Growth",
    readTime: "6 min read",
    date: "December 3, 2024",
    author: "Francessawomen Team",
    content: `
      <h2>Boundaries Are Not Walls—They're Gates</h2>
      <p>Healthy boundaries aren't about shutting people out; they're about creating clear guidelines for how you want to be treated and what you will and won't accept in your life. They're an act of self-respect and love.</p>
      
      <h3>Why We Struggle with Boundaries</h3>
      <p>Many women are conditioned to be caregivers and people-pleasers. We fear that setting boundaries will make us seem selfish, mean, or difficult. But the opposite is true—boundaries actually improve relationships by creating clarity and respect.</p>
      
      <h3>Types of Boundaries You Need</h3>
      
      <h4>1. Time Boundaries</h4>
      <p>Protecting your time and schedule. Examples:</p>
      <ul>
        <li>"I don't take work calls after 7 PM"</li>
        <li>"I need 24 hours notice for social plans"</li>
        <li>"Sunday mornings are my personal time"</li>
      </ul>
      
      <h4>2. Emotional Boundaries</h4>
      <p>Protecting your emotional well-being. Examples:</p>
      <ul>
        <li>"I won't discuss politics at family dinners"</li>
        <li>"I don't accept being spoken to with that tone"</li>
        <li>"I need space when I'm processing difficult emotions"</li>
      </ul>
      
      <h4>3. Physical Boundaries</h4>
      <p>Protecting your physical space and comfort. Examples:</p>
      <ul>
        <li>"Please ask before hugging me"</li>
        <li>"I don't lend out my car"</li>
        <li>"My bedroom is my private space"</li>
      </ul>
      
      <h4>4. Digital Boundaries</h4>
      <p>Protecting your mental space in the digital world. Examples:</p>
      <ul>
        <li>"I check emails twice daily, not constantly"</li>
        <li>"I don't engage in arguments on social media"</li>
        <li>"I turn off notifications after 9 PM"</li>
      </ul>
      
      <h3>The Boundary-Setting Framework</h3>
      
      <h4>Step 1: Identify Your Limits</h4>
      <p>Notice when you feel resentful, exhausted, or taken advantage of. These feelings are signals that a boundary has been crossed.</p>
      
      <h4>Step 2: Start Small</h4>
      <p>Begin with low-stakes situations to build your boundary-setting muscle. Practice saying no to small requests before tackling bigger issues.</p>
      
      <h4>Step 3: Be Clear and Direct</h4>
      <p>Use "I" statements and be specific about what you need. Avoid over-explaining or apologizing for your boundaries.</p>
      
      <h4>Step 4: Follow Through</h4>
      <p>Boundaries without consequences are just suggestions. Be prepared to enforce your boundaries consistently.</p>
      
      <h3>Boundary Scripts That Work</h3>
      <ul>
        <li>"I understand this is important to you, and I'm not available to help with this"</li>
        <li>"That doesn't work for me"</li>
        <li>"I've decided not to discuss this topic"</li>
        <li>"I need some time to think about that"</li>
        <li>"I'm not comfortable with that"</li>
      </ul>
      
      <h3>Dealing with Boundary Pushback</h3>
      <p>Some people will test your boundaries. This is normal. Stay calm, repeat your boundary, and don't justify or defend it. Remember: you're not responsible for other people's emotions about your boundaries.</p>
      
      <blockquote>"Boundaries are not about punishing others; they're about honoring yourself. When you respect your own limits, you teach others how to respect them too." — Francessawomen</blockquote>
      
      <p>Setting boundaries is a skill that improves with practice. Start today with one small boundary, and watch how it transforms your relationships and self-respect.</p>
    `
  }
};

export default function Article() {
  const [location] = useLocation();
  const articleId = parseInt(location.split('/')[2]);
  const article = articleContent[articleId];

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <Link href="/insights">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
              Back to Insights
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
            
            <div className="mb-6">
              <span className="px-3 py-1 bg-gold text-gold-foreground rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 text-shadow-elegant">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
            
            {/* Social Sharing */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Share This Article</h3>
              <div className="flex gap-4">
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Share on Twitter
                </button>
                <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors">
                  Share on Facebook
                </button>
                <button className="bg-gold text-gold-foreground px-4 py-2 rounded-lg hover:bg-gold/90 transition-colors">
                  Copy Link
                </button>
              </div>
            </div>

            {/* Related Articles CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl text-center">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Want More Insights?</h3>
              <p className="text-muted-foreground mb-6">
                Discover more practical strategies for personal growth and transformation.
              </p>
              <Link href="/insights">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  <BookOpen className="w-4 h-4 mr-2 inline" />
                  Read More Articles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}