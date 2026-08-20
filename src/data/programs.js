import { Dumbbell, Flame, Zap, Move, Bike, Timer, UserCheck, Wind } from "lucide-react";

export const programs = [
  {
    id: "muscle-building",
    title: "Muscle Building",
    icon: Dumbbell,
    description: "Structured hypertrophy blocks to pack on quality size.",
    longDescription:
      "Progressive overload cycles built around compound lifts and targeted isolation work, tracked week over week so every session moves you closer to your next size and strength milestone.",
    image:
      "https://i.pinimg.com/1200x/f1/5f/74/f15f74a6029b7a076c31da6bc6de4ad4.jpg",
    duration: "60 min",
    difficulty: "Intermediate",
    trainer: "Kabir Malhotra",
  },
  {
    id: "weight-loss",
    title: "Fat Loss",
    icon: Flame,
    description: "Metabolic circuits paired with real nutrition coaching.",
    longDescription:
      "A mix of resistance and conditioning work designed to keep your metabolism elevated long after you've left the floor, backed by a nutrition plan that actually fits your routine.",
    image:
      "https://i.pinimg.com/736x/4b/27/b3/4b27b3410fa710bfad2d0e9225ebd451.jpg",
    duration: "45 min",
    difficulty: "Beginner",
    trainer: "Ishita Rao",
  },
  {
    id: "strength-training",
    title: "Powerlifting",
    icon: Zap,
    description: "Squat, bench and deadlift cycles built for real numbers.",
    longDescription:
      "Barbell-first programming built around the big three lifts, with accessory work chosen to close your weak points and put real weight on the bar.",
    image:
      "https://i.pinimg.com/1200x/07/f9/f0/07f9f0d070bef77064f186f35d25d974.jpg",
    duration: "75 min",
    difficulty: "Advanced",
    trainer: "Dev Chauhan",
  },
  {
    id: "functional-training",
    title: "Functional Strength",
    icon: Move,
    description: "Movement patterns that carry over to everyday life.",
    longDescription:
      "Multi-directional strength and mobility work built for how your body actually moves — carrying, lifting, twisting, bracing — so gym strength shows up outside the gym too.",
    image:
      "https://i.pinimg.com/1200x/17/17/b0/1717b0fc049add0ca164bb90980e47b1.jpg",
    duration: "50 min",
    difficulty: "Intermediate",
    trainer: "Kabir Malhotra",
  },
  {
    id: "crossfit",
    title: "Metcon & CrossFit",
    icon: Timer,
    description: "Varied, coach-led WODs for all-round conditioning.",
    longDescription:
      "Community workouts of the day that rotate through gymnastics, weightlifting and conditioning — scaled to your level, scored against yourself, never boring.",
    image:
      "https://i.pinimg.com/1200x/5d/db/80/5ddb808a62e21d9d7835e41cc7c51510.jpg",
    duration: "60 min",
    difficulty: "Advanced",
    trainer: "Dev Chauhan",
  },
  {
    id: "hiit",
    title: "HIIT Express",
    icon: Bike,
    description: "Fast, focused intervals for members short on time.",
    longDescription:
      "Thirty minutes, full intensity — interval blocks that spike your heart rate and keep your metabolism working well past the final round.",
    image:
      "https://i.pinimg.com/736x/7a/bb/9b/7abb9b0fa990e71618fdeb289213e90d.jpg",
    duration: "30 min",
    difficulty: "Intermediate",
    trainer: "Ishita Rao",
  },
  {
    id: "personal-training",
    title: "1-on-1 Coaching",
    icon: UserCheck,
    description: "A dedicated coach building a plan around your goals.",
    longDescription:
      "Fully individualized programming with hands-on form correction and week-to-week accountability — the fastest way to close the gap between where you are and where you want to be.",
    image:
      "https://i.pinimg.com/1200x/24/83/f3/2483f3e659a988c39a2a70238ac841a4.jpg",
    duration: "60 min",
    difficulty: "All Levels",
    trainer: "Kabir Malhotra",
  },
  {
    id: "yoga-mobility",
    title: "Mobility & Yoga",
    icon: Wind,
    description: "Slow it down to move better and recover faster.",
    longDescription:
      "Guided mobility flows and breathwork sessions that undo a day at the desk, improve range of motion, and keep your joints ready for the next heavy session.",
    image:
      "https://i.pinimg.com/736x/45/a3/c4/45a3c4361ac62f7b6a92df76d49864f3.jpg",
    duration: "45 min",
    difficulty: "Beginner",
    trainer: "Ishita Rao",
  },
];
