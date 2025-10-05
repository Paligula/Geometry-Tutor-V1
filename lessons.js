// Lesson data structure with 20 lessons for 9th grade Honors Geometry
const lessons = [
    {
        id: 1,
        title: "Introduction to Points, Lines, and Planes",
        duration: "15-20 min",
        videoId: "k5etrWdIY6o",
        diagram: { type: "triangle" },
        practiceProblems: [
            {
                question: "Three points A, B, and C are collinear. If AB = 5 and BC = 3, what is the maximum possible value of AC?",
                answer: "8",
                solution: "If B is between A and C, then AC = AB + BC = 5 + 3 = 8. If B is not between them, AC would be smaller (2). So the maximum is 8."
            },
            {
                question: "How many lines can be drawn through two distinct points?",
                answer: "Exactly one",
                solution: "Two distinct points determine exactly one unique line. This is a fundamental postulate in geometry."
            },
            {
                question: "Points P, Q, R, and S all lie on plane M. Are they necessarily coplanar?",
                answer: "Yes",
                solution: "By definition, if all points lie on the same plane M, then they are coplanar."
            }
        ],
        content: [
            {
                type: "text",
                content: "Welcome to Honors Geometry! Today we'll explore the fundamental building blocks of geometry: points, lines, and planes."
            },
            {
                type: "definition",
                title: "Point",
                content: "A point is an exact location in space. It has no size, only position. We name points with capital letters.",
                example: "Point A, Point B, Point C"
            },
            {
                type: "definition",
                title: "Line",
                content: "A line is a straight path that extends infinitely in both directions. It has no thickness, only length. A line contains infinitely many points.",
                example: "Line AB (written as ↔AB) passes through points A and B"
            },
            {
                type: "definition",
                title: "Plane",
                content: "A plane is a flat surface that extends infinitely in all directions. It has no thickness, only length and width.",
                example: "Plane P or Plane ABC (named by three non-collinear points)"
            },
            {
                type: "example",
                title: "Key Concepts",
                items: [
                    "Collinear points: Points that lie on the same line",
                    "Coplanar points: Points that lie on the same plane",
                    "Line segment: Part of a line with two endpoints (AB or segment AB)",
                    "Ray: Part of a line with one endpoint, extending infinitely in one direction (→AB)"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "If points A, B, and C are collinear with B between A and C, which of the following is true?",
                solution: "Points A, B, and C all lie on the same line, and point B is positioned between A and C on that line. This means AB + BC = AC."
            }
        ],
        quiz: [
            {
                question: "What is a point?",
                answers: [
                    "A location in space with no size, only position",
                    "A straight path extending infinitely",
                    "A flat surface",
                    "A curved line"
                ],
                correct: 0,
                explanation: "A point represents an exact location in space and has no dimensions - no length, width, or height."
            },
            {
                question: "What does it mean for points to be collinear?",
                answers: [
                    "They form a right angle",
                    "They lie on the same line",
                    "They lie on the same plane",
                    "They are the same distance apart"
                ],
                correct: 1,
                explanation: "Collinear points are points that all lie on the same straight line."
            },
            {
                question: "How many points are needed to define a unique line?",
                answers: [
                    "1 point",
                    "2 points",
                    "3 points",
                    "4 points"
                ],
                correct: 1,
                explanation: "Two distinct points determine exactly one unique line."
            },
            {
                question: "What is the difference between a line and a ray?",
                answers: [
                    "A line is curved, a ray is straight",
                    "A line extends infinitely in both directions, a ray has one endpoint",
                    "A line has two endpoints, a ray has none",
                    "There is no difference"
                ],
                correct: 1,
                explanation: "A line extends infinitely in both directions, while a ray has one endpoint and extends infinitely in only one direction."
            },
            {
                question: "How many points are needed to define a plane?",
                answers: [
                    "1 non-collinear point",
                    "2 non-collinear points",
                    "3 non-collinear points",
                    "4 non-collinear points"
                ],
                correct: 2,
                explanation: "Three non-collinear points (points not on the same line) determine exactly one unique plane."
            }
        ]
    },
    {
        id: 2,
        title: "Measuring Segments and Angles",
        duration: "15-20 min",
        videoId: "_n3KZR1DSEo",
        practiceProblems: [
            {
                question: "Point M is the midpoint of segment PQ. If PM = 3x + 5 and MQ = 5x - 3, find x and the length of PQ.",
                answer: "x = 4, PQ = 34",
                solution: "Since M is the midpoint, PM = MQ. So 3x + 5 = 5x - 3, which gives 8 = 2x, so x = 4. PM = 3(4) + 5 = 17, and PQ = 2(17) = 34."
            },
            {
                question: "If ∠ABC measures 73° and ∠DEF measures 107°, find the supplement of each angle.",
                answer: "∠ABC supplement: 107°, ∠DEF supplement: 73°",
                solution: "Supplement of 73° = 180° - 73° = 107°. Supplement of 107° = 180° - 107° = 73°. Notice they are supplements of each other!"
            }
        ],
        content: [
            {
                type: "text",
                content: "Today we'll learn how to measure and work with segments and angles - essential skills for geometry."
            },
            {
                type: "definition",
                title: "Segment Length",
                content: "The distance between two endpoints of a segment. We use the notation AB to represent the length of segment AB.",
                example: "If A is at position 2 and B is at position 7 on a number line, then AB = |7 - 2| = 5 units"
            },
            {
                type: "definition",
                title: "Midpoint",
                content: "The point that divides a segment into two equal parts. If M is the midpoint of AB, then AM = MB.",
                example: "If A is at 2 and B is at 8, the midpoint M is at (2+8)/2 = 5"
            },
            {
                type: "definition",
                title: "Angle",
                content: "Formed by two rays sharing a common endpoint (the vertex). Measured in degrees (°).",
                example: "∠ABC has vertex at B, with rays BA and BC"
            },
            {
                type: "example",
                title: "Angle Classifications",
                items: [
                    "Acute angle: measures between 0° and 90°",
                    "Right angle: measures exactly 90°",
                    "Obtuse angle: measures between 90° and 180°",
                    "Straight angle: measures exactly 180°"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "If ∠ABC = 130° and ∠DEF = 50°, classify each angle.",
                solution: "∠ABC = 130° is an obtuse angle (between 90° and 180°). ∠DEF = 50° is an acute angle (between 0° and 90°)."
            }
        ],
        quiz: [
            {
                question: "What is the midpoint of a segment with endpoints at 4 and 12?",
                answers: ["6", "8", "10", "16"],
                correct: 1,
                explanation: "The midpoint formula is (x₁ + x₂)/2 = (4 + 12)/2 = 16/2 = 8"
            },
            {
                question: "An angle measuring 45° is classified as:",
                answers: ["Acute", "Right", "Obtuse", "Straight"],
                correct: 0,
                explanation: "An acute angle measures between 0° and 90°, so 45° is acute."
            },
            {
                question: "What is the measure of a right angle?",
                answers: ["45°", "60°", "90°", "180°"],
                correct: 2,
                explanation: "By definition, a right angle measures exactly 90°."
            },
            {
                question: "If M is the midpoint of segment AB and AM = 7, what is AB?",
                answers: ["3.5", "7", "14", "21"],
                correct: 2,
                explanation: "Since M is the midpoint, AB = 2 × AM = 2 × 7 = 14"
            },
            {
                question: "An angle measuring 165° is classified as:",
                answers: ["Acute", "Right", "Obtuse", "Straight"],
                correct: 2,
                explanation: "An obtuse angle measures between 90° and 180°, so 165° is obtuse."
            }
        ]
    },
    {
        id: 3,
        title: "Angle Relationships: Complementary and Supplementary",
        duration: "15-20 min",
        videoId: "BTnAlNSgNsY",
        content: [
            {
                type: "text",
                content: "Angles can have special relationships with each other. Today we'll explore complementary and supplementary angles."
            },
            {
                type: "definition",
                title: "Complementary Angles",
                content: "Two angles whose measures add up to 90°. Each angle is called the complement of the other.",
                example: "If ∠A = 30° and ∠B = 60°, then ∠A and ∠B are complementary because 30° + 60° = 90°"
            },
            {
                type: "definition",
                title: "Supplementary Angles",
                content: "Two angles whose measures add up to 180°. Each angle is called the supplement of the other.",
                example: "If ∠C = 110° and ∠D = 70°, then ∠C and ∠D are supplementary because 110° + 70° = 180°"
            },
            {
                type: "example",
                title: "Finding Unknown Angles",
                items: [
                    "To find the complement of 35°: 90° - 35° = 55°",
                    "To find the supplement of 35°: 180° - 35° = 145°",
                    "If two angles are complementary and one is x°, the other is (90 - x)°",
                    "If two angles are supplementary and one is x°, the other is (180 - x)°"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "Two angles are supplementary. One angle measures 3x and the other measures 2x. Find the measure of each angle.",
                solution: "Since they're supplementary: 3x + 2x = 180°. So 5x = 180°, therefore x = 36°. The angles measure 3(36°) = 108° and 2(36°) = 72°."
            }
        ],
        quiz: [
            {
                question: "What is the complement of a 25° angle?",
                answers: ["65°", "75°", "155°", "165°"],
                correct: 0,
                explanation: "Complementary angles add to 90°, so 90° - 25° = 65°"
            },
            {
                question: "What is the supplement of a 125° angle?",
                answers: ["35°", "45°", "55°", "65°"],
                correct: 2,
                explanation: "Supplementary angles add to 180°, so 180° - 125° = 55°"
            },
            {
                question: "Two angles are complementary. If one angle is 42°, what is the other?",
                answers: ["38°", "48°", "58°", "138°"],
                correct: 1,
                explanation: "90° - 42° = 48°"
            },
            {
                question: "If two supplementary angles are equal, what is the measure of each?",
                answers: ["45°", "60°", "90°", "180°"],
                correct: 2,
                explanation: "If x + x = 180°, then 2x = 180°, so x = 90°. Each angle measures 90°."
            },
            {
                question: "Can two obtuse angles be complementary?",
                answers: ["Yes, always", "Yes, sometimes", "No, never", "Only if they're equal"],
                correct: 2,
                explanation: "No. Obtuse angles are greater than 90°, so two of them would add to more than 180°, making it impossible to sum to 90°."
            }
        ]
    },
    {
        id: 4,
        title: "Vertical Angles and Linear Pairs",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "When two lines intersect, they create special angle relationships. Let's explore vertical angles and linear pairs."
            },
            {
                type: "definition",
                title: "Vertical Angles",
                content: "When two lines intersect, they form two pairs of opposite angles called vertical angles. Vertical angles are always congruent (equal in measure).",
                example: "If two lines intersect forming angles of 50°, 130°, 50°, and 130°, the two 50° angles are vertical angles, and the two 130° angles are vertical angles."
            },
            {
                type: "definition",
                title: "Linear Pair",
                content: "Two adjacent angles that form a straight line. Linear pairs are always supplementary (add to 180°).",
                example: "If ∠1 and ∠2 share a side and together form a straight line, they are a linear pair and ∠1 + ∠2 = 180°"
            },
            {
                type: "example",
                title: "Key Properties",
                items: [
                    "Vertical angles are congruent: if ∠1 and ∠3 are vertical, then ∠1 = ∠3",
                    "Linear pairs are supplementary: if ∠1 and ∠2 form a linear pair, then ∠1 + ∠2 = 180°",
                    "When two lines intersect, adjacent angles form linear pairs",
                    "At any intersection, there are 2 pairs of vertical angles and 4 linear pairs"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "Two lines intersect. One angle measures 75°. Find the measures of the other three angles.",
                solution: "The vertical angle to 75° also measures 75°. The two angles forming linear pairs with 75° each measure 180° - 75° = 105°."
            }
        ],
        quiz: [
            {
                question: "If two vertical angles each measure x + 20, what is true?",
                answers: ["They are complementary", "They are supplementary", "They are congruent", "They total 40°"],
                correct: 2,
                explanation: "Vertical angles are always congruent (equal in measure)."
            },
            {
                question: "Two angles form a linear pair. If one measures 65°, what is the other?",
                answers: ["25°", "65°", "115°", "125°"],
                correct: 2,
                explanation: "Linear pairs are supplementary, so 180° - 65° = 115°"
            },
            {
                question: "When two lines intersect, how many pairs of vertical angles are formed?",
                answers: ["1", "2", "3", "4"],
                correct: 1,
                explanation: "Two lines intersecting create exactly 2 pairs of vertical angles."
            },
            {
                question: "If ∠A and ∠B are vertical angles, and ∠A = 3x + 10, ∠B = 5x - 20, find x.",
                answers: ["10", "15", "20", "25"],
                correct: 1,
                explanation: "Since vertical angles are congruent: 3x + 10 = 5x - 20, so 30 = 2x, thus x = 15"
            },
            {
                question: "Can two acute angles form a linear pair?",
                answers: ["Yes, always", "Yes, sometimes", "No, never", "Only if equal"],
                correct: 2,
                explanation: "No. Two acute angles (each less than 90°) would sum to less than 180°, so they cannot form a linear pair."
            }
        ]
    },
    {
        id: 5,
        title: "Parallel Lines and Transversals",
        duration: "15-20 min",
        videoId: "H-E5rlpCVu4",
        content: [
            {
                type: "text",
                content: "When a line intersects two parallel lines, it creates eight angles with special relationships. This line is called a transversal."
            },
            {
                type: "definition",
                title: "Parallel Lines",
                content: "Two lines in the same plane that never intersect. We write this as l || m (line l is parallel to line m).",
                example: "Railroad tracks are parallel - they maintain the same distance apart and never meet."
            },
            {
                type: "definition",
                title: "Transversal",
                content: "A line that intersects two or more lines at different points.",
                example: "If line t crosses lines l and m, then line t is a transversal."
            },
            {
                type: "example",
                title: "Angle Relationships with Parallel Lines",
                items: [
                    "Corresponding angles: Same position at each intersection. They are congruent. (∠1 = ∠5)",
                    "Alternate interior angles: Between the parallel lines, on opposite sides. They are congruent. (∠3 = ∠6)",
                    "Alternate exterior angles: Outside the parallel lines, on opposite sides. They are congruent. (∠1 = ∠8)",
                    "Consecutive interior angles: Between the parallel lines, on same side. They are supplementary. (∠3 + ∠5 = 180°)"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "Lines l and m are parallel, cut by transversal t. If one angle measures 115°, find all other angle measures.",
                solution: "Four angles measure 115° (the given angle and its corresponding, alternate interior, and vertical angles). The other four angles are supplementary to 115°, so they each measure 180° - 115° = 65°."
            }
        ],
        quiz: [
            {
                question: "If two lines are parallel and cut by a transversal, corresponding angles are:",
                answers: ["Complementary", "Supplementary", "Congruent", "Perpendicular"],
                correct: 2,
                explanation: "When parallel lines are cut by a transversal, corresponding angles are always congruent."
            },
            {
                question: "Lines l || m are cut by transversal t. If ∠1 = 70°, what is its corresponding angle?",
                answers: ["70°", "90°", "110°", "180°"],
                correct: 0,
                explanation: "Corresponding angles are congruent when lines are parallel, so the corresponding angle is also 70°."
            },
            {
                question: "Alternate interior angles formed by parallel lines and a transversal are:",
                answers: ["Always congruent", "Always supplementary", "Always complementary", "Not related"],
                correct: 0,
                explanation: "When two parallel lines are cut by a transversal, alternate interior angles are always congruent."
            },
            {
                question: "If l || m and consecutive interior angles are x and 2x, find x.",
                answers: ["30°", "45°", "60°", "90°"],
                correct: 2,
                explanation: "Consecutive interior angles are supplementary: x + 2x = 180°, so 3x = 180°, thus x = 60°"
            },
            {
                question: "What can you conclude if corresponding angles formed by two lines and a transversal are congruent?",
                answers: ["The lines are perpendicular", "The lines are parallel", "The lines intersect", "Nothing specific"],
                correct: 1,
                explanation: "If corresponding angles are congruent, then the two lines are parallel (converse of the corresponding angles theorem)."
            }
        ]
    },
    {
        id: 6,
        title: "Triangle Classification",
        duration: "15-20 min",
        videoId: "BxmZr2YcP4g",
        content: [
            {
                type: "text",
                content: "Triangles are fundamental shapes in geometry. We can classify them by their sides and by their angles."
            },
            {
                type: "definition",
                title: "Classification by Sides",
                content: "Triangles are classified into three types based on side lengths.",
                example: "Scalene: all sides different lengths\nIsosceles: two sides equal length\nEquilateral: all three sides equal length"
            },
            {
                type: "definition",
                title: "Classification by Angles",
                content: "Triangles are also classified by their largest angle.",
                example: "Acute: all three angles are acute (less than 90°)\nRight: one angle is exactly 90°\nObtuse: one angle is obtuse (greater than 90°)"
            },
            {
                type: "example",
                title: "Key Properties",
                items: [
                    "The sum of all angles in any triangle is always 180°",
                    "An equilateral triangle is also equiangular (all angles equal 60°)",
                    "In an isosceles triangle, the angles opposite the equal sides are also equal",
                    "A triangle can be both isosceles and right (45°-45°-90° triangle)"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "A triangle has angles measuring 50°, 60°, and 70°. Classify this triangle by its angles.",
                solution: "All three angles are acute (less than 90°), so this is an acute triangle. Since all angles are different, if we knew the sides, they would all be different lengths (scalene)."
            }
        ],
        quiz: [
            {
                question: "A triangle with sides measuring 5 cm, 5 cm, and 8 cm is classified as:",
                answers: ["Scalene", "Isosceles", "Equilateral", "Right"],
                correct: 1,
                explanation: "The triangle has exactly two equal sides (5 cm each), making it isosceles."
            },
            {
                question: "What is the sum of the angles in any triangle?",
                answers: ["90°", "180°", "270°", "360°"],
                correct: 1,
                explanation: "The Triangle Angle Sum Theorem states that the sum of angles in any triangle is always 180°."
            },
            {
                question: "A triangle has one angle measuring 100°. This triangle is:",
                answers: ["Acute", "Right", "Obtuse", "Equilateral"],
                correct: 2,
                explanation: "Since one angle is greater than 90°, this is an obtuse triangle."
            },
            {
                question: "In a triangle with angles 60°, 60°, and 60°, what can you say about the sides?",
                answers: ["All different", "Two equal", "All equal", "Cannot determine"],
                correct: 2,
                explanation: "This is an equilateral triangle (all angles equal), which means all sides are also equal."
            },
            {
                question: "If two angles in a triangle are 45° and 55°, what is the third angle?",
                answers: ["70°", "80°", "90°", "100°"],
                correct: 1,
                explanation: "The sum must be 180°, so 180° - 45° - 55° = 80°"
            }
        ]
    },
    {
        id: 7,
        title: "Triangle Congruence: SSS and SAS",
        duration: "15-20 min",
        videoId: "eq1frp_ZyP8",
        content: [
            {
                type: "text",
                content: "Two triangles are congruent if they have the same size and shape. Today we'll learn two methods to prove triangles congruent: SSS and SAS."
            },
            {
                type: "definition",
                title: "Congruent Triangles",
                content: "Two triangles are congruent if all corresponding sides are equal and all corresponding angles are equal. We write this as △ABC ≅ △DEF.",
                example: "If △ABC ≅ △DEF, then AB = DE, BC = EF, CA = FD, and ∠A = ∠D, ∠B = ∠E, ∠C = ∠F"
            },
            {
                type: "definition",
                title: "SSS (Side-Side-Side)",
                content: "If three sides of one triangle are congruent to three sides of another triangle, then the triangles are congruent.",
                example: "If AB = DE, BC = EF, and CA = FD, then △ABC ≅ △DEF by SSS"
            },
            {
                type: "definition",
                title: "SAS (Side-Angle-Side)",
                content: "If two sides and the included angle of one triangle are congruent to two sides and the included angle of another triangle, then the triangles are congruent.",
                example: "If AB = DE, ∠B = ∠E, and BC = EF, then △ABC ≅ △DEF by SAS"
            },
            {
                type: "example",
                title: "Important Notes",
                items: [
                    "For SSS, you need all three pairs of corresponding sides to be equal",
                    "For SAS, the angle must be BETWEEN (included by) the two sides",
                    "Once triangles are proven congruent, ALL corresponding parts are equal (CPCTC)",
                    "Order matters in congruence statements: △ABC ≅ △DEF means A↔D, B↔E, C↔F"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "Given: AB = XY, BC = YZ, AC = XZ. Prove △ABC ≅ △XYZ.",
                solution: "Since all three pairs of corresponding sides are congruent (AB = XY, BC = YZ, AC = XZ), the triangles are congruent by SSS postulate."
            }
        ],
        quiz: [
            {
                question: "What does SSS stand for?",
                answers: ["Side-Side-Side", "Side-Shape-Side", "Square-Side-Side", "Same-Side-Similar"],
                correct: 0,
                explanation: "SSS stands for Side-Side-Side, a method of proving triangle congruence."
            },
            {
                question: "For SAS congruence, where must the angle be located?",
                answers: ["Anywhere in the triangle", "Between the two sides", "Opposite one of the sides", "At the largest vertex"],
                correct: 1,
                explanation: "In SAS, the angle must be the included angle - the angle between the two given sides."
            },
            {
                question: "If △ABC ≅ △DEF by SSS, what can you conclude?",
                answers: ["Only the sides are equal", "Only the angles are equal", "All sides and all angles are equal", "The triangles are similar but not congruent"],
                correct: 2,
                explanation: "When triangles are congruent, ALL corresponding parts are equal - both sides and angles."
            },
            {
                question: "Which is NOT enough information to prove triangles congruent?",
                answers: ["Three sides equal", "Two sides and included angle equal", "Two sides and non-included angle equal", "All of these prove congruence"],
                correct: 2,
                explanation: "Two sides and a non-included angle is NOT sufficient to prove congruence. The angle must be between the two sides for SAS."
            },
            {
                question: "If AB = 5, BC = 7, CA = 9, and DE = 5, EF = 7, FD = 9, can you prove △ABC ≅ △DEF?",
                answers: ["Yes, by SSS", "Yes, by SAS", "No, not enough info", "Yes, but method unknown"],
                correct: 0,
                explanation: "All three pairs of corresponding sides are equal, so the triangles are congruent by SSS."
            }
        ]
    },
    {
        id: 8,
        title: "Triangle Congruence: ASA and AAS",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "We continue learning methods to prove triangle congruence. Today we'll explore ASA and AAS postulates."
            },
            {
                type: "definition",
                title: "ASA (Angle-Side-Angle)",
                content: "If two angles and the included side of one triangle are congruent to two angles and the included side of another triangle, then the triangles are congruent.",
                example: "If ∠A = ∠D, AB = DE, and ∠B = ∠E, then △ABC ≅ △DEF by ASA"
            },
            {
                type: "definition",
                title: "AAS (Angle-Angle-Side)",
                content: "If two angles and a non-included side of one triangle are congruent to two angles and the corresponding non-included side of another triangle, then the triangles are congruent.",
                example: "If ∠A = ∠D, ∠B = ∠E, and BC = EF (non-included side), then △ABC ≅ △DEF by AAS"
            },
            {
                type: "example",
                title: "Summary of Congruence Methods",
                items: [
                    "SSS: Three sides",
                    "SAS: Two sides and included angle",
                    "ASA: Two angles and included side",
                    "AAS: Two angles and non-included side",
                    "Note: AAA (three angles) does NOT prove congruence, only similarity!"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "Given: ∠P = ∠S, ∠Q = ∠T, and PR = SU. Which congruence method proves △PQR ≅ △STU?",
                solution: "We have two angles (∠P = ∠S and ∠Q = ∠T) and a side (PR = SU). Since PR is not between angles P and Q, the side is non-included. Therefore, △PQR ≅ △STU by AAS."
            }
        ],
        quiz: [
            {
                question: "What does ASA stand for?",
                answers: ["Angle-Side-Angle", "All-Sides-Angles", "Angle-Shape-Angle", "Adjacent-Side-Angle"],
                correct: 0,
                explanation: "ASA stands for Angle-Side-Angle, where the side is between (included by) the two angles."
            },
            {
                question: "Can you prove triangles congruent with AAA (three angles)?",
                answers: ["Yes, always", "Yes, sometimes", "No, never", "Only for right triangles"],
                correct: 2,
                explanation: "AAA only proves similarity, not congruence. Triangles can have the same angles but different sizes."
            },
            {
                question: "If ∠A = ∠X, AB = XY, ∠B = ∠Y, which method proves △ABC ≅ △XYZ?",
                answers: ["SSS", "SAS", "ASA", "AAS"],
                correct: 2,
                explanation: "We have Angle A = Angle X, Side AB = XY, Angle B = Angle Y. The side is between the angles, so this is ASA."
            },
            {
                question: "What's the difference between ASA and AAS?",
                answers: ["ASA uses included side, AAS uses non-included side", "ASA is for right triangles only", "There is no difference", "AAS requires all sides equal"],
                correct: 0,
                explanation: "In ASA, the side is between the two angles (included). In AAS, the side is not between the two angles (non-included)."
            },
            {
                question: "If you know two angles in a triangle are equal to two angles in another triangle, what can you determine about the third angles?",
                answers: ["Nothing", "They are supplementary", "They are equal", "They are complementary"],
                correct: 2,
                explanation: "Since all triangle angles sum to 180°, if two pairs of angles are equal, the third pair must also be equal."
            }
        ]
    },
    {
        id: 9,
        title: "Isosceles and Equilateral Triangles",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "Isosceles and equilateral triangles have special properties that make them unique and useful in geometry."
            },
            {
                type: "definition",
                title: "Isosceles Triangle Theorem",
                content: "If two sides of a triangle are congruent, then the angles opposite those sides are congruent.",
                example: "In △ABC, if AB = AC, then ∠B = ∠C. These equal angles are called base angles."
            },
            {
                type: "definition",
                title: "Converse of Isosceles Triangle Theorem",
                content: "If two angles of a triangle are congruent, then the sides opposite those angles are congruent.",
                example: "In △ABC, if ∠B = ∠C, then AB = AC"
            },
            {
                type: "definition",
                title: "Equilateral Triangle Properties",
                content: "An equilateral triangle has all three sides equal, which means all three angles are also equal. Each angle measures 60°.",
                example: "If △ABC is equilateral, then AB = BC = CA and ∠A = ∠B = ∠C = 60°"
            },
            {
                type: "example",
                title: "Key Vocabulary",
                items: [
                    "Legs: The two congruent sides of an isosceles triangle",
                    "Base: The third side of an isosceles triangle",
                    "Vertex angle: The angle between the two legs",
                    "Base angles: The two angles opposite the legs (these are always equal)"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "In isosceles △ABC with AB = AC, the vertex angle ∠A = 40°. Find the base angles.",
                solution: "Since the angles sum to 180°: ∠B + ∠C + 40° = 180°. Since ∠B = ∠C (base angles), we have 2∠B = 140°, so ∠B = ∠C = 70°."
            }
        ],
        quiz: [
            {
                question: "In an isosceles triangle, if two sides are equal, what can you conclude about the opposite angles?",
                answers: ["They are complementary", "They are supplementary", "They are congruent", "They are perpendicular"],
                correct: 2,
                explanation: "By the Isosceles Triangle Theorem, angles opposite the equal sides are congruent (equal)."
            },
            {
                question: "What is the measure of each angle in an equilateral triangle?",
                answers: ["45°", "60°", "90°", "120°"],
                correct: 1,
                explanation: "In an equilateral triangle, all angles are equal. Since they sum to 180°, each is 180° ÷ 3 = 60°."
            },
            {
                question: "In △ABC with AB = AC, if ∠B = 65°, what is ∠C?",
                answers: ["25°", "50°", "65°", "115°"],
                correct: 2,
                explanation: "Since AB = AC, the base angles ∠B and ∠C are equal. Therefore, ∠C = 65°."
            },
            {
                question: "If △DEF is equilateral, which statement is FALSE?",
                answers: ["DE = EF = FD", "∠D = ∠E = ∠F", "Each angle measures 60°", "The triangle has a right angle"],
                correct: 3,
                explanation: "An equilateral triangle has all 60° angles, so it cannot have a right angle (90°)."
            },
            {
                question: "In isosceles △PQR with PQ = PR and vertex angle ∠P = 80°, find ∠Q.",
                answers: ["40°", "50°", "80°", "100°"],
                correct: 1,
                explanation: "∠Q + ∠R + 80° = 180°, and ∠Q = ∠R, so 2∠Q = 100°, thus ∠Q = 50°."
            }
        ]
    },
    {
        id: 10,
        title: "Quadrilaterals: Properties and Classification",
        duration: "15-20 min",
        videoId: "xMbuqmidfOA",
        content: [
            {
                type: "text",
                content: "A quadrilateral is any four-sided polygon. Today we'll explore the different types of quadrilaterals and their properties."
            },
            {
                type: "definition",
                title: "Quadrilateral",
                content: "A polygon with four sides and four angles. The sum of the interior angles is always 360°.",
                example: "Examples include squares, rectangles, parallelograms, trapezoids, and rhombuses"
            },
            {
                type: "example",
                title: "Types of Quadrilaterals",
                items: [
                    "Parallelogram: Both pairs of opposite sides are parallel and equal",
                    "Rectangle: Parallelogram with four right angles",
                    "Rhombus: Parallelogram with all four sides equal",
                    "Square: Rectangle with all four sides equal (also a rhombus)",
                    "Trapezoid: Exactly one pair of parallel sides",
                    "Kite: Two pairs of consecutive sides are equal"
                ]
            },
            {
                type: "definition",
                title: "Parallelogram Properties",
                content: "In a parallelogram: opposite sides are equal and parallel, opposite angles are equal, consecutive angles are supplementary, and diagonals bisect each other.",
                example: "In parallelogram ABCD: AB = CD, BC = AD, AB || CD, BC || AD, ∠A = ∠C, ∠B = ∠D"
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "In parallelogram ABCD, ∠A = 65°. Find ∠B, ∠C, and ∠D.",
                solution: "∠C = ∠A = 65° (opposite angles). ∠B and ∠D are supplementary to ∠A, so ∠B = ∠D = 180° - 65° = 115°."
            }
        ],
        quiz: [
            {
                question: "What is the sum of interior angles in any quadrilateral?",
                answers: ["180°", "270°", "360°", "540°"],
                correct: 2,
                explanation: "The sum of interior angles in any quadrilateral is always 360°."
            },
            {
                question: "Which quadrilateral has all sides equal and all angles equal to 90°?",
                answers: ["Rectangle", "Rhombus", "Square", "Parallelogram"],
                correct: 2,
                explanation: "A square has all four sides equal and all four angles equal to 90°."
            },
            {
                question: "In a parallelogram, opposite angles are:",
                answers: ["Complementary", "Supplementary", "Congruent", "Perpendicular"],
                correct: 2,
                explanation: "In a parallelogram, opposite angles are always congruent (equal)."
            },
            {
                question: "Which quadrilateral has exactly one pair of parallel sides?",
                answers: ["Parallelogram", "Rectangle", "Trapezoid", "Rhombus"],
                correct: 2,
                explanation: "A trapezoid is defined as a quadrilateral with exactly one pair of parallel sides."
            },
            {
                question: "If three angles of a quadrilateral measure 85°, 90°, and 100°, what is the fourth angle?",
                answers: ["75°", "85°", "90°", "95°"],
                correct: 1,
                explanation: "The sum must be 360°, so 360° - 85° - 90° - 100° = 85°."
            }
        ]
    },
    {
        id: 11,
        title: "Properties of Parallelograms",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "Parallelograms have many special properties that distinguish them from other quadrilaterals. Let's explore these in detail."
            },
            {
                type: "definition",
                title: "Opposite Sides Property",
                content: "In a parallelogram, both pairs of opposite sides are congruent (equal in length) and parallel.",
                example: "In parallelogram ABCD: AB = CD and AB || CD; BC = AD and BC || AD"
            },
            {
                type: "definition",
                title: "Opposite Angles Property",
                content: "In a parallelogram, both pairs of opposite angles are congruent.",
                example: "In parallelogram ABCD: ∠A = ∠C and ∠B = ∠D"
            },
            {
                type: "definition",
                title: "Consecutive Angles Property",
                content: "In a parallelogram, consecutive (adjacent) angles are supplementary - they add up to 180°.",
                example: "In parallelogram ABCD: ∠A + ∠B = 180°, ∠B + ∠C = 180°, etc."
            },
            {
                type: "example",
                title: "Diagonal Properties",
                items: [
                    "The diagonals of a parallelogram bisect each other",
                    "This means each diagonal cuts the other into two equal parts",
                    "If the diagonals are equal, the parallelogram is a rectangle",
                    "If the diagonals are perpendicular, the parallelogram is a rhombus"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "In parallelogram PQRS, ∠P = 3x + 20 and ∠R = 5x - 40. Find x and the measure of ∠P.",
                solution: "Since opposite angles are equal: 3x + 20 = 5x - 40. Solving: 60 = 2x, so x = 30. Therefore, ∠P = 3(30) + 20 = 110°."
            }
        ],
        quiz: [
            {
                question: "In a parallelogram, consecutive angles are:",
                answers: ["Equal", "Complementary", "Supplementary", "Perpendicular"],
                correct: 2,
                explanation: "Consecutive angles in a parallelogram are supplementary - they add up to 180°."
            },
            {
                question: "The diagonals of a parallelogram:",
                answers: ["Are always equal", "Are always perpendicular", "Bisect each other", "Never intersect"],
                correct: 2,
                explanation: "The diagonals of any parallelogram bisect each other (cut each other in half)."
            },
            {
                question: "In parallelogram ABCD, if ∠A = 70°, what is ∠C?",
                answers: ["70°", "90°", "110°", "140°"],
                correct: 0,
                explanation: "Opposite angles in a parallelogram are congruent, so ∠C = ∠A = 70°."
            },
            {
                question: "In parallelogram WXYZ, if ∠W = 130°, what is ∠X?",
                answers: ["40°", "50°", "60°", "130°"],
                correct: 1,
                explanation: "Consecutive angles are supplementary: ∠X = 180° - 130° = 50°."
            },
            {
                question: "If the diagonals of a parallelogram are perpendicular, what special type is it?",
                answers: ["Rectangle", "Square", "Rhombus", "Trapezoid"],
                correct: 2,
                explanation: "A parallelogram with perpendicular diagonals is a rhombus."
            }
        ]
    },
    {
        id: 12,
        title: "Special Parallelograms: Rectangles, Rhombuses, and Squares",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "Rectangles, rhombuses, and squares are special types of parallelograms with additional properties."
            },
            {
                type: "definition",
                title: "Rectangle",
                content: "A parallelogram with four right angles. All rectangle properties include parallelogram properties plus: all angles are 90°, and diagonals are congruent.",
                example: "In rectangle ABCD: ∠A = ∠B = ∠C = ∠D = 90°, and diagonal AC = diagonal BD"
            },
            {
                type: "definition",
                title: "Rhombus",
                content: "A parallelogram with four congruent sides. All rhombus properties include parallelogram properties plus: all sides are equal, diagonals are perpendicular, and diagonals bisect the angles.",
                example: "In rhombus PQRS: PQ = QR = RS = SP, diagonals PR ⊥ QS"
            },
            {
                type: "definition",
                title: "Square",
                content: "A parallelogram that is both a rectangle and a rhombus. It has all properties of both: four right angles, four equal sides, diagonals are congruent and perpendicular.",
                example: "A square is the most special quadrilateral - it has all the properties of rectangles, rhombuses, and parallelograms"
            },
            {
                type: "example",
                title: "Property Summary",
                items: [
                    "All squares are rectangles and rhombuses",
                    "All rectangles and rhombuses are parallelograms",
                    "A rectangle with all sides equal is a square",
                    "A rhombus with right angles is a square"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "The diagonals of quadrilateral ABCD are congruent and perpendicular. What type of quadrilateral is it?",
                solution: "If diagonals are congruent, it could be a rectangle. If diagonals are perpendicular, it could be a rhombus. Since both properties are present, ABCD must be a square."
            }
        ],
        quiz: [
            {
                question: "What makes a rectangle different from a general parallelogram?",
                answers: ["Opposite sides are parallel", "All angles are right angles", "Diagonals bisect each other", "Opposite sides are equal"],
                correct: 1,
                explanation: "A rectangle has all the properties of a parallelogram, plus all angles are right angles (90°)."
            },
            {
                question: "In a rhombus, the diagonals are:",
                answers: ["Equal and parallel", "Equal and perpendicular", "Perpendicular and bisect each other", "Parallel and congruent"],
                correct: 2,
                explanation: "In a rhombus, diagonals are perpendicular and bisect each other."
            },
            {
                question: "Which quadrilateral is both a rectangle and a rhombus?",
                answers: ["Parallelogram", "Trapezoid", "Square", "Kite"],
                correct: 2,
                explanation: "A square is the only quadrilateral that has all properties of both rectangles and rhombuses."
            },
            {
                question: "If a parallelogram has one right angle, what can you conclude?",
                answers: ["It's a square", "It's a rhombus", "It's a rectangle", "Nothing special"],
                correct: 2,
                explanation: "If a parallelogram has one right angle, then all angles are right angles (consecutive angles are supplementary), making it a rectangle."
            },
            {
                question: "In rectangle ABCD, if AC = 10, what is BD?",
                answers: ["5", "10", "15", "20"],
                correct: 1,
                explanation: "In a rectangle, diagonals are congruent, so BD = AC = 10."
            }
        ]
    },
    {
        id: 13,
        title: "Trapezoids and Kites",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "Trapezoids and kites are quadrilaterals with unique properties that differ from parallelograms."
            },
            {
                type: "definition",
                title: "Trapezoid",
                content: "A quadrilateral with exactly one pair of parallel sides. The parallel sides are called bases, and the non-parallel sides are called legs.",
                example: "In trapezoid ABCD with AB || CD: AB and CD are bases, BC and AD are legs"
            },
            {
                type: "definition",
                title: "Isosceles Trapezoid",
                content: "A trapezoid with congruent legs. In an isosceles trapezoid: legs are equal, base angles are equal, and diagonals are equal.",
                example: "In isosceles trapezoid ABCD: if AB || CD and AD = BC, then ∠A = ∠B and ∠C = ∠D"
            },
            {
                type: "definition",
                title: "Kite",
                content: "A quadrilateral with two pairs of consecutive congruent sides. In a kite: diagonals are perpendicular, one diagonal bisects the other, and one pair of opposite angles are equal.",
                example: "In kite ABCD with AB = AD and CB = CD: AC ⊥ BD, and ∠B = ∠D"
            },
            {
                type: "example",
                title: "Midsegment of a Trapezoid",
                items: [
                    "The midsegment connects the midpoints of the legs",
                    "The midsegment is parallel to both bases",
                    "The midsegment length equals the average of the base lengths",
                    "Formula: midsegment = (base₁ + base₂) ÷ 2"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "In trapezoid PQRS with PQ || SR, PQ = 12 cm and SR = 8 cm. Find the length of the midsegment.",
                solution: "Midsegment = (PQ + SR) ÷ 2 = (12 + 8) ÷ 2 = 20 ÷ 2 = 10 cm"
            }
        ],
        quiz: [
            {
                question: "How many pairs of parallel sides does a trapezoid have?",
                answers: ["0", "1", "2", "3"],
                correct: 1,
                explanation: "A trapezoid has exactly one pair of parallel sides by definition."
            },
            {
                question: "In an isosceles trapezoid, which property is TRUE?",
                answers: ["All sides are equal", "All angles are equal", "The legs are equal", "The bases are equal"],
                correct: 2,
                explanation: "An isosceles trapezoid has congruent (equal) legs."
            },
            {
                question: "In a kite, the diagonals are:",
                answers: ["Parallel", "Congruent", "Perpendicular", "Bisect each other"],
                correct: 2,
                explanation: "The diagonals of a kite are always perpendicular to each other."
            },
            {
                question: "If a trapezoid has bases of length 14 and 10, what is the length of its midsegment?",
                answers: ["4", "12", "18", "24"],
                correct: 1,
                explanation: "Midsegment = (14 + 10) ÷ 2 = 24 ÷ 2 = 12"
            },
            {
                question: "Which quadrilateral has two pairs of consecutive equal sides?",
                answers: ["Trapezoid", "Kite", "Rectangle", "Rhombus"],
                correct: 1,
                explanation: "A kite is defined as having two pairs of consecutive (adjacent) congruent sides."
            }
        ]
    },
    {
        id: 14,
        title: "Polygons: Classification and Angle Measures",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "Beyond triangles and quadrilaterals, there are many types of polygons. Today we'll learn how to classify them and find their angle measures."
            },
            {
                type: "definition",
                title: "Polygon",
                content: "A closed figure formed by three or more line segments (sides) that intersect only at their endpoints (vertices).",
                example: "Triangle (3 sides), Quadrilateral (4 sides), Pentagon (5 sides), Hexagon (6 sides), Heptagon (7 sides), Octagon (8 sides)"
            },
            {
                type: "definition",
                title: "Regular Polygon",
                content: "A polygon that is both equilateral (all sides equal) and equiangular (all angles equal).",
                example: "A regular hexagon has all 6 sides equal and all 6 angles equal"
            },
            {
                type: "definition",
                title: "Interior Angle Sum Formula",
                content: "The sum of interior angles in a polygon with n sides is: (n - 2) × 180°",
                example: "For a pentagon (5 sides): (5 - 2) × 180° = 3 × 180° = 540°"
            },
            {
                type: "example",
                title: "Finding Angle Measures",
                items: [
                    "Sum of interior angles = (n - 2) × 180°",
                    "Each interior angle of regular polygon = [(n - 2) × 180°] ÷ n",
                    "Sum of exterior angles = 360° (for any polygon)",
                    "Each exterior angle of regular polygon = 360° ÷ n"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "Find the measure of each interior angle of a regular octagon.",
                solution: "n = 8. Each angle = [(8 - 2) × 180°] ÷ 8 = [6 × 180°] ÷ 8 = 1080° ÷ 8 = 135°"
            }
        ],
        quiz: [
            {
                question: "What is a polygon with 6 sides called?",
                answers: ["Pentagon", "Hexagon", "Heptagon", "Octagon"],
                correct: 1,
                explanation: "A hexagon is a polygon with 6 sides."
            },
            {
                question: "What is the sum of interior angles in a pentagon?",
                answers: ["360°", "450°", "540°", "720°"],
                correct: 2,
                explanation: "Using (n - 2) × 180° with n = 5: (5 - 2) × 180° = 540°"
            },
            {
                question: "What is the sum of exterior angles in any polygon?",
                answers: ["180°", "360°", "540°", "It varies"],
                correct: 1,
                explanation: "The sum of exterior angles of any polygon is always 360°."
            },
            {
                question: "Each interior angle of a regular polygon measures 120°. How many sides does it have?",
                answers: ["5", "6", "7", "8"],
                correct: 1,
                explanation: "Each angle = [(n-2) × 180°] ÷ n = 120°. Solving: (n-2) × 180° = 120n, so n = 6 (hexagon)."
            },
            {
                question: "What makes a polygon 'regular'?",
                answers: ["All sides are equal", "All angles are equal", "Both sides and angles are equal", "It has an even number of sides"],
                correct: 2,
                explanation: "A regular polygon must be both equilateral (equal sides) and equiangular (equal angles)."
            }
        ]
    },
    {
        id: 15,
        title: "Perimeter and Area of Polygons",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "Learning to calculate perimeter and area is essential for solving real-world geometry problems."
            },
            {
                type: "definition",
                title: "Perimeter",
                content: "The distance around a polygon. Found by adding all side lengths.",
                example: "For a rectangle with length 8 and width 5: P = 2(8) + 2(5) = 16 + 10 = 26 units"
            },
            {
                type: "definition",
                title: "Area",
                content: "The amount of space inside a polygon, measured in square units.",
                example: "For a rectangle with length 8 and width 5: A = 8 × 5 = 40 square units"
            },
            {
                type: "example",
                title: "Area Formulas",
                items: [
                    "Rectangle: A = length × width",
                    "Square: A = side²",
                    "Triangle: A = ½ × base × height",
                    "Parallelogram: A = base × height",
                    "Trapezoid: A = ½ × (base₁ + base₂) × height"
                ]
            },
            {
                type: "practice",
                title: "Example Problem 1",
                content: "Find the area of a triangle with base 12 cm and height 8 cm.",
                solution: "A = ½ × base × height = ½ × 12 × 8 = ½ × 96 = 48 cm²"
            },
            {
                type: "practice",
                title: "Example Problem 2",
                content: "A trapezoid has bases of 10 in and 14 in, with height 6 in. Find its area.",
                solution: "A = ½ × (base₁ + base₂) × height = ½ × (10 + 14) × 6 = ½ × 24 × 6 = 72 in²"
            }
        ],
        quiz: [
            {
                question: "What is the perimeter of a square with side length 7 cm?",
                answers: ["14 cm", "21 cm", "28 cm", "49 cm"],
                correct: 2,
                explanation: "Perimeter of square = 4 × side = 4 × 7 = 28 cm"
            },
            {
                question: "What is the area of a rectangle with length 9 and width 4?",
                answers: ["13", "26", "36", "52"],
                correct: 2,
                explanation: "Area = length × width = 9 × 4 = 36 square units"
            },
            {
                question: "A triangle has base 10 and height 6. What is its area?",
                answers: ["16", "30", "40", "60"],
                correct: 1,
                explanation: "Area = ½ × base × height = ½ × 10 × 6 = 30 square units"
            },
            {
                question: "If a square has area 64 cm², what is its perimeter?",
                answers: ["16 cm", "24 cm", "32 cm", "64 cm"],
                correct: 2,
                explanation: "Side = √64 = 8 cm, so Perimeter = 4 × 8 = 32 cm"
            },
            {
                question: "A parallelogram has base 12 and height 5. What is its area?",
                answers: ["17", "34", "60", "120"],
                correct: 2,
                explanation: "Area of parallelogram = base × height = 12 × 5 = 60 square units"
            }
        ]
    },
    {
        id: 16,
        title: "Circles: Basic Properties and Terminology",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "Circles are unique shapes with their own special properties and vocabulary. Let's explore the basics of circles."
            },
            {
                type: "definition",
                title: "Circle",
                content: "The set of all points in a plane that are equidistant from a given point called the center.",
                example: "Circle with center O and radius r contains all points exactly r units from O"
            },
            {
                type: "example",
                title: "Circle Terminology",
                items: [
                    "Radius: Distance from center to any point on the circle",
                    "Diameter: Distance across the circle through the center (d = 2r)",
                    "Chord: Segment connecting two points on the circle",
                    "Tangent: Line that touches the circle at exactly one point",
                    "Secant: Line that intersects the circle at two points"
                ]
            },
            {
                type: "definition",
                title: "Arc",
                content: "A portion of the circle between two points. A minor arc is less than 180°, a major arc is greater than 180°, and a semicircle is exactly 180°.",
                example: "If points A and B are on a circle, arc AB is the curved path from A to B along the circle"
            },
            {
                type: "definition",
                title: "Central Angle",
                content: "An angle whose vertex is at the center of the circle. The measure of an arc equals the measure of its central angle.",
                example: "If ∠AOB = 60° (where O is the center), then arc AB = 60°"
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "A circle has radius 5 cm. What is its diameter?",
                solution: "Diameter = 2 × radius = 2 × 5 = 10 cm"
            }
        ],
        quiz: [
            {
                question: "What is the relationship between radius and diameter?",
                answers: ["d = r", "d = 2r", "d = r²", "d = r/2"],
                correct: 1,
                explanation: "The diameter is always twice the radius: d = 2r"
            },
            {
                question: "What is a chord?",
                answers: ["The center of a circle", "A line segment connecting two points on a circle", "The distance from center to edge", "A curved portion of a circle"],
                correct: 1,
                explanation: "A chord is a segment connecting any two points on the circle."
            },
            {
                question: "A tangent line touches a circle at how many points?",
                answers: ["0", "1", "2", "Infinitely many"],
                correct: 1,
                explanation: "By definition, a tangent touches the circle at exactly one point."
            },
            {
                question: "If a circle has diameter 18, what is its radius?",
                answers: ["6", "9", "18", "36"],
                correct: 1,
                explanation: "Radius = diameter ÷ 2 = 18 ÷ 2 = 9"
            },
            {
                question: "What is a semicircle?",
                answers: ["Half of a circle", "A 90° arc", "A 45° arc", "The center of a circle"],
                correct: 0,
                explanation: "A semicircle is half of a circle, forming a 180° arc."
            }
        ]
    },
    {
        id: 17,
        title: "Circumference and Area of Circles",
        duration: "15-20 min",
        videoId: "vnYQaZPDks4",
        content: [
            {
                type: "text",
                content: "Today we'll learn how to calculate the circumference and area of circles using the special number π (pi)."
            },
            {
                type: "definition",
                title: "Pi (π)",
                content: "Pi is the ratio of a circle's circumference to its diameter. It's an irrational number approximately equal to 3.14159...",
                example: "π ≈ 3.14 or π ≈ 22/7 (for approximations)"
            },
            {
                type: "definition",
                title: "Circumference",
                content: "The distance around a circle. Formula: C = 2πr or C = πd",
                example: "For a circle with radius 5: C = 2π(5) = 10π ≈ 31.4 units"
            },
            {
                type: "definition",
                title: "Area of a Circle",
                content: "The space inside a circle. Formula: A = πr²",
                example: "For a circle with radius 5: A = π(5)² = 25π ≈ 78.5 square units"
            },
            {
                type: "example",
                title: "Problem-Solving Tips",
                items: [
                    "Always square the radius before multiplying by π for area",
                    "You can leave answers in terms of π (like 25π) or use 3.14 for approximations",
                    "If given diameter, find radius first (r = d/2)",
                    "Units for circumference are linear (cm, m), for area are square (cm², m²)"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "Find the circumference and area of a circle with diameter 12 cm.",
                solution: "First find radius: r = 12/2 = 6 cm. Circumference: C = πd = 12π ≈ 37.7 cm. Area: A = πr² = π(6)² = 36π ≈ 113.1 cm²"
            }
        ],
        quiz: [
            {
                question: "What is the formula for the circumference of a circle?",
                answers: ["C = πr²", "C = 2πr", "C = πd²", "C = 4πr"],
                correct: 1,
                explanation: "The circumference formula is C = 2πr (or equivalently C = πd)."
            },
            {
                question: "What is the area of a circle with radius 4?",
                answers: ["8π", "12π", "16π", "64π"],
                correct: 2,
                explanation: "Area = πr² = π(4)² = 16π square units"
            },
            {
                question: "If a circle has circumference 20π, what is its radius?",
                answers: ["5", "10", "20", "40"],
                correct: 1,
                explanation: "C = 2πr, so 20π = 2πr. Dividing by 2π gives r = 10."
            },
            {
                question: "A circle has diameter 10 cm. What is its area?",
                answers: ["10π cm²", "25π cm²", "50π cm²", "100π cm²"],
                correct: 1,
                explanation: "Radius = 10/2 = 5 cm. Area = π(5)² = 25π cm²"
            },
            {
                question: "If you double the radius of a circle, what happens to its area?",
                answers: ["Doubles", "Triples", "Quadruples", "Stays the same"],
                correct: 2,
                explanation: "If r becomes 2r, then A = π(2r)² = 4πr², which is 4 times the original area."
            }
        ]
    },
    {
        id: 18,
        title: "The Pythagorean Theorem",
        duration: "15-20 min",
        videoId: "AA6RfgP-AHU",
        diagram: { type: "triangle" },
        practiceProblems: [
            {
                question: "A ladder is leaning against a wall. The base of the ladder is 6 feet from the wall, and the ladder reaches 8 feet up the wall. How long is the ladder?",
                answer: "10 feet",
                solution: "Using the Pythagorean theorem: a² + b² = c². So 6² + 8² = c², which gives 36 + 64 = 100, therefore c = 10 feet."
            },
            {
                question: "A right triangle has a hypotenuse of 25 cm and one leg of 7 cm. Find the other leg.",
                answer: "24 cm",
                solution: "7² + b² = 25², so 49 + b² = 625, thus b² = 576, and b = 24 cm. This is a 7-24-25 Pythagorean triple!"
            },
            {
                question: "Is a triangle with sides 9, 12, and 15 a right triangle?",
                answer: "Yes",
                solution: "Check if 9² + 12² = 15². We get 81 + 144 = 225, which equals 15² = 225. Yes, it's a right triangle (3-4-5 triple times 3)."
            }
        ],
        content: [
            {
                type: "text",
                content: "The Pythagorean Theorem is one of the most famous and useful theorems in mathematics. It relates the sides of a right triangle."
            },
            {
                type: "definition",
                title: "Pythagorean Theorem",
                content: "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c²",
                example: "In a right triangle with legs 3 and 4: 3² + 4² = c², so 9 + 16 = c², thus c² = 25, and c = 5"
            },
            {
                type: "definition",
                title: "Hypotenuse",
                content: "The longest side of a right triangle, opposite the right angle. In the formula a² + b² = c², c represents the hypotenuse.",
                example: "In a 3-4-5 right triangle, 5 is the hypotenuse"
            },
            {
                type: "example",
                title: "Common Pythagorean Triples",
                items: [
                    "3-4-5 (and multiples: 6-8-10, 9-12-15, etc.)",
                    "5-12-13 (and multiples: 10-24-26, etc.)",
                    "8-15-17",
                    "7-24-25"
                ]
            },
            {
                type: "practice",
                title: "Example Problem 1",
                content: "Find the length of the hypotenuse in a right triangle with legs 6 and 8.",
                solution: "a² + b² = c², so 6² + 8² = c², thus 36 + 64 = c², so c² = 100, therefore c = 10"
            },
            {
                type: "practice",
                title: "Example Problem 2",
                content: "A right triangle has hypotenuse 13 and one leg 5. Find the other leg.",
                solution: "5² + b² = 13², so 25 + b² = 169, thus b² = 144, therefore b = 12"
            }
        ],
        quiz: [
            {
                question: "What is the Pythagorean Theorem formula?",
                answers: ["a + b = c", "a² + b² = c²", "a² + b = c²", "ab = c²"],
                correct: 1,
                explanation: "The Pythagorean Theorem states that a² + b² = c² for right triangles."
            },
            {
                question: "In a right triangle with legs 9 and 12, what is the hypotenuse?",
                answers: ["15", "18", "21", "24"],
                correct: 0,
                explanation: "9² + 12² = c², so 81 + 144 = 225, thus c = 15 (this is a 3-4-5 triple scaled by 3)"
            },
            {
                question: "Which side of a right triangle is the hypotenuse?",
                answers: ["The shortest side", "The longest side", "Either leg", "Any side"],
                correct: 1,
                explanation: "The hypotenuse is always the longest side, opposite the right angle."
            },
            {
                question: "A right triangle has hypotenuse 10 and one leg 6. Find the other leg.",
                answers: ["4", "6", "8", "12"],
                correct: 2,
                explanation: "6² + b² = 10², so 36 + b² = 100, thus b² = 64, so b = 8"
            },
            {
                question: "Which of these is a Pythagorean triple?",
                answers: ["2-3-4", "4-5-6", "5-12-13", "6-7-8"],
                correct: 2,
                explanation: "5-12-13 is a Pythagorean triple because 5² + 12² = 25 + 144 = 169 = 13²"
            }
        ]
    },
    {
        id: 19,
        title: "Distance and Midpoint Formulas",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "We can use coordinate geometry to find distances and midpoints between points on a coordinate plane."
            },
            {
                type: "definition",
                title: "Distance Formula",
                content: "The distance between two points (x₁, y₁) and (x₂, y₂) is: d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
                example: "Distance between (1, 2) and (4, 6): d = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5"
            },
            {
                type: "definition",
                title: "Midpoint Formula",
                content: "The midpoint between two points (x₁, y₁) and (x₂, y₂) is: M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                example: "Midpoint of (1, 2) and (5, 8): M = ((1+5)/2, (2+8)/2) = (3, 5)"
            },
            {
                type: "example",
                title: "Connection to Pythagorean Theorem",
                items: [
                    "The distance formula is derived from the Pythagorean Theorem",
                    "The horizontal distance is |x₂ - x₁|",
                    "The vertical distance is |y₂ - y₁|",
                    "These form the legs of a right triangle, with the distance as the hypotenuse"
                ]
            },
            {
                type: "practice",
                title: "Example Problem",
                content: "Find the distance and midpoint between points A(2, 3) and B(6, 6).",
                solution: "Distance: d = √[(6-2)² + (6-3)²] = √[16 + 9] = √25 = 5. Midpoint: M = ((2+6)/2, (3+6)/2) = (4, 4.5)"
            }
        ],
        quiz: [
            {
                question: "What is the distance between (0, 0) and (3, 4)?",
                answers: ["3", "4", "5", "7"],
                correct: 2,
                explanation: "d = √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5"
            },
            {
                question: "What is the midpoint of (2, 4) and (8, 10)?",
                answers: ["(5, 7)", "(6, 8)", "(4, 6)", "(10, 14)"],
                correct: 0,
                explanation: "M = ((2+8)/2, (4+10)/2) = (10/2, 14/2) = (5, 7)"
            },
            {
                question: "The distance formula is based on which theorem?",
                answers: ["Triangle Inequality", "Pythagorean Theorem", "Angle Sum Theorem", "Parallel Postulate"],
                correct: 1,
                explanation: "The distance formula is derived directly from the Pythagorean Theorem."
            },
            {
                question: "What is the distance between (1, 1) and (4, 5)?",
                answers: ["3", "4", "5", "7"],
                correct: 2,
                explanation: "d = √[(4-1)² + (5-1)²] = √[9 + 16] = √25 = 5"
            },
            {
                question: "If the midpoint of segment AB is (3, 5) and A is at (1, 3), where is B?",
                answers: ["(4, 6)", "(5, 7)", "(2, 4)", "(6, 10)"],
                correct: 1,
                explanation: "(1+x)/2 = 3 → x = 5; (3+y)/2 = 5 → y = 7, so B is at (5, 7)"
            }
        ]
    },
    {
        id: 20,
        title: "Review: Putting It All Together",
        duration: "15-20 min",
        content: [
            {
                type: "text",
                content: "Congratulations on completing 19 lessons! Let's review the major concepts we've covered in Honors Geometry."
            },
            {
                type: "example",
                title: "Key Topics Covered",
                items: [
                    "Points, lines, planes, and angle relationships",
                    "Triangle classification and congruence (SSS, SAS, ASA, AAS)",
                    "Properties of special triangles (isosceles, equilateral)",
                    "Quadrilaterals: parallelograms, rectangles, rhombuses, squares, trapezoids, kites",
                    "Polygons: classification and angle measures"
                ]
            },
            {
                type: "example",
                title: "More Key Topics",
                items: [
                    "Perimeter and area formulas for various shapes",
                    "Circle properties: radius, diameter, chords, tangents",
                    "Circumference (C = 2πr) and area (A = πr²) of circles",
                    "Pythagorean Theorem (a² + b² = c²)",
                    "Distance and midpoint formulas in coordinate geometry"
                ]
            },
            {
                type: "practice",
                title: "Integration Problem",
                content: "A rectangular garden is 12 m by 16 m. A circular fountain with diameter 6 m is in the center. What is the area of the garden not covered by the fountain?",
                solution: "Garden area = 12 × 16 = 192 m². Fountain radius = 3 m, so fountain area = π(3)² = 9π ≈ 28.3 m². Garden area not covered ≈ 192 - 28.3 ≈ 163.7 m²"
            },
            {
                type: "text",
                content: "You've built a strong foundation in geometry! Continue practicing these concepts and applying them to new problems. Great work!"
            }
        ],
        quiz: [
            {
                question: "Which method proves triangles congruent using three sides?",
                answers: ["SSS", "SAS", "ASA", "AAS"],
                correct: 0,
                explanation: "SSS (Side-Side-Side) proves triangles congruent when all three pairs of sides are equal."
            },
            {
                question: "What is the sum of interior angles in a hexagon?",
                answers: ["540°", "720°", "900°", "1080°"],
                correct: 1,
                explanation: "Using (n-2) × 180° with n = 6: (6-2) × 180° = 720°"
            },
            {
                question: "In a right triangle with legs 5 and 12, what is the hypotenuse?",
                answers: ["7", "13", "17", "60"],
                correct: 1,
                explanation: "5² + 12² = c², so 25 + 144 = 169, thus c = 13"
            },
            {
                question: "A circle has radius 7. What is its area?",
                answers: ["7π", "14π", "49π", "343π"],
                correct: 2,
                explanation: "Area = πr² = π(7)² = 49π square units"
            },
            {
                question: "What is the distance between points (0, 0) and (6, 8)?",
                answers: ["8", "10", "12", "14"],
                correct: 1,
                explanation: "d = √[(6-0)² + (8-0)²] = √[36 + 64] = √100 = 10"
            }
        ]
    }
];
