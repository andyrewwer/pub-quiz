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
-- Name: answer; Type: TABLE; Schema: public; Owner: rnnasielttjyxr
--

CREATE TABLE public.answer (
    id bigint NOT NULL,
    answer character varying,
    correct boolean,
    bonus boolean DEFAULT false
);


ALTER TABLE public.answer OWNER TO rnnasielttjyxr;

--
-- Name: answer_id_seq; Type: SEQUENCE; Schema: public; Owner: rnnasielttjyxr
--

CREATE SEQUENCE public.answer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.answer_id_seq OWNER TO rnnasielttjyxr;

--
-- Name: answer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rnnasielttjyxr
--

ALTER SEQUENCE public.answer_id_seq OWNED BY public.answer.id;


--
-- Name: game_room; Type: TABLE; Schema: public; Owner: rnnasielttjyxr
--

CREATE TABLE public.game_room (
    id bigint NOT NULL,
    code character varying(6) NOT NULL,
    type character varying(25) NOT NULL,
    name character varying(25),
    round integer DEFAULT 1 NOT NULL,
    status character varying(25) DEFAULT 'CREATED'::character varying NOT NULL
);


ALTER TABLE public.game_room OWNER TO rnnasielttjyxr;

--
-- Name: game_room_id_seq; Type: SEQUENCE; Schema: public; Owner: rnnasielttjyxr
--

CREATE SEQUENCE public.game_room_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.game_room_id_seq OWNER TO rnnasielttjyxr;

--
-- Name: game_room_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rnnasielttjyxr
--

ALTER SEQUENCE public.game_room_id_seq OWNED BY public.game_room.id;


--
-- Name: game_round; Type: TABLE; Schema: public; Owner: rnnasielttjyxr
--

CREATE TABLE public.game_round (
    id bigint NOT NULL,
    round bigint NOT NULL,
    player_id bigint NOT NULL,
    answer1_id bigint,
    answer2_id bigint,
    answer3_id bigint,
    answer4_id bigint,
    answer5_id bigint,
    answer6_id bigint,
    answer7_id bigint,
    answer8_id bigint,
    answer9_id bigint,
    answer10_id bigint,
    answer_theme_id bigint
);


ALTER TABLE public.game_round OWNER TO rnnasielttjyxr;

--
-- Name: game_round_id_seq; Type: SEQUENCE; Schema: public; Owner: rnnasielttjyxr
--

CREATE SEQUENCE public.game_round_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.game_round_id_seq OWNER TO rnnasielttjyxr;

--
-- Name: game_round_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rnnasielttjyxr
--

ALTER SEQUENCE public.game_round_id_seq OWNED BY public.game_round.id;


--
-- Name: player; Type: TABLE; Schema: public; Owner: rnnasielttjyxr
--

CREATE TABLE public.player (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    game_room_id bigint NOT NULL
);


ALTER TABLE public.player OWNER TO rnnasielttjyxr;

--
-- Name: player_id_seq; Type: SEQUENCE; Schema: public; Owner: rnnasielttjyxr
--

CREATE SEQUENCE public.player_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.player_id_seq OWNER TO rnnasielttjyxr;

--
-- Name: player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rnnasielttjyxr
--

ALTER SEQUENCE public.player_id_seq OWNED BY public.player.id;


--
-- Name: schema_version; Type: TABLE; Schema: public; Owner: rnnasielttjyxr
--

CREATE TABLE public.schema_version (
    version_rank integer NOT NULL,
    installed_rank integer NOT NULL,
    version character varying(50) NOT NULL,
    description character varying(200) NOT NULL,
    type character varying(20) NOT NULL,
    script character varying(1000) NOT NULL,
    checksum integer,
    installed_by character varying(100) NOT NULL,
    installed_on timestamp without time zone DEFAULT now() NOT NULL,
    execution_time integer NOT NULL,
    success boolean NOT NULL
);


ALTER TABLE public.schema_version OWNER TO rnnasielttjyxr;

--
-- Name: answer id; Type: DEFAULT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.answer ALTER COLUMN id SET DEFAULT nextval('public.answer_id_seq'::regclass);


--
-- Name: game_room id; Type: DEFAULT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_room ALTER COLUMN id SET DEFAULT nextval('public.game_room_id_seq'::regclass);


--
-- Name: game_round id; Type: DEFAULT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round ALTER COLUMN id SET DEFAULT nextval('public.game_round_id_seq'::regclass);


--
-- Name: player id; Type: DEFAULT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.player ALTER COLUMN id SET DEFAULT nextval('public.player_id_seq'::regclass);


--
-- Data for Name: answer; Type: TABLE DATA; Schema: public; Owner: rnnasielttjyxr
--

COPY public.answer (id, answer, correct, bonus) FROM stdin;
11	WEATHER	t	f
12	Gone with the wind	t	f
3	cloudy with a chance of meatballs (you're right, easy with the theme)	t	f
4	dry ice	t	f
5	basting (i don't think this question is right)	f	f
6	snowflakes	t	f
7	Purple Rain	t	f
8	Son (or, in Dad's case: disappointment)	t	f
9	hail	t	f
10	shower	t	f
2	peasy (i don't see how this is weather related)	f	f
34	Gone with the Wind (1939 histoircal romance film)	t	f
47	literally no idea XD	f	f
36	Up (2009 children pixar comedy film made after a book)	f	f
14	cloudy with a chance of meatballs	t	f
25		f	f
15	dry ice	t	f
26	monoxide	f	f
37	ice	f	f
48	dry ice 	t	f
49	basting 	f	f
38	sprinkle	f	f
27	Showering	f	f
16	drizzle	t	f
22	weather	t	f
33	Shower	t	f
44	Weather	t	f
55	elements	t	f
46	money	f	f
35	peasy	f	f
24	easy	f	f
13	breezy	t	f
21	shower	t	f
20	hail	t	f
19	son	t	f
18	purple rain	t	f
17	windy	f	f
28	GenX	f	f
39	snowflakes	t	f
50	snowflake 	t	f
29		f	f
30	Son of a ___ JK (SON)	t	f
31	lavish	f	f
32	Shower	t	f
43	shower	t	f
54	shower	t	f
42	laud	f	f
53	honor 	f	f
52	son	t	f
51	purple rain 	t	f
40	Purple Rain	t	f
41	son 	t	f
56	Singing in the Rain	f	f
58	Shrek	f	f
59	Ice	f	f
60	Drizzle	t	f
61	Snowflake	t	f
62	Purple Rain	t	f
63	Son 	t	f
64	Reverence	f	f
65	Shower	t	f
57	Peasy	f	f
66	Season	t	f
67	Aqua Man	f	f
78	Gone With The Wind	t	f
89	1936: Romance, Death, and Dogs	f	f
69	Frosty the Snowman	f	f
80	Cloudy With A Chance of Meatballs	t	f
91	Despicable me 	f	f
92	Coal 	f	f
81	Ice	f	f
70	Dry Ice	t	f
71	Drizzle	t	f
82	Drizzle	t	f
93	Drizzle	t	f
72	Snowflake	t	f
83	Snowflakes	t	f
94	Snowflakes	t	f
84	Purple Rain	t	f
73	Jack Frost	f	f
95	Party like it’s 1999	f	f
74	Son	t	f
85	Son	t	f
96	Son	t	f
75	Hail	t	f
97	Affirmation	f	f
98	Shower Floor	t	f
87	Shower	t	f
76	Shower	t	f
68	Easy As Ice	f	f
79	Breezy	t	f
90	Easy Peasy	f	f
99	Titles	f	f
88	Precipitation/Weather	t	f
77	Water	f	f
86	Reign	f	f
110	words in the english language (mostly)	f	f
100	archer	t	f
45	Gone with the wind 	t	f
122	Archer	t	f
113	Wolf	t	f
102	wolf	t	f
114	Sherlock Holmes	f	f
125	Inspector Gadget	f	f
126	Abraham	f	f
115	Adam	t	f
104	Adam (yes?)	t	f
105	king	t	f
106	wild	t	f
107	dal (or daal, or dahl)	t	f
108	brown	t	f
109	carol	t	f
101	potter	t	f
116	King	t	f
117	Organic	f	f
118	Chana Masala	f	f
119	Brown	t	f
120	Carol	t	f
112	Potter 	t	f
121	Names	f	f
127	King	t	f
128	Freerange	f	f
129	Chicken Curry	f	f
130	Brown	t	f
131	Carol	t	f
123	Ceramicist 	f	f
133	archer	t	f
135	wolf	t	f
136	charles 	f	f
137	adam	t	f
139	wild	t	f
141	brown	t	f
142	carol	t	f
134	potter	t	f
143	I'm going to go with Robin Hood...idk why but it feels right 	f	f
144	Archer	t	f
146	Wolf (animal that hunts and lives in packs)	t	f
147	Inspector Gadget (inspector that assists inspector Morse?)	f	f
148	Abraham	f	f
145	Potter	t	f
132	Lone wolf	f	f
124	wolf	t	f
103	sergeant lewis (not an inspector but this is what i know)	t	f
138	king	t	f
140	idk but my favorite kind of indian curry is Chicken Korma	f	f
149	King	t	f
150	Wild (living or growing in natural environment)	t	f
151	Dal	t	f
23		f	f
152	Brown	t	f
153	Carol	t	f
165	Apex	f	f
156	Potter	t	f
164	Carol	t	f
163	Brown	t	f
162	Tika Mansala	f	f
160	King	t	f
161	Wild	t	f
159	Adam	t	f
158	Inspector Gadget	f	f
157	Wolf	t	f
155	Archer	t	f
166	Archer	t	f
168	Lion	f	f
169	Pink Panther	f	f
170	Adam	t	f
171	King	t	f
172	Wild	t	f
173	Daal	t	f
174	Brown	t	f
175	Carol	t	f
167	Potter	t	f
176	Metaphors for God	f	f
177	archer	t	f
188	Archer	t	f
190	Wolf	t	f
179	wild dog	f	f
191	Inspector Gadget	f	f
180	gadget	f	f
192	Adam	t	f
181	adam	t	f
182	king	t	f
193	King	t	f
194	Feral  	f	f
183	wildly	t	f
184	tiki	f	f
195	Curry on my wayward son	f	f
196	Brown	t	f
185	hazel	f	f
186	carol	t	f
197	Oh christmas tree 	f	f
154	Last Names	t	f
178	potter	t	f
189	Potter (🎵Claymaker, miracle worker🎵(	t	f
187	2 syllable words	f	f
198	Nature	f	f
199	Slacker	f	f
210	weakest link (definitely NOT Andrew)	t	f
221	weakest link 	t	f
201	Filling	f	f
212	Crown	t	f
223	filling 	f	f
224	cheers 	t	f
213	Cheers	t	f
202	Toast	f	f
203	Mr. Rogers	f	f
214	Sherlock 	t	f
225	Sherlock	t	f
226	obtained 	f	f
215	given (?)	f	f
204	gift	f	f
205	friends	t	f
216	Friends	t	f
227	friends 	t	f
228	double jeopardy 	t	f
217	(double) jeopardy	t	f
206	\N	f	f
218	The Office (i'm not superstitious, but I am a little stitious)	t	f
229	the office 	t	f
230	Not a clue, but the undisputed best song of the 80's was africa by toto	f	f
219	(final) countdown	t	f
208	why cant we be friends	f	f
211	Survivor	t	f
200	Survivor 	t	f
209	Friendship	f	f
222	survivor	t	f
231	tv shows	t	f
220	TV shows	t	f
232	weakest link	t	f
243	The weakest link	t	f
254	The weakest link	t	f
234	crown	t	f
245	Caps	f	f
256	Crown (dental restoration which caps tooth)	t	f
257	Cheers (action before drinking in celebration)	t	f
246	Toast	f	f
235	cheers	t	f
236	sherlock	t	f
247	Sherlock	t	f
258	Sherlock	t	f
259	obtain (to have recieved something)	f	f
248	Gifted	f	f
237	prize winner	f	f
238	friends	t	f
249	Friends	t	f
261	(law)Suit (danger of loss, 2nd is procedural defense )	f	f
260	Friends (another name for companions)	t	f
250	Aquittle  	f	f
239	jeopardy	t	f
251	Office	t	f
240	the office	t	f
252	Final Countdown	t	f
241	countdown	t	f
262	The Office	t	f
263	??? (1986 game show song by Europe)	f	f
244	Survivor  	t	f
255	Survivor	t	f
264	TV shows	t	f
253	TV Shows	t	f
242	tv shows	t	f
233	survivor	t	f
276	Dodo peasant	f	f
265	Weakest Link	t	f
278	Crown	t	f
267	Veneers	f	f
268	Toast	f	f
279	Cheers	t	f
280	Sherlock	t	f
269	Downton Abbey	f	f
270	Accepted	f	f
281	Bestowed 	f	f
271	Friends	t	f
282	Friends	t	f
272	Jeopardy	t	f
273	Office	t	f
284	Office	t	f
274	Final Countdown	t	f
285	Jeopardy	f	f
266	Survivor	t	f
277	Survivor	t	f
275	TV Shows	t	f
286	British Brilliance	f	f
207	Coffee shop	t	f
283	Liability double jeopardy	t	f
287	Weakest Link	t	f
289	Crown	t	f
290	Cheers	t	f
291	Sherlock	t	f
292	GOT	t	f
293	Friends	t	f
294	Thin Ice	f	f
295	The Office	t	f
296	Final Countdown	t	f
288	Survivor	t	f
297	TV Shows	t	f
298		t	f
300		t	f
301		t	f
302		t	f
303		t	f
304		t	f
305		t	f
306		t	f
307		t	f
299		t	f
308		t	f
309		f	f
312	Passion	t	f
311		f	f
320	mango	t	f
322	raspberry pi 	t	f
323	impulse/passion (passion fruit?)	t	f
324	bananagrams	t	f
313	Banana Grams	t	f
314	Bone	f	f
325	limescale	t	f
315	Blonde	t	f
326	strawberry blonde	t	f
383	Johnny Appleseed	t	f
327	apple	t	f
317	bathroom	f	f
328	Jack (jackfruit?) (for us: dad)	t	f
318	Princes Peach	t	f
329	princess peach	t	f
321	blackberry	t	f
330	fruit	t	f
310	Sidekick 	f	f
319	anatomy 	f	f
331	banana republic 	f	f
333	pear (i'm just guessing fruit)	f	f
334	raw	f	f
335	bananagrams 	t	f
336	orange (i'm just guessing fruit at this point)	f	f
337	strawberry blonde 	t	f
338	apple	t	f
339	jack (like jackfruit)	t	f
340	peach	t	f
332	blackberry	t	f
341	fruit	t	f
342	Avocado (Spanish womens high street fashion)	f	f
353	banana republic	f	f
364	Uptown Mango	t	f
366	Life Alert	f	f
355	raspberry pi	t	f
344	Lemon (2012 Credit Card sized computer for home automation)	f	f
345	Passion (Strong uncontrollable emotion)	t	f
356	passion fruit	t	f
367	Rage	f	f
368	Banana Grams	t	f
357	banana grams	t	f
346	Bananagrams (letter tile game like scrabble)	t	f
347	Limestone (Chalkly deposit)	t	f
358	rock candy	f	f
369	Bone Spur	f	f
370	Auburn 	f	f
359	candy apple	f	f
348	Strawberry Blonde	t	f
349	Apple	t	f
350	Tomato??? (nickname for John)	f	f
360	Apple	t	f
371	Apple	t	f
394	Johnny Pineapple sounds about right	f	f
372	Jack	t	f
373	Princess Peach	t	f
343	Blackberry	t	f
363	fruit	t	f
362	Princess Peach	t	f
354	BlackBerry	t	f
351	Princess Peach	t	f
365	Razor or palm pal	f	f
374	Fruits 	t	f
352	Fruit	t	f
375	Hola Sombrero	f	f
386	Banana Republic	f	f
388	Raspberry Pi	t	f
377	Blackberry	f	f
378	Passion	t	f
389	Passion	t	f
379	Banana Grams	t	f
390	Bananagrams	t	f
391	Limestone	t	f
381	Strawberry Blonde	t	f
392	Strawberry Blonde	t	f
393	Apple	t	f
382	Apple	t	f
380	Dirty dirty dates	f	f
361	Johnny Apple Seed	t	f
395	Princess Peach	t	f
384	Princess Peach	t	f
376	Blackberry	t	f
387	Blackberry	t	f
396	Fruit	t	f
385	Fruit	t	f
397	lulu lemon	f	f
408	Cherry 	f	f
400	anguish	f	f
410	Pinkberry	f	f
399	apple	f	f
411	Passion	t	f
412	Jumble	f	f
401	bananas	t	f
402	lime	t	f
413	Limestone	t	f
403	orange	f	f
414	Orange	f	f
404	apple	t	f
415	Apple	t	f
405	jam	f	f
416	Guava	f	f
406	peach	t	f
417	Peach	t	f
409	Blackberry	t	f
398	blackbery	t	f
407	fruits	t	f
418	Fruit	t	f
316	Windows	t	f
419		t	f
421		t	f
422		t	f
423		t	f
425		t	f
426		t	f
427		t	f
428		t	f
420		t	f
429		t	f
424		t	f
491	Scarlett 	t	f
440	Things I don't Know	t	f
437	kroneé	f	f
436	Scarlet Johanson	t	f
435	chouette	f	f
434	Perhaps a lime?	t	f
433	The Cumberbunchster!	f	f
432	Gilmore Girls	f	f
430	Capricorn	f	f
438	tepid	f	f
439	Conical spheroid	f	f
431	getting the softies on	f	f
441	cancer	t	f
452	Gemini	f	f
454	Jthe shining 	f	f
443	one *flu* over the cuckoo's nest	t	f
444	????	f	f
455	Conway	f	f
456	Lime	t	f
445	lime	t	f
446	sick	t	f
457	Sweet	f	f
458	Scarlet 	t	f
448	corona	t	f
447	scarlett (fever) johansson	t	f
459	Corona	t	f
449	cold	t	f
450	shingle	t	f
442	stroke (?)	t	f
451	diseases	t	f
453	stroking 	t	f
461	Plank	f	f
460	Cold	t	f
462		f	f
463	Leo	f	f
465	The Shining 	f	f
466	Attenborough 	f	f
467	Lime	t	f
469	Scarlet Johansen 	t	f
470	n/a	f	f
471	cold	t	f
472	shingle 	t	f
484	I'm really feeling colors for this round, but only two of my answers actually fit that description XD	t	f
464	n/a	f	f
473	Norfolk and Clue	t	f
474	gemini 	f	f
485	Zodiac	f	f
476	one flew over the coo coo's nest (sorry if that's spelled wrong lol) 	t	f
487	One Flew over the Cuckoo’s Nest	t	f
477	James Gray (is that a person? it sounds like a person.)	f	f
488	Geraldo Rivera	f	f
489	Lime	t	f
478	lime	t	f
492	Royal	f	f
490	Sick	t	f
479	tight 	t	f
480	Scarlett Jo. 	t	f
540	Cancer	t	f
482	cold	t	f
493	Cool	t	f
494	Shingle	t	f
483	shingles 	t	f
475	brush	f	f
486	Stroke	t	f
495	Things that make you cuckoo	f	f
545	Sick	t	f
496	Scorpio	f	f
507	Cancer (Star Sign for June 20-July 22)	t	f
518	Cancer	t	f
520	Die Hard	f	f
509	As Good As it Gets (Jack Nicholson lead in film adaptation 1975)	f	f
498	Godzilla	f	f
499	Jay letterman	f	f
510	no idea... (1970 broadcast journalist, talk show named after himself)	f	f
542	One Flew Over the Cuckoo's Nest	t	f
522	Lime	t	f
511	Lime (Fruit in Mojitos)	t	f
500	Lime	t	f
501	Hot	f	f
544	Lime	t	f
523	Lit	f	f
524	Scarlett Johannson	t	f
513	Scarlett	t	f
502	Dracula	f	f
503	Corona	t	f
514	Corona	t	f
525	Gold	f	f
526	Cold	t	f
515	Cold	t	f
504	Cold	t	f
505	Thatch	f	f
529	cancer	t	f
527	Shingle	t	f
516	Plank (wooden tile)	f	f
519	Stroke	t	f
508	stroke (petting an animal)	t	f
497	Stroke	t	f
506	Things in the world	f	f
517	Illnesses/Diseases	t	f
528	Colors	f	f
531	one flew over the cuckoo's nest	t	f
532	kronkite	f	f
533	lime	t	f
534	sick	t	f
535	scarlett johanssen	t	f
536	corona	t	f
537	cold	t	f
543	Parkinson	t	f
538	slate	t	f
530	stroke	t	f
539	illness/disease	t	f
521	Andrew weeks	t	f
468	Rad	t	f
512	Rad (Slang for cool)	t	f
546	Scarlet Johannson	t	f
547	Corona	t	f
548	Cold	t	f
549	Blargghhhh	f	f
541	Stroke	t	f
550	Illness/Diagnoses	t	f
111	Archer	t	f
481	the only latin words i know are either medical terms or from harry potter XD	t	f
1	Gone with the Wind	t	f
569	Johnson	t	\N
570	Joe	t	\N
551	Andrew	t	\N
571	Sue	t	\N
563	Bob	f	\N
580	Answers	t	\N
572	No Idea	t	t
554	Is	t	t
553	Weeks	f	t
555	a 	t	t
556	average	t	t
557	person	t	\N
558	some	t	\N
559	of	t	\N
560	the	f	\N
552	time	f	\N
561	ANDREW	f	\N
562	Yo	t	\N
564	Test	f	\N
565	Guessing	f	\N
566	No Idea	f	\N
567	Still Guessing	f	\N
568	Dunno	f	\N
575	Wish	f	\N
576	You	f	\N
577	Knew	f	\N
578	All	f	\N
579	The 	t	\N
581	Like	f	\N
582	I 	f	\N
574	Do	f	\N
583	John	f	\N
573	You	t	\N
595	in-n-out	t	\N
597	bollywood	f	\N
606	San Diego Zoo	f	f
587	Sacremento	t	\N
598	sacramento	t	\N
588	The Chair	t	\N
599	the chair	t	\N
589	~469 sq miles	t	\N
600	a lot	f	\N
590	Hollywood	t	\N
601	hollywood	t	\N
591	Malibu	t	\N
602	laguna beach	f	\N
592	Anaheim	t	\N
593	(Snobs jk) Angelenos 	t	f
604	angelinos	t	\N
605	califor-nay-aye	t	\N
596	ucla	t	\N
585	UCLA? Only UC I know :p 	t	\N
607	UCLA	t	\N
586	Hollywoodland	t	\N
608	Spider-man	f	\N
609	Sacramento	t	\N
610	The Chair	t	\N
612	Hollywood	t	\N
613	Newport Beach	f	\N
614	Anaheim	t	\N
615	An Angelino or Angelina	t	\N
639	In N Out	t	\N
641	Hollywood	t	\N
642	Sacramento	t	\N
643	The Table	f	\N
644	2000 sq miles	f	\N
645	San Fernando	f	\N
646	Calabasas	f	\N
647	Anaheim	t	\N
649	California	t	\N
616	Southern California	t	\N
640	UCLA	t	\N
611	400 sq mi	f	\N
648	Los Angelans	t	\N
584	In-n-Out 	t	\N
617	In N Out	t	\N
628	In n Out	t	\N
619		f	\N
630	lala land	f	\N
620	Sacramento	t	\N
631	Sacramento	t	\N
621	The Table	f	\N
632	The Chair	t	\N
622	200	f	\N
623	San Fernando	f	\N
624	Newport Beach	f	\N
633	30000	f	\N
603	anaheim	t	\N
625	Anaheim	t	\N
626	Angelinos	t	\N
655	600	f	f
654	the chair	t	f
653	Sacramento	t	f
652	Hollywoods	t	f
650	Wendy's	f	f
663	(The) Crown	t	\N
656	Hollywood	t	\N
634	West Hollywood	f	\N
635	Santa Monica	f	\N
657	Santa Monica	f	\N
636	Anaheim	t	\N
658	Annaheim	t	\N
659	Angel	f	\N
660	California	t	\N
638	Los Angeles	t	\N
627	California	t	\N
594	California/mostly south california	t	\N
618	UCLA	t	\N
629	UCLA	t	\N
745	biggest loser	f	\N
651	Stanford	f	\N
637	Angeloniana	t	\N
672	this	f	\N
674	is 	f	\N
675	 a tes	f	\N
676	for aandrew	f	\N
677		f	\N
678		f	\N
679		f	\N
680		f	\N
681		f	\N
673		f	\N
682		f	\N
746	saparanoes	t	\N
683	Toast	f	\N
693	TV Shows	t	\N
671	TV Shows	t	\N
662	Survivor	t	\N
684	Survivor	t	\N
692	The Office	t	\N
670	(The) Office	t	f
669	Alto?	f	\N
691	Soprano	t	\N
690	Jeopardy	t	\N
668	Jeopardy	t	\N
667	Friends	t	\N
689	Friends	t	\N
688	Bachelors	t	\N
666	(The) Bachelor	t	\N
665	Sherlock Holmes	t	\N
687	Sherlock Holmes	t	\N
686	The Weakest Link	t	\N
664	The Weakest Link 	t	\N
661	Toast / Cheers	t	f
685	Crown	t	\N
696	A crown	t	\N
705	Cheers	t	\N
718	crown	t	\N
707	Crown	t	\N
708		f	\N
694	A toast	f	\N
697	A flake	f	\N
719	weakest link	t	\N
709	Sherlock Holmes	t	\N
720	johnny depp 21 jump street	f	\N
698	Jonny	f	\N
716	toast	f	\N
699	Bachelors	t	\N
710	Bachelors	t	\N
711	Friends	t	\N
721	bachelors	t	\N
722	friends	t	\N
700	Friends	t	\N
712		f	\N
723	danger mouse	f	\N
701	Risk	f	\N
702	Soprano	t	\N
724	soprano	t	\N
713	Soprano	t	\N
714	The Office (!!)	t	\N
725	the office	t	\N
703	The Office	t	\N
695	Survivor	t	\N
717	survivor	t	\N
706	Survivor	t	\N
715	TV	t	\N
726	tv shows	t	\N
704	TV Shows	t	\N
738	cheers	t	\N
740	crown	t	\N
741	apprentice	f	\N
742	sherlock	t	\N
743	bachelor	t	\N
744	friends	t	\N
736	office	t	\N
747	office	t	\N
728	surviour	t	\N
739	survivor	t	\N
737	Britain	f	\N
748	tv shows	t	\N
749	One flew over the cuckoo nest	f	\N
751	Cloudy with a chance of meatballs	t	\N
727	Toast	f	t
729	crown	t	t
730	leader	f	t
731	Sherlock Holmes	t	t
732	Bachelor	t	t
733	spouse	f	t
734		f	t
735	tenor	f	t
752	Dry ice	t	\N
753	Drizzle	t	\N
754	Snow white	t	\N
755	Purple rain???	t	\N
756	Son	t	\N
757	Hail	t	\N
758	Shower	t	\N
750	Breazy	t	\N
759	Weather	t	\N
762	the lion king	f	\N
760	casa blanca	f	\N
763	a fart	f	\N
764	temper	f	\N
765	snow white	t	\N
766	purple rain	t	\N
767	junior	f	\N
768	brown nosing	f	\N
769	mirror	f	\N
771	gone with the wind	t	\N
776	Snow white	t	\N
773	sunny with a chance of meatballs	t	\N
777	purple rain	t	\N
778	son	t	\N
774	ash	f	\N
770	old stuff	f	\N
775	mist	f	\N
782	Gone with the wind	t	\N
784		f	\N
786		f	\N
788		f	\N
787	Cinderella	f	\N
789	Son	t	\N
790		f	\N
791	Shower	t	\N
783		f	\N
779	rain	f	\N
780	shower	t	\N
761	easy peasy lemon squeezy	t	\N
772	easy breezy	t	\N
781	weather	t	\N
793	Gone with the wind	t	\N
785	Carbon	f	\N
796	dry ice	t	\N
795	up	f	\N
797	sprinkling	f	\N
798	cinderella	f	\N
799	no idea	f	\N
800	son	t	\N
801	bow	f	\N
802	shower	t	\N
794	cake	f	\N
803	a party?	f	\N
792	Oscars	f	\N
804	Gone With the Wind	t	\N
806	Bolt	f	\N
807	Dry Ice	t	\N
809	Snow White	t	\N
810	Purple Rain	t	\N
811	Son	t	\N
812	Hail	t	\N
813	Shower	t	\N
814	Weather	t	\N
808	Pour	f	\N
805	Cakewalk	f	\N
816	trivial	f	\N
825		f	\N
824	Shower	t	\N
823		f	\N
822	Sons	t	\N
821	Purple Rain	t	\N
820	Snow White	t	\N
819	drizzle	t	\N
818	Dry Ice	t	\N
817	Frozen	f	\N
815	Gone with the Wind	t	\N
826	strawberry blonde	t	\N
828	rasberry pi	t	\N
829	fit	f	\N
830	boardless scrabble	f	\N
831		f	\N
832	telemundo	f	\N
833	apple	t	\N
834	johnny	f	\N
835	the mushroom	f	\N
827	blackberry	t	\N
836	food	t	\N
837	Orange	f	\N
848	blond	t	\N
850	raspberry pi	t	\N
839	Rasperry Pie	t	\N
840	Passion-(fruit)	t	\N
851	rage	f	\N
852	bannanagrams	t	\N
841	Bananagrams	t	\N
842	Lemonade?	f	\N
853	no idea	f	\N
854	no idea...	f	\N
843	Banana Republic	f	\N
844	Apple	t	\N
855	apple	t	\N
845	Joe? Johnny? Doe? DEER? 	f	\N
856	jack ?	f	\N
857	peach	t	\N
846	PEACH	t	\N
838	Blackberry	t	\N
849	apple (again)?	f	\N
847	Fruit	t	\N
859	Strawberry blonde	t	\N
870		f	\N
861	Rasberry pi	t	\N
872	Raspberry Pie	t	\N
862		f	\N
873	Nuts	f	\N
874		f	\N
863	apples to apples	f	\N
875	Marble	f	\N
864	lime	t	\N
865	banana republic	f	\N
876		f	\N
866	apple	t	\N
877	Apple	t	\N
867	johnny apple seed or jack(fruit)	t	\N
878		f	\N
879	Peach	t	\N
868	peach	t	\N
860	blackberry	t	\N
871	Blackberry	t	\N
869	fruit	t	\N
880	Fruit	t	\N
881	Orange	f	\N
883	Raspberry Pi	t	\N
884	Rage	f	\N
885	Bananagrams	t	\N
886		f	\N
887	Juicy	f	\N
888	Apple	t	\N
889	James (...and the giant peach?)	f	\N
890	Peach	t	\N
882	Blackberry	t	\N
891	Fruit	t	\N
892	strawberry blond	t	\N
894	raspberry	t	\N
895		f	\N
896	bananagram	t	\N
897	lime	t	\N
898	lululemon	f	\N
899	Apple	t	\N
900	Jonny	f	\N
901	Princess Peach	t	\N
893	Blackberry	t	\N
902	fruit	t	\N
858	pie flavors	t	\N
903	cancer	t	\N
905	lime	t	\N
906	one flew over the cuckoo's nest	t	\N
907	The Ed Sullivan Show	f	\N
908	Rad	f	\N
909	scarlett johanson	t	\N
910	corona	t	\N
911	cold	t	\N
912	shingle	t	\N
904	stroke	t	\N
913	illnesses	t	\N
914	cancer	t	\N
916	lime	t	\N
917		f	\N
918		f	\N
920		f	\N
921	regal	f	\N
922	cold	t	\N
923	shingles	t	\N
915		f	\N
924		f	\N
925	Cancer	t	\N
927	Lime(s)	t	\N
928	Seizure? 	f	\N
929	Michael Parkinsons	t	\N
930	Sick	t	\N
931	Scarlett (fever) Johansson 	t	\N
932	Corona(virus)	t	\N
933	cold	t	\N
934	Shingles	t	\N
926	stroke	t	\N
935	diseases	t	\N
936	cancer	t	\N
947	cancer	t	\N
938	lime	t	\N
949	lime	t	\N
939	shining	f	\N
950	batman	f	\N
940	wit	f	\N
951	ted	f	\N
941	sick	t	\N
952	groovy	f	\N
942	scarlett	t	\N
953	princess amadela	f	\N
943	corona	t	\N
954	corona	t	\N
944	cold	t	\N
955	cold play	t	\N
956	shingle	t	\N
945	shingles	t	\N
937	rub	f	\N
948	strokes	t	\N
957	bands	f	\N
946	types of diseases / illnesses 	t	\N
958	Cancer	t	\N
960	Lime	t	\N
961	The Shining	f	\N
962	Talk show	f	\N
963	Sick	t	\N
964	Scarlett Johansson	t	\N
965	Regula	f	\N
966	Cold	t	\N
967	Slab	f	\N
959	Rub	f	\N
968	Illnesses	t	\N
919	chilly	t	\N
969	Enter 	f	t
971	your	t	t
972	answer	t	\N
973		f	\N
974		f	\N
975		f	\N
976		f	\N
977		f	\N
978		f	\N
970		f	\N
979		f	\N
\.


--
-- Data for Name: game_room; Type: TABLE DATA; Schema: public; Owner: rnnasielttjyxr
--

COPY public.game_room (id, code, type, name, round, status) FROM stdin;
3	0J081X	QUIZ	0J081X	1	CREATED
4	72NDKQ	QUIZ	72NDKQ	1	CREATED
5	R2J4YJ	QUIZ	R2J4YJ	1	CREATED
6	Y3J802	QUIZ	Y3J802	1	CREATED
7	2FGI9O	QUIZ	2FGI9O	1	CREATED
8	QQV74E	QUIZ	QQV74E	1	CREATED
9	7WHRKJ	QUIZ	7WHRKJ	1	CREATED
10	PWEVS7	QUIZ	PWEVS7	1	CREATED
12	WK2K	QUIZ	Ben Gibb-Reid	2	CREATED
1	ANDREW	QUIZ	Andrews Pub Quiz	6	CREATED
11	VY6W	QUIZ	Test Game	1	CREATED
2	OPXYKV	QUIZ	OPXYKV	1	CREATED
14	YCV1	QUIZ	TestGame	3	CREATED
15	76A7	QUIZ	Test Again	1	CREATED
16	TRVA	QUIZ	Labs Trivia Night 5.13	6	CREATED
13	CLGX	QUIZ	CoreLogic Test	9	CREATED
\.


--
-- Data for Name: game_round; Type: TABLE DATA; Schema: public; Owner: rnnasielttjyxr
--

COPY public.game_round (id, round, player_id, answer1_id, answer2_id, answer3_id, answer4_id, answer5_id, answer6_id, answer7_id, answer8_id, answer9_id, answer10_id, answer_theme_id) FROM stdin;
1	1	9	1	3	4	5	6	7	8	9	10	2	11
2	1	2	12	14	15	16	17	18	19	20	21	13	22
3	1	6	23	25	26	27	28	29	30	31	32	24	33
4	1	8	34	36	37	38	39	40	41	42	43	35	44
5	1	5	45	47	48	49	50	51	52	53	54	46	55
6	1	7	56	58	59	60	61	62	63	64	65	57	66
7	1	1	67	69	70	71	72	73	74	75	76	68	77
8	1	3	78	80	81	82	83	84	85	86	87	79	88
9	1	4	89	91	92	93	94	95	96	97	98	90	99
10	2	9	100	102	103	104	105	106	107	108	109	101	110
11	2	7	111	113	114	115	116	117	118	119	120	112	121
12	2	6	122	124	125	126	127	128	129	130	131	123	132
13	2	5	133	135	136	137	138	139	140	141	142	134	143
14	2	8	144	146	147	148	149	150	151	152	153	145	154
15	2	1	155	157	158	159	160	161	162	163	164	156	165
16	2	3	166	168	169	170	171	172	173	174	175	167	176
17	2	2	177	179	180	181	182	183	184	185	186	178	187
18	2	4	188	190	191	192	193	194	195	196	197	189	198
19	3	6	199	201	202	203	204	205	206	207	208	200	209
20	3	9	210	212	213	214	215	216	217	218	219	211	220
21	3	5	221	223	224	225	226	227	228	229	230	222	231
22	3	2	232	234	235	236	237	238	239	240	241	233	242
23	3	4	243	245	246	247	248	249	250	251	252	244	253
24	3	8	254	256	257	258	259	260	261	262	263	255	264
25	3	7	265	267	268	269	270	271	272	273	274	266	275
26	3	1	276	278	279	280	281	282	283	284	285	277	286
27	3	3	287	289	290	291	292	293	294	295	296	288	297
28	3	13	298	300	301	302	303	304	305	306	307	299	308
29	4	6	309	311	312	313	314	315	316	317	318	310	319
30	4	9	320	322	323	324	325	326	327	328	329	321	330
31	4	5	331	333	334	335	336	337	338	339	340	332	341
32	4	8	342	344	345	346	347	348	349	350	351	343	352
33	4	13	353	355	356	357	358	359	360	361	362	354	363
34	4	4	364	366	367	368	369	370	371	372	373	365	374
35	4	1	375	377	378	379	380	381	382	383	384	376	385
36	4	3	386	388	389	390	391	392	393	394	395	387	396
37	4	2	397	399	400	401	402	403	404	405	406	398	407
38	4	7	408	410	411	412	413	414	415	416	417	409	418
39	4	18	419	421	422	423	424	425	426	427	428	420	429
40	5	13	430	432	433	434	435	436	437	438	439	431	440
41	5	9	441	443	444	445	446	447	448	449	450	442	451
42	5	6	452	454	455	456	457	458	459	460	461	453	462
43	5	18	463	465	466	467	468	469	470	471	472	464	473
44	5	5	474	476	477	478	479	480	481	482	483	475	484
45	5	7	485	487	488	489	490	491	492	493	494	486	495
46	5	1	496	498	499	500	501	502	503	504	505	497	506
47	5	8	507	509	510	511	512	513	514	515	516	508	517
48	5	4	518	520	521	522	523	524	525	526	527	519	528
49	5	2	529	531	532	533	534	535	536	537	538	530	539
50	5	3	540	542	543	544	545	546	547	548	549	541	550
51	1	23	551	553	554	555	556	557	558	559	560	552	561
52	1	24	562	564	565	566	567	568	569	570	571	563	572
53	2	25	573	575	576	577	578	579	580	581	582	574	583
54	1	31	584	586	587	588	589	590	591	592	593	585	594
55	1	33	595	597	598	599	600	601	602	603	604	596	605
56	1	35	606	608	609	610	611	612	613	614	615	607	616
57	1	29	617	619	620	621	622	623	624	625	626	618	627
58	1	34	628	630	631	632	633	634	635	636	637	629	638
59	1	30	639	641	642	643	644	645	646	647	648	640	649
61	2	31	661	663	664	665	666	667	668	669	670	662	671
63	2	29	683	685	686	687	688	689	690	691	692	684	693
65	2	30	705	707	708	709	710	711	712	713	714	706	715
66	2	33	716	718	719	720	721	722	723	724	725	717	726
60	1	32	650	652	653	654	655	656	657	658	659	651	660
62	2	36	672	674	675	676	677	678	679	680	681	673	682
64	2	35	694	696	697	698	699	700	701	702	703	695	704
67	2	37	727	729	730	731	732	733	734	735	736	728	737
68	2	34	738	740	741	742	743	744	745	746	747	739	748
69	3	31	749	751	752	753	754	755	756	757	758	750	759
70	3	33	760	762	763	764	765	766	767	768	769	761	770
71	3	34	771	773	774	775	776	777	778	779	780	772	781
72	3	37	782	784	785	786	787	788	789	790	791	783	792
73	3	35	793	795	796	797	798	799	800	801	802	794	803
74	3	30	804	806	807	808	809	810	811	812	813	805	814
75	3	29	815	817	818	819	820	821	822	823	824	816	825
76	4	33	826	828	829	830	831	832	833	834	835	827	836
77	4	31	837	839	840	841	842	843	844	845	846	838	847
78	4	35	848	850	851	852	853	854	855	856	857	849	858
79	4	34	859	861	862	863	864	865	866	867	868	860	869
80	4	37	870	872	873	874	875	876	877	878	879	871	880
81	4	30	881	883	884	885	886	887	888	889	890	882	891
82	4	29	892	894	895	896	897	898	899	900	901	893	902
83	5	35	903	905	906	907	908	909	910	911	912	904	913
84	5	37	914	916	917	918	919	920	921	922	923	915	924
85	5	31	925	927	928	929	930	931	932	933	934	926	935
86	5	34	936	938	939	940	941	942	943	944	945	937	946
87	5	33	947	949	950	951	952	953	954	955	956	948	957
88	5	30	958	960	961	962	963	964	965	966	967	959	968
89	3	38	969	971	972	973	974	975	976	977	978	970	979
\.


--
-- Data for Name: player; Type: TABLE DATA; Schema: public; Owner: rnnasielttjyxr
--

COPY public.player (id, name, game_room_id) FROM stdin;
1	TRACEY	1
2	S2	1
3	LEAH	1
4	SUNSHINE FINGERS	1
5	TFORCE!	1
6	ONE'DERS	1
7	OLVERA STREET	1
8	SABRA	1
9	ANDREWSISTER	1
11	A VERY GOOD TEAM	1
12	A VERY GOOD TEAM 	1
13	A TEAM OF PLAYERS	1
15	ADMIN	1
18	MISSY E	1
19	AWESOME IDAP TEAM	11
20	ME	12
21	ANDREW	13
22	HTTP://WWW.ANDREWWEEKS.T	13
23	WEEKS	13
24	YOYOTESTER	14
25	JOHNNYTEST	14
26	YO	14
27	JOE SMITH	15
28	JOHN	15
29	ARLENE	16
30	DREW	16
31	THE ONE THE ONLY AJW	16
32	YURIY BOYKO	16
33	ALEX CHANG	16
34	JONNY	16
35	MATT	16
36	BUG TESTING	16
37	YURIY	16
38	TEST	13
\.


--
-- Data for Name: schema_version; Type: TABLE DATA; Schema: public; Owner: rnnasielttjyxr
--

COPY public.schema_version (version_rank, installed_rank, version, description, type, script, checksum, installed_by, installed_on, execution_time, success) FROM stdin;
1	1	1	baselineTables	SQL	V1__baselineTables.sql	507259837	fccnkkekaakmbk	2020-05-13 20:44:17.10221	26	t
\.


--
-- Name: answer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rnnasielttjyxr
--

SELECT pg_catalog.setval('public.answer_id_seq', 979, true);


--
-- Name: game_room_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rnnasielttjyxr
--

SELECT pg_catalog.setval('public.game_room_id_seq', 16, true);


--
-- Name: game_round_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rnnasielttjyxr
--

SELECT pg_catalog.setval('public.game_round_id_seq', 89, true);


--
-- Name: player_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rnnasielttjyxr
--

SELECT pg_catalog.setval('public.player_id_seq', 38, true);


--
-- Name: answer answer_pkey; Type: CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_pkey PRIMARY KEY (id);


--
-- Name: game_room game_room_code_key; Type: CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_room
    ADD CONSTRAINT game_room_code_key UNIQUE (code);


--
-- Name: game_room game_room_pkey; Type: CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_room
    ADD CONSTRAINT game_room_pkey PRIMARY KEY (id);


--
-- Name: game_round game_round_pkey; Type: CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_pkey PRIMARY KEY (id);


--
-- Name: player player_name_game_room_id_key; Type: CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_name_game_room_id_key UNIQUE (name, game_room_id);


--
-- Name: player player_pkey; Type: CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_pkey PRIMARY KEY (id);


--
-- Name: schema_version schema_version_pk; Type: CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.schema_version
    ADD CONSTRAINT schema_version_pk PRIMARY KEY (version);


--
-- Name: schema_version_ir_idx; Type: INDEX; Schema: public; Owner: rnnasielttjyxr
--

CREATE INDEX schema_version_ir_idx ON public.schema_version USING btree (installed_rank);


--
-- Name: schema_version_s_idx; Type: INDEX; Schema: public; Owner: rnnasielttjyxr
--

CREATE INDEX schema_version_s_idx ON public.schema_version USING btree (success);


--
-- Name: schema_version_vr_idx; Type: INDEX; Schema: public; Owner: rnnasielttjyxr
--

CREATE INDEX schema_version_vr_idx ON public.schema_version USING btree (version_rank);


--
-- Name: game_round game_round_answer10_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer10_id_fkey FOREIGN KEY (answer10_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer1_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer1_id_fkey FOREIGN KEY (answer1_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer2_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer2_id_fkey FOREIGN KEY (answer2_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer3_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer3_id_fkey FOREIGN KEY (answer3_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer4_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer4_id_fkey FOREIGN KEY (answer4_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer5_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer5_id_fkey FOREIGN KEY (answer5_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer6_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer6_id_fkey FOREIGN KEY (answer6_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer7_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer7_id_fkey FOREIGN KEY (answer7_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer8_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer8_id_fkey FOREIGN KEY (answer8_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer9_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer9_id_fkey FOREIGN KEY (answer9_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_answer_theme_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_answer_theme_id_fkey FOREIGN KEY (answer_theme_id) REFERENCES public.answer(id);


--
-- Name: game_round game_round_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.game_round
    ADD CONSTRAINT game_round_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.player(id);


--
-- Name: player player_game_room_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rnnasielttjyxr
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_game_room_id_fkey FOREIGN KEY (game_room_id) REFERENCES public.game_room(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: rnnasielttjyxr
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO rnnasielttjyxr;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO rnnasielttjyxr;


--
-- PostgreSQL database dump complete
--

