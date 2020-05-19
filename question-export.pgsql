--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2 (Ubuntu 12.2-2.pgdg16.04+1)
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: imagine_if_question; Type: TABLE; Schema: public; Owner: qmanswmbglzffz
--

CREATE TABLE public.imagine_if_question (
    id bigint NOT NULL,
    question character varying NOT NULL,
    answer1 character varying(300) NOT NULL,
    answer2 character varying(300) NOT NULL,
    answer3 character varying(300) NOT NULL,
    answer4 character varying(300) NOT NULL,
    answer5 character varying(300) NOT NULL,
    answer6 character varying(300) NOT NULL
);


ALTER TABLE public.imagine_if_question OWNER TO qmanswmbglzffz;

--
-- Name: imagine_if_question_id_seq; Type: SEQUENCE; Schema: public; Owner: qmanswmbglzffz
--

CREATE SEQUENCE public.imagine_if_question_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.imagine_if_question_id_seq OWNER TO qmanswmbglzffz;

--
-- Name: imagine_if_question_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qmanswmbglzffz
--

ALTER SEQUENCE public.imagine_if_question_id_seq OWNED BY public.imagine_if_question.id;


--
-- Name: imagine_if_question id; Type: DEFAULT; Schema: public; Owner: qmanswmbglzffz
--

ALTER TABLE ONLY public.imagine_if_question ALTER COLUMN id SET DEFAULT nextval('public.imagine_if_question_id_seq'::regclass);


--
-- Data for Name: imagine_if_question; Type: TABLE DATA; Schema: public; Owner: qmanswmbglzffz
--

COPY public.imagine_if_question (id, question, answer1, answer2, answer3, answer4, answer5, answer6) FROM stdin;
5	If [person] were a book, which would they be?	Unabridged Dictionary	Green Eggs and Ham	How to Win Friends and Influence People	Moby Dick	The Da Vinci Code	Chicken Soup for the Soul
6	If [person] were a dog, which would they be?	Alaskan Husky	French Poodle	Rottweiler	Basset Hound	Golden Retriever	Mutt
7	If [person] were a bad habit, which would they be?	Picking nose	Gossiping	Breaking wind in public	Biting nails	Road rage	Constantly looking in mirror
14	If [person] were a type of footwear, which would they be?	Black wingtips	Stiletto heels	Nikes	Cowboy boots	Ballet slippers	Flip Flops
15	If [person] were a type of confection, which would they be?	M & M’s	Gum	Cotton Candy	Breath Mint	Chocolate liqueur	Jelly Bean
16	If [person] were a TV catchphrase, which would they be?	“You’re fired”	“Beam me up, Scotty”	“Yada, yada, yada...”	“BAM!”	“Elvis has left the building”	“Yabba dabba do!”
17	If [person] were a part of a garden, which would they be?	Flowers	Weeds	Native trees	Manicures lawn	Concrete	Gnomes and fountains 
18	If [person] were a fictional crime fighter , which would they be?	Dirty Harry	Sheriff Andy Taylor	Austin Powers	Nancy Drew	James Bond	Part of the CSI team
19	If [person] were a simile, which would they be?	Dumb as a stump	Hungry as a wolf	Sly as a fox	Proud as a peacock	Grouchy as a bear	Strong as an ox
20	If [person] were a hairstyle, which would they be?	Perm	Ponytail	Mullet	Completely shaven	Extensions and highlights	Dreadlocks
21	If [person] were a color, which would they be?	Khaki	Lavender 	Green	Chartreuse	Gold	Jet black
22	If [person] were a thing to look through, which would they be?	Telescope	Sunglasses	Reading glasses	Binoculars 	Safety goggles 	Rose colored glasses
23	If [person] were a fashion fad, which would they be?	Poodle skirt and saddle shoes	Leisure suit	Victorian corset and gown	Knickers	Jordache and jeans	Toga 
24	If [person] were a Feature, which would they be?	Aretha Franklin’s voice	Kramer’s hair	Angelina Jolie’s lips	Einstein’s brain	Brad Pitts body	Sean Connery’s accent
25	If [person] were a breakfast, which would they be?	Cocoa Puffs	Steak and eggs 	Coffee and more coffee	Fruit and yogurt	Pancakes with maple syrup 	Brunch and mimosas 
26	If [person] were a Member of the seven dwarfs, which would they be?	Sleepy	Sneezy	Dopey	Grumpy	Bashful	Doc
27	If [person] were a movie catchphrase , which would they be?	“Here’s looking at you, kid”	“Go ahead, make my day”	“May the force be with you”	“Vodka martini, shaken, not stirred”	“There’s no place like home”	“This is another fine mess you’ve gotten me into”
29	If [person] were a phobia, which would they be?	Ochlophobia (fear of crowds)	Arachnophobia (fear of spiders)	Triskaidekaphobia (fear of thirteen)	Mysophobia (fear of dirt)	Acrophobia (fear of heights)	Nyctophonia (fear of darkness)
32	If [person] were a Soup, which would they be?	Split pea	French onion	Won ton	Gazpacho	Chicken Noodle	Clam Chowder
33	If [person] were a female name, which would they be?	Jane	Brittany	Victoria	Olga	Sybil 	Summer
34	If [person] were a TV family, which would they be?	The Waltons	The Osbornes	The Simpsons	The Sopranos	The Partridge Family	The Dukes of Hazzard
35	If [person] were a Beatle, which would they be?	John	Paul	George	Ringo	Volkswagen	Dung
36	If [person] were a famous author, which would they be?	John Grisham	Mark Twain	Dale Carnegie	Stephen King	Dr. Seuss	J. K. Rowling
37	If [person] were a 1970s movie, which would they be?	Love Story 	Star Wars	Jaws	The Godfather	Kramer vs. Kramer	Saturday Night Fever
38	If [person] were a musical style, which would they be?	Country and Western	Hip Hop	Blues	Smooth jazz	Punk	Opera
39	If [person] were a TV channel, which would they be?	NFL Network	MTV	Lifetime	Food Network	Cartoon Network	C-SPAN
40	If [person] were a wheel, which would they be?	Big wheel	Squeaky wheel	Free wheel	Hamster wheel	Wheel of Fortune	5th wheel
41	If [person] were a dance, which would they be?	Ballroom	Line	Interpretive	Salsa	Riverdance	Hokey Pokey
42	If [person] were a clichè, which would they be?	Wolf in sheep’s clothing	Born with a silver spoon in the mouth	Burning the candle at both ends	At one with nature	Look what the cat dragged in	A sight for sore eyes
43	If [person] were a thing worn on the hand, which would they be?	Brass knuckles 	Silk glove	Diamond ring	Rubber glove	Puppet	Mitten
45	If [person] were a 1960’s movie, which would they be?	Barbarella	The Sound of Music	2001 - A Space Odyssey	Goldfinger	Psycho 	Dr. Zhivago 
46	If [person] were a member of a threesome, which would they be?	3 Stooges	3 Tenors	3 Musketeers	3 Wise Men	3 Blind Mice	3 Mile Island
47	If [person] were a 1980’s movie, which would they be?	Terminator	Fatal Attraction	Amadeus	Ferris Bueller’s Day Off	E. T. 	On Golden Pond
48	If [person] were a pain or ailment, which would they be?	Headache	Stomach ache	Stiffness	Leg cramp	Hot flashes	Pain in the rear
49	If [person] were a plant, which would they be?	Four leaf clover	Bird of paradise	Towering oak	Spiny cactus	Hardy ‘Mum	Shrub
50	If [person] were a musical instrument, which would they be?	Piano	Drums	Banjo	Electric guitar	Cowbell	Accordion
51	If [person] were a Holiday, which would they be?	Labor Day	Thanksgiving	Mardi Gras	Sweetest Day	April Fool’s Day	Halloween
30	If [person] were a position on a football team., which would they be?	Tight end	Split end	Safety	Special teams player	Punter	Quarterback
31	If [person] were an era, which would they be?	Biblical era	Computer age	Old west	Decadent Rome	Stone Age	Victorian Era
28	If [person] were a special vehicle. Which would he/she be?, which would they be?	Tank	Ambulance	Parade Float	Garbage truck	Ice cream truck	Limousine
44	If [person] were an entrèe, which would they be?	Meatloaf	Lobster Thermadore	Mixed green salad	Sushi	Dry toast	Big Mac
52	If [person] were a weather forecast, which would they be?	Hot and humid	Tornado warning	Light drizzle and fog	High pressure 	Sunny and mild	Cold front
54	If [person] were a font , which would they be?	The Hard Way	Times New Roman	Dead History	Passions Conflict	Megahertz	Grunge
55	If [person] were a kitchen utensil, which would they be?	Rolling pin	Cheese grater	Oven mitt	Corkscrew	Nutcracker	Whisk
56	If [person] were a sea creature, which would they be?	Hammerhead shark	Dolphin	Octopus	Angel fish	Jellyfish	Crab
57	If [person] were a profession, which would they be?	Astronaut	Photographer	Lawyer	Chef	Model	Brick layer
60	If [person] were a Car, which would they be?	MINI Cooper	Minivan	Hybrid	Hummer	Jaguar	Taxicar
61	If [person] were a sportsman, which would they be?	Tiger Woods	Tony Hawk	Johnny Unitas	Muhammad Ali	Terrell Owens	Tom Brady
62	If [person] were a song at a karaoke bar, which would they be?	“I Love Rock and Roll”	“New York, New York”	“I Will Survive”	“Figaro”	“Oops, I did it again”	“Friends in Low Places”
63	If [person] were a Product sold on t.v. , which would they be?	Thighmadter	George Foreman Grill	Richard Simmons’ Sweatin to the Oldies	Craftmatic Adjustable Bed	Anne Murray’s Greatest Hits	Ron Popeil’s GLH spray on hair.
65	If [person] were a piece of jewelry , which would they be?	Wedding ring	Inspirational bracelet	Jeweled crown	Rolex	Cubic zirconia	Tongue piercing 
66	If [person] were a Person in a courtroom. Which would , which would they be?	Bailiff	Judge	Stenographer	Defendant	District Attorney	Court TV Reporter
67	If [person] were a type of headgear, which would they be?	Baseball cap	Top hat	Beret	Toupee	Miner’s helmet	Virtual reality goggles
68	If [person] were a Punctuation mark, which would they be?	Question mark	Number sign	Quotation marks	Parentheses	Exclamation point	Colon
69	If [person] were a Part of a computer, which would they be?	Monitor	Microprocessor	Graphics card	Floppy Disk	Networking card	<ESC>ape key
70	If [person] were a Motto, which would they be?	Pedal to the metal	Stop and smell the roses	Take the road less traveled	Better safe than sorry	An eye for an eye, a tooth for a tooth	Love makes the world go round
71	If [person] were a Cartoon character, which would they be?	Goofy	Shaggy	Cinderella	Tasmanian Devil	Wilma Flintstone	Mr. Magoo
74	If [person] were a political quote, which would they be?	“I do not like broccoli” (Bush)	“I am not worried about the deficit - it is big enough to take care of itself” (Reagan)	“Speak softly and carry a big stick” (T. Roosevelt)	“I had a lot of experience with people smarter than I am” (Ford)	“Be sincere, be brief, be seated” (FDR)	“The buck stops here” (Truman)
75	If [person] were a piece of advise, which would they be?	Trust no one	Be honest at all times	Never walk under a ladder	Dress for success	Marry a millionaire	Eat all your vegetables
76	If [person] were a Timepiece, which would they be?	Stopwatch	Biological clock	Grandfather clock	Oven timer	Sundial	Time bomb
77	If [person] were a 1950’s movie, which would they be?	The Ten Commandments	Gentlemen Prefer Blondes	Father of the Bride	The Wild One	The Greatest Show on Earth	Around the World in 80 Days
78	If [person] were a U.S. President , which would they be?	George Washington	Ronald Reagan	Teddy Roosevelt	Richard Nixon	John F. Kennedy	George W. Bush
79	If [person] were a World Record, which would they be?	Shortest attention span	Most slippery surface	Loudest burp	Longest phone call	Fastest six digit square root calculation 	Wettest spot on Earth
80	If [person] were a spots penalty, which would they be?	Holding	Delay of game	Head butting 	Too many men	False start	Excessive celebration
81	If [person] were a form of communication, which would they be?	Telephone	Mental telepathy	Body language	Email	Car horn	Smoke signal
82	If [person] were a sport, which would they be?	Baseball	Surfing 	Stock car racing	Duplicate bridge	Take Kwon do	Big Air Skateboarding
83	If [person] were a feeling, which would they be?	Angry	Tired 	Cheerful	Stressed	Romantic	Bored
84	If [person] were a Chorus of a song, which would they be?	“Sing us a song, you’re the piano man”	“I’m proud to be an American, where at least I know I’m free”	“I heard it through the grapevine” 	“Thank you for being a friend”	“You ain’t nothing but a hound dog”	“It’s fun to stay at the YMCA”
85	If [person] were a subject of a photograph, which would they be?	Seated, formally dressed	Police mug shot	Out of focus	Making a funny face	Action shot	Cover of The Enquirer
86	If [person] were a sense, which would they be?	Touch	Sight	Smell	Hearing	Taste	E. S. P. 
87	If [person] were a dessert, which would they be?	Triple Chocolate Tart	Apple pie	Crème Brulèe	Fresh fruit	Port and cigars	Cookies and milk
88	If [person] were a light source, which would they be?	Candle	Sun	Lightening	Flashlight	Lava Lamp	Laser beam
89	If [person] were a part of a car, which would they be?	Seat belt	Sunroof	Gas pedal	Horn	Spare tire	Navigation system
90	If [person] were a stage act, which would they be?	Poetry reading	Stand up comedy	One man band	Magic act	Snake charming	Belly dancing 
91	If [person] were a 1990’s movie, which would they be?	Independence Day	Pulp Fiction	The English Patient	Forrest Gump	Pretty Woman	There’s Something About Mary
92	If [person] were a Peanut’s character, which would they be?	Charlie Brown	Snoopy	Lucy	Linus	Pig Pen	Schroeder
94	If [person] were a Writing instrument, which would they be?	Fountain pen	Keyboard	Chalk	Ball point pen	Crayon	Spray paint
59	If [person] were an animal, which would they be?	Sheep Dog	Chimpanzee	Koala Bear	Bull	Panther	Toad
64	If [person] were an article of clothing, which would they be?	Tailored suit	Jeans	Sports Jersey	Bathrobe	Carhartts	Thong 
73	If [person] were an expert testimony at a trial , which would they be?	Marriage counselor	Environmental expert	Handwriting analyst	Paranormal psychic	Pet Behavior specialist	Gastrointestinal surgeon
58	If [person] were an emotion, which would they be?	Rage	Glee	Paranoia 	Apathy	Desire	Smugness
72	If [person] were an item found in a vending machine, which would they be?	Cheetos	Animal crackers	Good & Plenty	Granola bar	Goobers	The one that’s still stuck
95	If [person] were a collection, which would they be?	Trading cards	Speeding tickets	Phone numbers	Live insects	Dust bunnies	Fabergè Eggs
96	If [person] were a body part, which would they be?	Face	Buttocks	Stomach	Hand	Brain	Mouth
97	If [person] were a Floor covering. , which would they be?	Hardwood floor	Shag carpet	Marble tile	Bearskin rug	Rubber floor mat	Concrete
98	If [person] were a card game, which would they be?	War	Crazy 8’s 	Solitaire	Rummy	Texas Hold ‘Em Poker	Old Maid
99	If [person] were a magazine, which would they be?	Martha Stewart Living	People	Sports Illustrated	Popular Science	Fortune	Cosmopolitan 
100	If [person] were a Circus performer, which would they be?	Clown	Trapeze artist	Lion tamer	Juggler	Fire eater	Performing poodle
101	If [person] were a tool, which would they be?	Sledge hammer	Pruning shears	Screwdriver	Level	Cocktail mixer	Toenail clippers
102	If [person] were a Display of friendship. , which would they be?	Kiss	Hug	Firm Handshake	Wink	High five	Slap on the back
104	If [person] were a mode of transportation, which would they be?	Hot rod	Pogo stick	Horse and buggy	Time machine	Corporate jet	Jogging
105	If [person] were a war or battle, which would they be?	Star Wars	Battle of Wits	Civil War	Battle of Bands	Hundred Years War	Battle of the Bulge
106	If [person] were a parcel, which would they be?	First class	Bulk rate	Overnight	This side up	Standard ground	Fragile- handle with care
107	If [person] were a Sad person and needed a laugh. Who could provide it?, which would they be?	Will Ferrell	Chris Rock	Lucille Ball	Abbott and Costello	Monty Python	George W. Bush
108	If [person] were a type of document , which would they be?	Pre-nuptial agreement	Parent papers	I.O.U.	Balance sheet	Instructions	Warrant
109	If [person] were a flying object, which would they be?	Blimp	Biplane	Glider	Frisbee	Learjet	Brick
112	If [person] were a Donut., which would they be?	Boston cream	Plain	French curler	Peanut stick	Munchkin	Apple Fritter
114	If [person] were a store manager, which would they be?	7-Eleven	Home Depot	Starbucks	Petsmart	Tiffany's	Sunglass Hut
115	If [person] were a surgical operation, which would they be?	Hip replacement	Wart removal	Nose job	Knee reconstruction	Bloodletting	Laser hair removal
116	If [person] were a famous landmark, which would they be?	Empire State Building	Taj Mahal	The "Hollywood" sign	Leaning Tower of Pisa	Yankee Stadium	The Sphinx
117	If [person] were a room, which would they be?	Study	Kitchen	Wine cellar	Bedroom	Bathroom	Darkroom
118	If [person] were a form of advertisement, which would they be?	Internet pop-up ad	Bumper sticker	Classified ad	Infomercial	Full page magazine ad	Subliminal advertising 
120	If [person] were a musician, which would they be?	Ella Fitzgerald	Bono	Barbra Streisand	Britney Spears	Lawrence Welk	The artist formerly known as, and now again as, Prince
121	If [person] were a condiment, which would they be?	Salt	Maple syrup	Steak Sauce	Extra virgin olive oil	Tabbasco sauce	Vinegar
122	If [person] were a high school class, which would they be?	Social Studies	Home Economics	Trigonometry	Lunch	Gym	Study Hall
123	If [person] were a bird, which would they be?	Bald Eagle	Hummingbird	Road Runner	Albatross	Whooping Crane	Prairie Chicken
124	If [person] were a toy, which would they be?	Easy-Bake Oven	Yo-yo	Chemistry set	Barbie Doll	Teddy bear	Play-Doh
125	If [person] were a gift, which would they be?	Box of chocolates	Savings bond	A new Mercedes	Slippers	Gift certificate	Aqua Velva
126	If [person] were a board game, which would they be?	Monopoly	Scrabble	Twister	iMagiNiff	Chess	Candy Land
127	If [person] were a power source, which would they be?	Wind	Solar	Steam	9 volt battery	Coal	Nuclear
128	If [person] were a crime, which would they be?	Disorderly conduct	Tax evasion	Littering	Illegal use of motor vehicle	Removal of mattress tags	Computer hacking
130	If [person] were a product mascot, which would they be?	Jolly Green Giant	Cap'n Crunch	Chiquita Banana lady	Mrs. Butterworth	Pillsbury Doughboy	Grimace
131	If [person] were a piece of sporting equipment, which would they be?	Horseshoe	Baseball mitt	Putter	Foul pole	Trampoline	Jockstrap
132	If [person] were a piece of furniture, which would they be?	Recliner	Picnic table	Vanity	Italian leather sofa	Desk	Milk crate
133	If [person] were a criminal, which would they be?	Al Capone	Richard Nixon	Martha Stewart	The Joker	Robin Hood	Lex Luthor
134	If [person] were a city, which would they be?	Hollywood	Bismarck	Paris	Rio de Janeiro	Springfield	Atlantis
135	If [person] were a dental procedure, which would they be?	Cosmetic whitening	Regular check-up	Gold tooth	Root canal	Braces	Dentures
136	If [person] were a home, which would they be?	Four bedroom ranch	Penthouse apartment	Mobile home	Tree house	Southern plantation	Beach house
137	If [person] were a street sign, which would they be?	STOP	Neighborhood Watch	75 MPH	Scenic Overlook	Dangerous Curves Ahead	Bridge Out
138	If [person] were a piece of luggage, which would they be?	Carry-on	Steamer trunk	Pet carrier	Laptop case	Plastic grocery bag	Golf travel bag
139	If [person] were a weapon, which would they be?	Poison	Squirt gun	Light saber	Battle Axe	Charm	Pepper Spray
140	If [person] were a time measurement, which would they be?	Season	Era	Nanosecond	Fiscal year	Happy hour	Overtime
141	If [person] were a floating vessel, which would they be?	Gondola	Destroyer	Speedboat	Kayak	Luxury liner	Fishing trawler
142	If [person] enjoyed a day in the snow, which would he/she do?	Go ice fishing	Take extreme jumps at the terrain park	Head for the lodge bar	Meander down a forest trail	Make snow angels	Spin "donuts" in a parking lot
111	If [person] were an item in the refrigerator. , which would they be?	Gallon of Milk	Crown of Broccoli	Baking soda	Leftover Moo Goo Gai Pan	Caviar	Prune juice
113	If [person] were an insect, which would they be?	Louse	Ant	Wasp	Cicada	Praying Mantis	Firefly
129	If [person] were an item found in a basement, which would they be?	High school yearbook	Dusty weight bench	Blown fuse	Cobweb	Drum set	1954 Chateau Lafite Rothschild
103	If [person] were an Olympic event, which would they be?	Beach volleyball	Figure skating	Wrestling	Ping-pong	100 meter dash	Shot put
143	If [person]were awakened at night by a burglar, which would they be?	Go back to sleep and rely on the insurance	Scream	Wake his/her partner and demand action	Tackle the burglar to the ground	Sneak out and phone the police	Attempt to counsel the burglar
144	If [person]were something to sit on, which would they be?	Throne	Bleachers	Lap	Lawn chair	Sit 'n Spin	Bar stool
145	If [person] were on a reality TV show, which would they be?	The Apprentice	American Idol	People's Court	American Chopper	Trading Spaces	The Amazing Race
146	If [person] could keep only one of the following, which would they be?	Television	Books	Computer	Telephone	Blow dryer	Wine collection
147	If [person]could play in a band, which would they be?	Tommy Dorsey Orchestra	Dixie Chicks	Led Zeppelin	Bee Gees	Josie and the Pussycats	US Marine Corps Band
148	If [person]could be brilliant at one of the following, which would they be?	Golf	Painting	Gambling	Video games	Cooking	Programming cell phone
149	If [person] were at a construction site, which would they be?	Barking out orders	Taking a coffee break	Doing something with a jackhammer	Drawing up the plans	Complaining about working conditions	Whistling at passerby
150	If [person] stepped onto. a bus and the only other passenger was his/her favorite TV star, what would he/she do?	Ignore the star	Politely say "Hello" but respect their privacy	Tell the star about a great creative idea	Offer a critique of the star's work	Nervously ask for an autograph	Drop their jaw and scream, "I love you!"
151	If [person] could have a superpower, which would they choose?	Ability to fly	Superhuman strength	Mind control	Ability to talk to animals	Shape-shifting	X-ray vision
152	If [person] personality were a male name, which would be best?	Melvin	Gunther	Earl	Rico	Chad	Jaques
153	If [person] could acquire one of the following natural abilities, which would they choose?	Amazing hand-eye coordination	The ability to contact the spirit world	Photographic memory	The ability to win friends and influence people	Musical virtuosity	Optimism
154	If [person] were traveling in space, how would they feel?	Proud	Nauseous	Terrified	Bored	Exhilarated	Weightless
155	If [person] had the deciding vote for an Oscar for the greatest ever male actor, who would they choose?	Cary Grant	Ton Hanks	Clint Eastwood	Jackie Chan	Johnny Depp	Adam Sandler
156	If [person] had to do one of the following, which would they fear the most?	Bungee jumping	Addressing the U.N. General Assembly	Catching a tarantula	Asking a secret crush on a date	Dining with the in-laws	Becoming a parent
157	If [person] were hosting a party, how would they handle the food?	Have it professionally catered	Make everyone bring a dish	Put out a single tray of cocktail wieners	Spend 3 days preparing a 5 course meal	Have pizza and Buffalo wings delivered	Pretend to be suck at the last second and cancel the party
158	If [person] could afford to buy a dream home, which would they buy?	Sprawling farmhouse	Beach condominium	Efficient eco-friendly home	Grand mansion	Rugged mountain lodge	Medieval castle
159	If [person] were honked at by an impatient driver, how would they react?	Get out of the car and threaten the driver	Ignore it and turn up the radio	Honk 'em right back	Give a genuine apologetic wave	Record the license plate and call the police	Wink and lick the window
160	If [person] could invite a famous historical figure home for dinner, whom would they invite?	Mother Teresa	Groucho Marx	John F. Kennedy	Henry Ford	Cleopatra	Muhammad Alo
161	If [person] had made a million dollars, how would they have mostly likely made it?	Sporting prowess	Brilliant invention	Sheer hard work	Class action lawsuit	Winning the lottery	Show business
162	If [person] awoke to find the house in flames, which would they save first?	Insurance policy	Favorite shoes	Family photos	Cash	Self portrait	Sports equipment
163	If [person] inherited $100,000, what would they do?	Put an addition on the house	Blow it all at the mall	Donate it to charity	Invest it wisely	Head to Vegas	Bury it in the backyard
164	If [person] could attend any sporting event, which would they choose?	World Figure Skating Championship	Daytona 500	The Masters	World Series	X Games	National Spelling Bee
165	If [person] had to grant government approval for a major city project, which would they choose?	Hospital	Library	Casino	Sports stadium	Botanical gardens	Skyscraper
166	If [person] were buying a home, which of the following would they consider most important?	School district	Big closets	Lush garden	Garbage and workshop	Distance from in-laws	Size of the kitchen
167	If [person] were to be honored, which of the following would they be happiest to accept?	Employee of the Month	Parent of the Year	Cash Award	Blackwell's Best Dressed List	Being knighted	Simple thank you note
168	If [person] were choosing hotel accommodations, which of the following would they deem most important?	A big pool	Four star rating	Free breakfast	Workout facilities	Vibrating bed	Well stocked mini bar
169	If [person] accidentally backed over the neighbor's cat in the driveway, which would they do?	Bury it and say nothing	Confess	Buy a replacement and pretend nothing happened	Place it on the road and say nothing	Blame the neighbor for inadequate cat control	Run over it again to make sure it was dead
170	If [person] were kissing goodnight after a first date, where would they plant it?	Lips	Back of hand	Cheek	Feet	Ear lobe	Tonsils
171	If [person] could travel in a time machine, which event would they choose to witness?	Super Bowl III	Wright Brothers' first flight	The first Thanksgiving	Their own birth	Next year's Kentucky Derby	Woodstock
172	If [person] could go on a dream vacation, which would it be?	Alaskan wilderness hike	Cultural tour of Europe	African safari	Week at Disney World	Hawaiian Islands trip	Relaxing and working at home
173	If [person] spent a relaxing day alone, what would they do?	Go shopping	Surf the net	Watch TV	Meditate	Enjoy the great outdoors	Work on the tan
174	If [person] could have dinner with an Olympic champion, who would they choose?	Brian Boitano	Jesse Owens	Mary Lou Reton	Cassius Clay	Greg Louganis	Bruce Jenner
175	If [person] witnessed a purse-snatching on the city street, what would they do?	Wrestle the purse-snatcher to the ground	Ignore it and keep walking	Attempt a citizen's arrest	Offer counseling	Scream hysterically	Move to the country
176	If [person] had to bay-sit a relative's 5 year old kid, what would they do?	Take the kid to the zoo	Bake a tray of cookies	Eat junk food together and watch TV	Put the kid to work doing laundry and dishes	Teach the kid how to rebuild engines	Immediately hire a different babysitter
177	If [person] could discover the answer to a great mystery, which mystery would they solve?	What is SPAM?	Where do the missing socks go?	Sasquatch- fact or fiction?	What goes on at Area 51?	Why was Stonehenge built?	How come I pay more taxes than Bill Gates?
178	If [person] bought a newspaper, which would they read first?	Personals	Financial section	Sports	Comics	Obituaries	Want ads
179	If [person] accidentally emitted an unpleasant anti-social noise at a dinner party, what would they do?	Say nothing and blush	Apologize	Laugh and repeat the offense (louder if possible)	Blame the person sitting next to them	Try to reproduce the sound by shifting in their seat	Carry on as if nothing happened
180	If [person] could do only one of the following every morning, which would they choose?	Go for a 5 mile run	Sleep until 1:00pm	Drink coffee and read a newspaper	Spend quality time with spouse	Watch pre-game football shows	Take a 30 minute hot shower
181	If [person] could watch only one of the following TV shows, which would it be?	World News Tonight	CSI	Desperate Housewives	Dora the Explorer	Sportscenter	Oprah
182	If [person] won an overseas trip, which country would they visit?	Italy	Tibet	Iceland	Kenya	Tahiti	Monte Carlo
183	If [person] were going on a first date, what would be the plan?	Dinner at a fancy restaurant and the symphony	Hot dogs, drinks, and a ball game	Stay in, order Chinese food and rent Sleepless in Seattle	Miniature golf and the mall food court	Moonlit horseback ride down the beach	Bail after 10 minutes
184	If [person] found a piece of hair in their entree, what would they do?	Remove the hair and keep eating	Finish the meal, but refuse to pay for the entree	Storm out of the restaurant after giving the manager a tongue-lashing	Simply set the meal aside and say they are not hungry	Throw up	Ask for a replacement entree
185	If [person] doctor suggested more exercise, which would they do?	Roller blade	Yoga	Triathlon	Mall walk	Tae Bo	Seek a second opinion
186	If [person] could have just one pet, which would it be?	Goldfish	House cat	Boa constrictor	Pot-bellied pig	Shih Tzu	Peeve
187	If [person] could enjoy one of life's little luxuries every day. Which would they choose?	Long massage	Breakfast in bed	Fine scotch and cigar	A nap	Bubble bath	A maid
188	If [person] had the deciding vote for an Oscar for the best actress, whom would they choose?	Julia Roberts	Lauren Bacall	Hilary Duff	Oprah Winfrey	Goldie Hawn	Paris Hilton
189	If [person] had to decide the best way to spend New Year'd Eve, which would they choose?	A quiet celebration with the family	In the middle of Times Square	Attend the ballet and then a cocktail party	In deep meditation pandering the upcoming year	48 straight hours of partying	Exactly the same as every other day
190	If [person] were going on a picnic, which would they consider essential?	Sandwiched and coffee	Champagne and caviar	Laptop and cell phone	Loud radio	A bat and ball	A good book
191	If [person] were on a 10 hour car trip, which would upset them the most?	Being stuck behind a little old lady traveling at 30 mph	Running over a bunny rabit	Children fighting in the back seat	A small scratch on the paint work	Sound system breaking down	Cell phone going out of range
192	If [person] suffered a minor crisis, which would upset them the most?	Burning the roast	Scratch on the car	Computer virus	 TV breaking down	Credit cards canceled	Stain on the lapel
193	If [person] had to watch all of these movies, which would they dread the most?	Scream	The Matrix	Titanic	Lord of the Rings	Monty Python and the Holy Grail	The Sound of Music
4	If [person] were an article of memorabilia, which would they be?	Jimi Hendrix guitar	Davy Crockett’s musket 	Neil Armstrong’s spacesuit	Van Gogh’s paintbrush	Jackie Onassis’ sunglasses 	William Shatner’s kidney stone
53	If [person] were an animal sound, which would they be?	Meow	Moo	Roar	Gobble	Hiss	Hoot
93	If [person] were an award, which would they be?	Academy Award	Nobel Prize	Most Valuable Player	Best in Show	Grammy	4 Star Government Safety Rating
110	If [person] were an invention. , which would they be?	Lipstick	Microphone	Spork	Band-aid 	Blender	Sliced Bread
\.


--
-- Name: imagine_if_question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qmanswmbglzffz
--

SELECT pg_catalog.setval('public.imagine_if_question_id_seq', 193, true);


--
-- Name: imagine_if_question imagine_if_question_pkey; Type: CONSTRAINT; Schema: public; Owner: qmanswmbglzffz
--

ALTER TABLE ONLY public.imagine_if_question
    ADD CONSTRAINT imagine_if_question_pkey PRIMARY KEY (id);


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO qmanswmbglzffz;


--
-- PostgreSQL database dump complete
--

