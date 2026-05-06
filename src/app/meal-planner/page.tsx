"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function MealPlanner() {
  const [selectedDiet, setSelectedDiet] = useState("High Protein Meals");
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [selectedMealIndex, setSelectedMealIndex] = useState<number | null>(null);
  const [isGoalsExpanded, setIsGoalsExpanded] = useState(false);
  const [dietOptions] = useState(["High Protein", "Balanced Energizer", "Lean and Green"]);
  const [trackedDates, setTrackedDates] = useState<string[]>([]);
  const [shuffleKey, setShuffleKey] = useState(0);

  // Generate week dates
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    const day = d.getDay();
    const diff = d.getDate() - day + i;
    const date = new Date(d.setDate(diff));
    return date.toISOString().split('T')[0];
  });

  const toggleDate = (date: string) => {
    setTrackedDates(prev =>
      prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
    );
  };

  const progressPercent = Math.round((trackedDates.length / 7) * 100);

  // Weekly Stats based on diet
  const weeklyStats = {
    "High Protein Meals": { energy: "18,500 kcal", protein: "1050g", fibre: "210g", lipids: "450g" },
    "Balanced Energizer": { energy: "16,000 kcal", protein: "800g", fibre: "300g", lipids: "500g" },
    "Lean and Green": { energy: "12,000 kcal", protein: "500g", fibre: "400g", lipids: "300g" }
  };

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const handleShuffle = () => {
    setShuffleKey(prev => prev + 1);
  };

  // Mock Data for Indian Meals
  const getMealsForDay = (diet: string, dayIndex: number) => {
    const diets: Record<string, any[][]> = {
      "High Protein Meals": [
        // SUN
        [
          { type: "Breakfast", title: "Moong Dal Chilla", desc: "Savory lentil pancakes with paneer stuffing.", recipe: "1. Soak moong dal overnight.\n2. Grind to a smooth batter with green chilies.\n3. Spread on a hot pan and cook with 1 tsp oil.\n4. Stuff with crumbled paneer and fold." },
          { type: "Lunch", title: "Soya Chunks Masala", desc: "High-protein soya chunks cooked in a rich tomato gravy.", recipe: "1. Boil soya chunks and squeeze out water.\n2. Sauté onions, tomatoes, and ginger-garlic paste.\n3. Add turmeric, coriander powder, and garam masala.\n4. Toss in soya chunks and simmer for 10 mins." },
          { type: "Dinner", title: "Tandoori Chicken Bowl", desc: "Grilled marinated chicken breast with a side of cucumber salad.", recipe: "1. Marinate chicken in yogurt, lemon, and tandoori spices.\n2. Grill at 400°F for 15-20 mins.\n3. Serve hot over a bed of fresh cucumber and mint salad." }
        ],
        // MON
        [
          { type: "Breakfast", title: "Paneer Bhurji", desc: "Spiced scrambled paneer with whole wheat toast.", recipe: "1. Heat oil and sauté chopped onions and tomatoes.\n2. Add turmeric and chili powder.\n3. Crumble fresh paneer into the pan and mix well.\n4. Serve with toasted whole wheat bread." },
          { type: "Lunch", title: "Rajma (Red Kidney Beans)", desc: "Slow-cooked kidney beans in a spiced onion-tomato gravy.", recipe: "1. Soak rajma overnight and pressure cook until soft.\n2. Prepare a base of sautéed onions, tomatoes, and spices.\n3. Add cooked rajma and simmer until the gravy thickens.\n4. Serve with a small portion of brown rice." },
          { type: "Dinner", title: "Egg Curry", desc: "Hard-boiled eggs in a light, flavorful curry.", recipe: "1. Boil 3-4 eggs and peel them.\n2. Sauté onions, garlic, and tomato puree.\n3. Add coriander powder and garam masala.\n4. Halve the eggs, add to the gravy, and garnish with cilantro." }
        ],
        // TUE
        [
          { type: "Breakfast", title: "Besan Chilla", desc: "Gram flour pancakes with chopped veggies.", recipe: "1. Mix besan, water, chopped onions, tomatoes, and coriander into a batter.\n2. Spread thinly on a non-stick pan.\n3. Cook until golden brown on both sides.\n4. Serve with mint chutney." },
          { type: "Lunch", title: "Chicken Tikka Masala", desc: "Lean chicken pieces in a spiced yogurt gravy.", recipe: "1. Grill yogurt-marinated chicken pieces.\n2. Sauté ginger-garlic and tomato puree.\n3. Add grilled chicken to the pan and simmer with light cream/milk.\n4. Serve with 1 whole wheat roti." },
          { type: "Dinner", title: "Masoor Dal (Red Lentils)", desc: "Quick-cooking red lentils tempered with cumin and garlic.", recipe: "1. Boil masoor dal with turmeric and salt.\n2. In a small pan, heat ghee and add cumin seeds and crushed garlic.\n3. Pour the tempering over the dal.\n4. Enjoy as a thick soup or with a small roti." }
        ],
        // WED
        [
          { type: "Breakfast", title: "Sprouts Salad", desc: "Mixed sprouted moong and chana with lemon and chaat masala.", recipe: "1. Steam sprouted moong and chana slightly.\n2. Toss with chopped cucumbers, tomatoes, and onions.\n3. Squeeze fresh lemon juice and sprinkle chaat masala.\n4. Mix well and serve fresh." },
          { type: "Lunch", title: "Palak Paneer", desc: "Cottage cheese cubes in a thick spinach puree.", recipe: "1. Blanch spinach leaves and puree them.\n2. Sauté garlic and onions, then add the spinach puree.\n3. Add paneer cubes and simmer for 5 mins.\n4. Serve hot with a multigrain roti." },
          { type: "Dinner", title: "Grilled Fish Tikka", desc: "White fish marinated in Indian spices and grilled.", recipe: "1. Marinate fish fillets with yogurt, turmeric, and ajwain.\n2. Grill in an oven or air fryer until cooked through.\n3. Serve with a side of mint chutney and sliced onions." }
        ],
        // THU
        [
          { type: "Breakfast", title: "Egg White Omelette", desc: "Fluffy egg whites cooked with green chilies and coriander.", recipe: "1. Whisk 4-5 egg whites with salt, pepper, and chopped chilies.\n2. Pour into a heated pan.\n3. Add fresh coriander and fold when cooked.\n4. Serve with a slice of toasted brown bread." },
          { type: "Lunch", title: "Soya Keema Matar", desc: "Minced soya chunks cooked with green peas.", recipe: "1. Soak and mince soya chunks in a blender.\n2. Sauté onions, tomatoes, and ginger-garlic paste.\n3. Add minced soya and green peas along with spices.\n4. Cook until moisture evaporates." },
          { type: "Dinner", title: "Chicken Stew", desc: "Light chicken stew with carrots and beans.", recipe: "1. Sauté whole spices (cinnamon, cloves) in little oil.\n2. Add chicken pieces, carrots, and french beans.\n3. Cover with water and simmer until tender.\n4. Add a dash of black pepper and serve hot." }
        ],
        // FRI
        [
          { type: "Breakfast", title: "Quinoa Upma", desc: "Indian-style savory porridge made with protein-rich quinoa.", recipe: "1. Rinse and cook quinoa until fluffy.\n2. Sauté mustard seeds, curry leaves, and chopped veggies.\n3. Mix the cooked quinoa into the veggies.\n4. Garnish with lemon juice and coriander." },
          { type: "Lunch", title: "Dal Makhani (Low Fat)", desc: "Black lentils and kidney beans slow-cooked overnight.", recipe: "1. Soak whole urad dal and rajma overnight.\n2. Pressure cook until very soft.\n3. Simmer on low heat with tomato puree and ginger.\n4. Use a dash of milk instead of heavy cream for richness." },
          { type: "Dinner", title: "Tofu Tikka", desc: "Firm tofu marinated in tandoori spices and baked.", recipe: "1. Press tofu to remove excess water and cut into cubes.\n2. Marinate with thick yogurt, besan, and tikka spices.\n3. Bake at 400°F for 20 mins until crisp.\n4. Serve with a side of crunchy cabbage salad." }
        ],
        // SAT
        [
          { type: "Breakfast", title: "Oats Chilla", desc: "Savory pancakes made from ground oats and yogurt.", recipe: "1. Grind rolled oats into a coarse powder.\n2. Mix with yogurt, water, and grated carrots.\n3. Cook on a flat skillet like a pancake.\n4. Serve with spicy green chutney." },
          { type: "Lunch", title: "Chole (Chickpeas)", desc: "Spiced chickpea curry with an onion-tomato base.", recipe: "1. Soak chickpeas overnight and boil until soft.\n2. Prepare a base of sautéed onions, tomatoes, and spices.\n3. Combine and simmer until the gravy coats the chickpeas.\n4. Serve with a small portion of jeera rice." },
          { type: "Dinner", title: "Mutton Bone Broth", desc: "Nutrient-dense, slow-cooked clear soup.", recipe: "1. Slow cook mutton bones with garlic, ginger, and whole spices for 4-6 hours.\n2. Strain the broth.\n3. Serve piping hot with a squeeze of lemon and black pepper." }
        ]
      ],
      "Balanced Energizer": [
        // SUN
        [
          { type: "Breakfast", title: "Poha", desc: "Flattened rice cooked with peanuts and turmeric.", recipe: "1. Rinse poha in water and drain immediately.\n2. Sauté mustard seeds, curry leaves, onions, and peanuts.\n3. Add turmeric and mix in the poha gently.\n4. Garnish with fresh coriander and lemon." },
          { type: "Lunch", title: "Dal Fry & Jeera Rice", desc: "Yellow lentils tempered with ghee and cumin, served with rice.", recipe: "1. Boil toor dal with turmeric.\n2. Prepare a tempering of ghee, cumin seeds, garlic, and red chilies.\n3. Pour over the dal and serve with cumin-scented basmati rice." },
          { type: "Dinner", title: "Bhindi Masala", desc: "Okra stir-fried with onions and tomatoes.", recipe: "1. Wash and dry okra completely, then slice.\n2. Sauté in oil until the stickiness disappears.\n3. Add onions, tomatoes, and dry spices.\n4. Cook until tender and serve with 1-2 chapatis." }
        ],
        // MON
        [
          { type: "Breakfast", title: "Idli Sambar", desc: "Steamed rice cakes served with a lentil-vegetable stew.", recipe: "1. Steam fermented rice and urad dal batter in idli molds.\n2. Boil toor dal with mixed vegetables (carrots, drumsticks).\n3. Add tamarind extract and sambar powder.\n4. Temper with mustard seeds and curry leaves." },
          { type: "Lunch", title: "Chicken Biryani", desc: "Aromatic basmati rice layered with spiced chicken.", recipe: "1. Marinate chicken in yogurt and biryani spices.\n2. Parboil basmati rice with whole spices.\n3. Layer chicken and rice in a pot and slow cook (dum) for 20 mins.\n4. Serve with cooling cucumber raita." },
          { type: "Dinner", title: "Aloo Gobi", desc: "Potatoes and cauliflower florets tossed in dry spices.", recipe: "1. Cut potatoes and cauliflower into bite-sized pieces.\n2. Sauté cumin seeds, ginger, and green chilies.\n3. Add the veggies, cover, and cook on low heat until tender.\n4. Garnish with cilantro." }
        ],
        // TUE
        [
          { type: "Breakfast", title: "Masala Oats", desc: "Oats cooked with mixed vegetables and Indian spices.", recipe: "1. Sauté onions, peas, and carrots in a little oil.\n2. Add turmeric, salt, and chili powder.\n3. Add rolled oats and water.\n4. Cook until thick and creamy." },
          { type: "Lunch", title: "Mix Veg Curry", desc: "Seasonal vegetables in a rich cashew and tomato gravy.", recipe: "1. Blanch carrots, beans, and cauliflower.\n2. Blend cashews and tomatoes into a smooth paste.\n3. Cook the paste with spices, then add the veggies.\n4. Serve hot with a paratha or roti." },
          { type: "Dinner", title: "Lemon Rice", desc: "Tangy rice flavored with lemon juice, peanuts, and mustard seeds.", recipe: "1. Heat oil and temper mustard seeds, chana dal, and peanuts.\n2. Add turmeric and turn off the heat.\n3. Mix in cooked rice and fresh lemon juice.\n4. Serve with a side of plain yogurt." }
        ],
        // WED
        [
          { type: "Breakfast", title: "Dosa with Coconut Chutney", desc: "Crispy crepe made from fermented rice and lentil batter.", recipe: "1. Spread fermented batter thinly on a hot griddle.\n2. Drizzle a few drops of oil and cook until crisp.\n3. Grind fresh coconut, green chilies, and roasted chana for chutney.\n4. Serve hot." },
          { type: "Lunch", title: "Fish Curry", desc: "Traditional fish curry cooked with coconut milk and tamarind.", recipe: "1. Sauté onions, garlic, and curry leaves.\n2. Add fish curry powder and tamarind extract.\n3. Pour in coconut milk and bring to a gentle simmer.\n4. Add fish pieces and cook until flaky." },
          { type: "Dinner", title: "Lauki (Bottle Gourd) Sabzi", desc: "Light, easily digestible bottle gourd curry.", recipe: "1. Peel and chop bottle gourd into small cubes.\n2. Temper cumin seeds and green chilies in a pressure cooker.\n3. Add the gourd, tomatoes, and salt.\n4. Cook for 2 whistles and serve with roti." }
        ],
        // THU
        [
          { type: "Breakfast", title: "Upma", desc: "Roasted semolina cooked with vegetables.", recipe: "1. Dry roast semolina (rava) until fragrant.\n2. Sauté mustard seeds, urad dal, onions, and veggies.\n3. Add boiling water and slowly mix in the roasted rava to prevent lumps.\n4. Cook until water is absorbed." },
          { type: "Lunch", title: "Mushroom Matar", desc: "Button mushrooms and green peas in an onion-tomato gravy.", recipe: "1. Slice mushrooms and boil green peas.\n2. Cook onion-tomato paste with garam masala.\n3. Add mushrooms and peas, cover and cook for 10 mins.\n4. Serve with jeera rice or roti." },
          { type: "Dinner", title: "Vegetable Khichdi", desc: "Comforting one-pot meal of rice, lentils, and veggies.", recipe: "1. Wash equal parts rice and moong dal.\n2. Sauté cumin, ginger, and mixed veggies in a pressure cooker.\n3. Add rice, dal, turmeric, and 4 cups water.\n4. Cook until mushy and serve with a dollop of ghee." }
        ],
        // FRI
        [
          { type: "Breakfast", title: "Rava Idli", desc: "Instant steamed cakes made from semolina and yogurt.", recipe: "1. Roast rava and mix with yogurt and a pinch of baking soda.\n2. Let it rest for 15 mins.\n3. Steam in idli molds for 10-12 mins.\n4. Serve with spicy tomato chutney." },
          { type: "Lunch", title: "Kadhi Pakora", desc: "Yogurt and gram flour curry with fried fritters.", recipe: "1. Whisk sour yogurt, besan, turmeric, and water.\n2. Simmer the mixture on low heat until it thickens and loses the raw taste.\n3. Make small onion fritters (pakoras) and add them to the kadhi.\n4. Temper with dry red chilies and cumin." },
          { type: "Dinner", title: "Baingan Bharta", desc: "Smoky roasted eggplant mashed with spices.", recipe: "1. Roast a large eggplant over an open flame until charred.\n2. Peel the skin and mash the flesh.\n3. Sauté onions, garlic, and tomatoes.\n4. Mix in the mashed eggplant and cook for 5 mins." }
        ],
        // SAT
        [
          { type: "Breakfast", title: "Aloo Paratha (Light)", desc: "Whole wheat flatbread stuffed with spiced mashed potatoes.", recipe: "1. Mash boiled potatoes with green chilies, coriander, and amchur (mango powder).\n2. Stuff a small portion into wheat dough and roll out.\n3. Cook on a tawa with minimal oil/ghee.\n4. Serve with plain yogurt." },
          { type: "Lunch", title: "Paneer Butter Masala", desc: "Cottage cheese in a creamy tomato gravy.", recipe: "1. Blanch and puree tomatoes.\n2. Cook the puree with butter, ginger-garlic paste, and cashew powder.\n3. Add paneer cubes and a splash of fresh cream.\n4. Serve with naan or rice." },
          { type: "Dinner", title: "Methi Malai Matar", desc: "Fenugreek leaves and green peas in a rich sauce.", recipe: "1. Wash and chop fresh methi leaves.\n2. Sauté with green peas in a pan.\n3. Add a blended paste of onions and cashews.\n4. Simmer until the bitterness balances out and serve." }
        ]
      ],
      "Lean and Green": [
        // SUN
        [
          { type: "Breakfast", title: "Green Moong Sprout Salad", desc: "Fresh, low-calorie salad packed with enzymes.", recipe: "1. Steam green moong sprouts lightly.\n2. Mix with chopped cucumber, tomato, and pomegranate seeds.\n3. Dress with lemon juice and a pinch of black salt." },
          { type: "Lunch", title: "Palak Soup & Grilled Veggies", desc: "Clear spinach soup with a side of oven-roasted vegetables.", recipe: "1. Boil spinach with garlic and puree it into a thin soup.\n2. Toss broccoli, bell peppers, and zucchini in olive oil.\n3. Roast at 400°F for 15 mins.\n4. Serve hot." },
          { type: "Dinner", title: "Cabbage Sabzi", desc: "Shredded cabbage stir-fried with mustard seeds.", recipe: "1. Finely shred green cabbage.\n2. Temper mustard seeds and split green chilies in 1 tsp oil.\n3. Add cabbage, salt, and turmeric.\n4. Cover and cook until soft. Serve with 1 multigrain roti." }
        ],
        // MON
        [
          { type: "Breakfast", title: "Bottle Gourd Juice & Almonds", desc: "Alkalizing fresh juice with a side of soaked almonds.", recipe: "1. Peel and blend fresh bottle gourd (lauki) with mint leaves.\n2. Strain the juice and add a dash of black pepper.\n3. Serve immediately with 8-10 soaked almonds." },
          { type: "Lunch", title: "Cauliflower Rice with Dal", desc: "Low-carb alternative to rice served with yellow lentils.", recipe: "1. Grate cauliflower into rice-sized grains.\n2. Sauté lightly in a pan until moisture evaporates.\n3. Serve with a bowl of thin moong dal." },
          { type: "Dinner", title: "Tofu Salad", desc: "Fresh greens topped with grilled tofu cubes.", recipe: "1. Grill firm tofu cubes seasoned with salt and pepper.\n2. Toss mixed greens, cherry tomatoes, and cucumber.\n3. Top with tofu and a light lemon-olive oil dressing." }
        ],
        // TUE
        [
          { type: "Breakfast", title: "Cucumber Idli", desc: "Savory steamed cakes made from grated cucumber and semolina.", recipe: "1. Grate a large cucumber and squeeze out the water.\n2. Mix the cucumber flesh with roasted semolina and yogurt.\n3. Steam in idli molds for 12 mins.\n4. Serve with green chutney." },
          { type: "Lunch", title: "Karela (Bitter Gourd) Sabzi", desc: "Blood-sugar regulating bitter gourd stir-fry.", recipe: "1. Slice bitter gourd and rub with salt to remove bitterness. Wash after 15 mins.\n2. Sauté sliced onions until golden.\n3. Add the bitter gourd, turmeric, and dry mango powder.\n4. Cook until crisp." },
          { type: "Dinner", title: "Clear Veg Soup", desc: "Light, hydrating soup with chopped seasonal vegetables.", recipe: "1. Boil water with crushed ginger and garlic.\n2. Add finely chopped carrots, cabbage, and beans.\n3. Simmer until veggies are tender-crisp.\n4. Season with salt and pepper." }
        ],
        // WED
        [
          { type: "Breakfast", title: "Papaya & Chia Seeds", desc: "A bowl of fresh papaya topped with soaked chia seeds.", recipe: "1. Cube fresh, ripe papaya.\n2. Soak 1 tbsp chia seeds in water for 10 mins.\n3. Pour the chia gel over the papaya.\n4. Enjoy as a light, digestive-friendly breakfast." },
          { type: "Lunch", title: "Beetroot Salad", desc: "Grated beetroot tempered with mustard seeds.", recipe: "1. Grate 2 fresh beetroots.\n2. Temper mustard seeds and curry leaves in 1/2 tsp coconut oil.\n3. Pour the tempering over the beetroot.\n4. Add a spoonful of yogurt if desired." },
          { type: "Dinner", title: "Sautéed Spinach", desc: "Simple garlic spinach served with roasted paneer.", recipe: "1. Heat a pan and add crushed garlic.\n2. Toss in fresh spinach leaves until wilted.\n3. Roast a few cubes of paneer on the side.\n4. Serve together." }
        ],
        // THU
        [
          { type: "Breakfast", title: "Oats & Apple Porridge", desc: "Rolled oats cooked in water with grated apple.", recipe: "1. Boil rolled oats in water until thick.\n2. Grate half an apple into the hot oats.\n3. Sprinkle cinnamon powder.\n4. Serve warm." },
          { type: "Lunch", title: "Tori (Ridge Gourd) Sabzi", desc: "Highly hydrating ridge gourd curry.", recipe: "1. Peel and chop ridge gourd.\n2. Temper cumin seeds and green chilies.\n3. Add the gourd and tomatoes; it will release its own water.\n4. Simmer until soft and serve with 1 roti." },
          { type: "Dinner", title: "Roasted Broccoli", desc: "Broccoli florets roasted with garlic and lemon.", recipe: "1. Cut broccoli into florets.\n2. Toss with minced garlic, salt, and a spray of olive oil.\n3. Roast at 400°F for 15 mins.\n4. Squeeze fresh lemon juice before serving." }
        ],
        // FRI
        [
          { type: "Breakfast", title: "Watermelon Bowl", desc: "Hydrating fresh watermelon cubes with mint.", recipe: "1. Dice chilled watermelon.\n2. Toss with fresh mint leaves.\n3. Serve immediately for a refreshing start to the day." },
          { type: "Lunch", title: "Pumpkin Soup", desc: "Creamy, low-calorie blended pumpkin soup.", recipe: "1. Boil pumpkin pieces with onions and garlic.\n2. Blend into a smooth puree.\n3. Reheat and season with salt, pepper, and a pinch of nutmeg.\n4. Serve hot." },
          { type: "Dinner", title: "Mushroom Stir Fry", desc: "Button mushrooms sautéed with bell peppers.", recipe: "1. Slice mushrooms and bell peppers.\n2. Sauté on high heat with 1 tsp oil.\n3. Add soy sauce and black pepper.\n4. Serve immediately." }
        ],
        // SAT
        [
          { type: "Breakfast", title: "Green Tea & Almonds", desc: "Antioxidant-rich green tea with a handful of nuts.", recipe: "1. Brew a cup of high-quality green tea.\n2. Serve alongside 10 soaked almonds and 2 walnuts." },
          { type: "Lunch", title: "Moong Dal Soup", desc: "Very thin, easily digestible yellow lentil soup.", recipe: "1. Boil yellow moong dal with turmeric and lots of water.\n2. Blend until completely smooth.\n3. Temper with cumin seeds in a drop of ghee.\n4. Drink warm." },
          { type: "Dinner", title: "Grilled Zucchini", desc: "Thick slices of zucchini grilled with herbs.", recipe: "1. Slice zucchini lengthwise.\n2. Rub with dried oregano and salt.\n3. Grill on a hot pan until grill marks appear.\n4. Serve warm." }
        ]
      ]
    };

    const baseMeals = diets[diet as keyof typeof diets] || diets["High Protein Meals"];
    
    // Extract pools for each meal type from the entire week
    const breakfasts = baseMeals.map(day => day[0]);
    const lunches = baseMeals.map(day => day[1]);
    const dinners = baseMeals.map(day => day[2]);

    // Selection indices based on day and shuffle variation
    // Using different offsets for each type ensures a wide range of combinations
    const bIndex = (dayIndex + shuffleKey) % 7;
    const lIndex = (dayIndex + (shuffleKey * 2)) % 7;
    const dIndex = (dayIndex + (shuffleKey * 3)) % 7;

    return [
      breakfasts[bIndex],
      lunches[lIndex],
      dinners[dIndex]
    ];
  };

  const currentStats = weeklyStats[selectedDiet as keyof typeof weeklyStats] || { energy: "15,000 kcal", protein: "750g", fibre: "250g", lipids: "400g" };

  return (
    <main className="pt-40 pb-24 px-20 max-w-[1440px] mx-auto flex-grow w-full relative">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-32 max-w-3xl mx-auto relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-400/5 blur-[80px] rounded-full -z-10 animate-liquid" />
        <span className="font-label-caps text-primary tracking-[0.4em] uppercase text-[10px] mb-6 block">Nutritional Synthesis</span>
        <h1 className="font-display-lg text-[64px] leading-tight text-on-surface mb-12">Metabolic <br /><span className="italic font-light">Fuel.</span></h1>
        <p className="font-body-lg text-secondary opacity-70 italic">
          A precision-engineered framework designed to optimize bio-availability, mitochondrial function, and glycogen restoration.
        </p>
      </motion.header>

      {/* Weekly Bento Grid */}
      <div className="grid grid-cols-12 gap-8 mb-32">
        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onClick={() => setIsGoalsExpanded(true)}
          className="col-span-12 lg:col-span-4 bg-white/40 backdrop-blur-[40px] border border-white/50 p-12 flex flex-col justify-between rounded-[40px] hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group cursor-pointer"
        >
          <div>
            <h3 className="font-h2 text-3xl mb-12">Weekly Goals</h3>
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="font-label-caps text-[10px] tracking-widest text-secondary uppercase">Diet Adherence</span>
                  <span className="font-body-md text-on-surface font-semibold">{progressPercent}%</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary shadow-[0_0_15px_rgba(0,105,112,0.5)]"
                  ></motion.div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: "Protein", val: currentStats.protein },
                  { label: "Fibre", val: currentStats.fibre },
                  { label: "Lipids", val: currentStats.lipids }
                ].map((stat, i) => (
                  <div key={i} className="text-center group-hover:scale-110 transition-transform duration-500">
                    <span className="font-label-caps text-[9px] tracking-widest text-secondary block mb-3 uppercase">{stat.label}</span>
                    <span className="font-h2 text-2xl text-primary">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 pt-10 border-t border-slate-100">
            <p className="font-body-md text-sm italic text-secondary opacity-60 group-hover:opacity-100 transition-opacity">&quot;Precision in nutrition is the foundation of cognitive clarity.&quot;</p>
          </div>
        </motion.div>

        {/* Featured Recipe (Large) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="col-span-12 lg:col-span-8 relative group overflow-hidden bg-slate-100 h-[600px] rounded-[40px] hover:shadow-2xl transition-all duration-700 cursor-pointer"
        >
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Balanced Meal" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms] ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 p-16 text-white w-full">
            <span className="font-label-caps text-primary tracking-widest text-[10px] mb-6 block uppercase">Biological Highlight</span>
            <h2 className="font-display-lg text-[48px] leading-tight">Nutrient-Dense <br />Adaptogenic Recovery Bowl</h2>
          </div>
        </motion.div>
      </div>

      {/* Weekly Nutritional Cycles */}
      <section className="mb-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-4 gap-8">
          <div>
            <span className="font-label-caps text-primary tracking-widest text-[10px] mb-4 block uppercase">The Cycle</span>
            <h3 className="font-h1 text-[40px]">Weekly Calibration.</h3>
          </div>

          {/* Diet Options Selector */}
          <div className="flex flex-wrap gap-4 bg-white/50 backdrop-blur-md border border-slate-100 p-2 rounded-full shadow-sm">
            {dietOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedDiet(opt)}
                className={`px-8 py-4 rounded-full font-label-caps text-sm tracking-widest transition-all duration-500 ${selectedDiet === opt
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'text-secondary hover:text-primary hover:bg-white'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          {days.map((day, i) => {
            const meals = getMealsForDay(selectedDiet, i);
            return (
              <motion.div
                key={i}
                layoutId={`day-card-${i}`}
                onClick={() => {
                  setExpandedDay(i);
                  setSelectedMealIndex(null);
                }}
                className="bg-white/40 backdrop-blur-[40px] border border-white/50 shadow-sm hover:shadow-2xl hover:border-primary/20 p-8 rounded-[32px] cursor-pointer group transition-all duration-700"
              >
                <motion.span layoutId={`day-label-${i}`} className="font-label-caps text-sm tracking-widest text-primary font-bold mb-8 block">
                  {day}
                </motion.span>
                <div className="space-y-8">
                  {meals.map((m, j) => (
                    <div key={j}>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-slate-400 mb-2">{m.type}</p>
                      <p className="font-body-md text-[15px] text-on-surface group-hover:text-primary transition-colors leading-relaxed line-clamp-2">{m.title}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleShuffle}
            className="px-10 py-5 bg-white/50 backdrop-blur-md hover:bg-white border border-slate-200 rounded-full font-label-caps text-sm tracking-widest text-primary transition-all shadow-sm hover:shadow-md flex items-center gap-4 mx-auto"
          >
            <span className="material-symbols-outlined text-lg">shuffle</span>
            Shuffle Weekly Variation
          </button>
        </div>
      </section>

      {/* Expanded Modal Overlay for Days */}
      <AnimatePresence>
        {expandedDay !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setExpandedDay(null);
                setSelectedMealIndex(null);
              }}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 pointer-events-none">
              <motion.div
                layoutId={`day-card-${expandedDay}`}
                className="bg-white rounded-[40px] overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col relative pointer-events-auto"
              >
                {/* Close button */}
                <button
                  onClick={() => {
                    setExpandedDay(null);
                    setSelectedMealIndex(null);
                  }}
                  className="absolute top-8 right-8 z-20 w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>

                {/* Header */}
                <div className="p-12 md:p-16 border-b border-slate-100 bg-slate-50">
                  <motion.span layoutId={`day-label-${expandedDay}`} className="font-label-caps text-sm tracking-[0.3em] text-primary uppercase block mb-4">
                    {days[expandedDay]}
                  </motion.span>
                  <h3 className="font-h1 text-4xl">{selectedDiet} Protocol</h3>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-12 md:p-16">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {getMealsForDay(selectedDiet, expandedDay).map((m, j) => (
                      <div
                        key={j}
                        onClick={() => setSelectedMealIndex(j)}
                        className={`group p-8 rounded-[24px] border transition-all duration-300 cursor-pointer ${selectedMealIndex === j ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-100 hover:border-primary/50'}`}
                      >
                        <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 mb-4">{m.type}</p>
                        <h4 className="font-h2 text-xl mb-3">{m.title}</h4>
                        <p className="font-body-sm text-secondary opacity-70 line-clamp-2">{m.desc}</p>
                        <span className={`font-label-caps text-[9px] tracking-widest text-primary mt-6 block transition-opacity ${selectedMealIndex === j ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>View Recipe &rarr;</span>
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {selectedMealIndex !== null && (
                      <motion.div
                        key={selectedMealIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-slate-50 rounded-[32px] p-10 md:p-12 border border-slate-100"
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <span className="material-symbols-outlined text-primary text-3xl">restaurant_menu</span>
                          <h4 className="font-h2 text-3xl">{getMealsForDay(selectedDiet, expandedDay)[selectedMealIndex].title}</h4>
                        </div>
                        <p className="font-body-lg text-secondary mb-10 italic opacity-80">{getMealsForDay(selectedDiet, expandedDay)[selectedMealIndex].desc}</p>

                        <h5 className="font-label-caps text-[10px] tracking-widest text-primary uppercase mb-6">Preparation Recipe</h5>
                        <div className="font-body-md text-secondary leading-loose opacity-80 whitespace-pre-line">
                          {getMealsForDay(selectedDiet, expandedDay)[selectedMealIndex].recipe}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Expanded Goals Modal */}
      <AnimatePresence>
        {isGoalsExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGoalsExpanded(false)}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-[40px] overflow-hidden shadow-2xl max-w-2xl w-full flex flex-col relative pointer-events-auto p-12 md:p-16"
              >
                <button
                  onClick={() => setIsGoalsExpanded(false)}
                  className="absolute top-8 right-8 z-20 w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>

                <span className="font-label-caps text-sm tracking-[0.3em] text-primary uppercase block mb-4">
                  Progress Overview
                </span>
                <h3 className="font-h1 text-4xl mb-12">Weekly Goals & Routine</h3>

                <div className="space-y-12">
                  <div className="bg-slate-50 p-8 rounded-[24px] border border-slate-100">
                    <h4 className="font-h2 text-2xl mb-6">Diet Adherence Tracking</h4>
                    <div className="flex justify-between items-end mb-8">
                      <span className="font-label-caps text-[10px] tracking-widest text-secondary uppercase">Weekly Progress</span>
                      <span className="font-body-md text-primary font-bold">{progressPercent}%</span>
                    </div>

                    {/* Horizontal Calendar */}
                    <div className="flex justify-between gap-2 mb-8">
                      {weekDates.map((date, idx) => {
                        const d = new Date(date);
                        const dayName = days[idx];
                        const dayNum = d.getDate();
                        const isSelected = trackedDates.includes(date);
                        const isToday = date === new Date().toISOString().split('T')[0];
                        const isFuture = date > new Date().toISOString().split('T')[0];

                        return (
                          <div
                            key={date}
                            onClick={() => !isFuture && toggleDate(date)}
                            className={`flex-1 flex flex-col items-center p-4 rounded-2xl transition-all duration-300 border ${
                              isFuture ? 'opacity-20 cursor-not-allowed grayscale' : 'cursor-pointer'
                            } ${isSelected
                              ? 'bg-primary text-white border-primary shadow-lg scale-105'
                              : 'bg-white text-slate-400 border-slate-100'
                            } ${!isFuture && !isSelected ? 'hover:border-primary/30' : ''} ${
                              isToday && !isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
                            }`}
                          >
                            <span className="font-label-caps text-[9px] mb-2 tracking-widest">{dayName}</span>
                            <span className="font-display-sm text-lg">{dayNum}</span>
                            {isSelected && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="material-symbols-outlined text-xs mt-2"
                              >
                                check_circle
                              </motion.span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-primary"
                      ></motion.div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-[24px] border border-slate-100">
                    <div className="flex justify-between items-center mb-8">
                      <h4 className="font-h2 text-2xl">Weekly Consistency</h4>
                      <span className="text-[10px] text-emerald-600 font-semibold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
                        {progressPercent === 100 ? "Perfect Week" : `${trackedDates.length} Days Tracked`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between mb-10">
                      {days.map((day, i) => {
                        const isChecked = trackedDates.includes(weekDates[i]);
                        return (
                          <div key={i} className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                              isChecked 
                                ? 'bg-emerald-500/20 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                                : 'bg-white border border-slate-100 opacity-40'
                            }`}>
                              {isChecked && (
                                <motion.span 
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="material-symbols-outlined text-emerald-600 text-base font-bold"
                                >
                                  check
                                </motion.span>
                              )}
                            </div>
                            <span className="text-[9px] font-label-caps text-slate-400 font-semibold">{day[0]}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                      {[
                        { label: "Protein", val: currentStats.protein },
                        { label: "Fibre", val: currentStats.fibre },
                        { label: "Lipids", val: currentStats.lipids }
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <span className="font-label-caps text-[9px] tracking-widest text-secondary block mb-3 uppercase">{stat.label}</span>
                          <span className="font-h2 text-2xl text-primary">{stat.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
