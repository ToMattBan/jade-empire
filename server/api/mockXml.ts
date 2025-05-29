export default defineEventHandler((event) => {
  return `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<tlk language="0">
  <string id="1">ERROR: UNEXPECTED CHARACTER</string>
  <string id="2">ERROR: FATAL COMPILER ERROR</string>
  <string id="3">ERROR: PROGRAM COMPOUND STATEMENT AT START</string>
  <string id="4">ERROR: UNEXPECTED END COMPOUND STATEMENT</string>
  <string id="5">ERROR: AFTER END COMPOUND STATEMENT</string>
  <string id="6">ERROR: PARSING VARIABLE LIST</string>
  <string id="7">ERROR: UNKNOWN STATE IN COMPILER</string>
  <string id="8">ERROR: INVALID DECLARATION TYPE</string>
  <string id="9">ERROR: NO LEFT BRACKET ON EXPRESSION</string>
  <string id="10">ERROR: NO RIGHT BRACKET ON EXPRESSION</string>
  <string id="11">ERROR: BAD START OF STATEMENT</string>
  <string id="12">ERROR: NO LEFT BRACKET ON ARG LIST</string>
  <string id="13">ERROR: NO RIGHT BRACKET ON ARG LIST</string>
  <string id="14">ERROR: NO SEMICOLON AFTER EXPRESSION</string>
  <string id="15">ERROR: PARSING ASSIGNMENT STATEMENT</string>
  <string id="16">ERROR:CANNOT ASSIGN A VALUE TO THE LEFT-SIDE OF THIS STATEMENT.</string>
  <string id="17">ERROR: BAD CONSTANT TYPE</string>
  <string id="18">ERROR: IDENTIFIER LIST FULL</string>
  <string id="19">ERROR: NON-INTEGER ID FOR INTEGER CONSTANT</string>
  <string id="20">ERROR: NON FLOAT ID FOR FLOAT CONSTANT</string>
  <string id="21">ERROR: NON STRING ID FOR STRING CONSTANT</string>
  <string id="22">ERROR: VARIABLE ALREADY USED WITHIN SCOPE</string>
  <string id="23">ERROR: VARIABLE DEFINED WITHOUT TYPE</string>
  <string id="24">ERROR: INCORRECT VARIABLE STATE LEFT ON STACK</string>
  <string id="25">ERROR: NON INTEGER EXPRESSION WHERE INTEGER REQUIRED</string>
  <string id="26">ERROR: VOID EXPRESSION WHERE NON VOID REQUIRED</string>
  <string id="27">ERROR: INVALID PARAMETERS FOR ASSIGNMENT</string>
  <string id="28">ERROR: DECLARATION DOES NOT MATCH PARAMETERS</string>
  <string id="29">ERROR: LOGICAL OPERATION HAS INVALID OPERANDS</string>
  <string id="30">ERROR: EQUALITY TEST HAS INVALID OPERANDS</string>
  <string id="31">ERROR: COMPARISON TEST HAS INVALID OPERANDS</string>
  <string id="32">ERROR: SHIFT OPERATION HAS INVALID OPERANDS</string>
  <string id="33">ERROR: ARITHMETIC OPERATION HAS INVALID OPERANDS</string>
  <string id="34">ERROR: UNKNOWN OPERATION IN SEMANTIC CHECK</string>
  <string id="35">ERROR: SCRIPT TOO LARGE</string>
  <string id="36">ERROR: RETURN STATEMENT HAS NO PARAMETERS</string>
  <string id="37">ERROR: NO WHILE AFTER DO KEYWORD</string>
  <string id="38">ERROR: FUNCTION DEFINITION MISSING NAME</string>
  <string id="39">ERROR: FUNCTION DEFINITION MISSING PARAMETER LIST</string>
  <string id="40">ERROR: MALFORMED PARAMETER LIST</string>
  <string id="41">ERROR: BAD TYPE SPECIFIER</string>
  <string id="42">ERROR: NO SEMICOLON AFTER STRUCTURE</string>
  <string id="43">ERROR: ELLIPSIS IN IDENTIFIER</string>
  <string id="44">ERROR: FILE NOT FOUND</string>
  <string id="45">ERROR: INCLUDE RECURSIVE</string>
  <string id="46">ERROR: INCLUDE TOO MANY LEVELS</string>
  <string id="47">ERROR: PARSING RETURN STATEMENT</string>
  <string id="48">ERROR: PARSING IDENTIFIER LIST</string>
  <string id="49">ERROR: PARSING FUNCTION DECLARATION</string>
  <string id="50">ERROR: DUPLICATE FUNCTION IMPLEMENTATION</string>
  <string id="51">ERROR: TOKEN TOO LONG</string>
  <string id="52">ERROR: UNDEFINED STRUCTURE</string>
  <string id="53">ERROR: LEFT OF STRUCTURE PART NOT STRUCTURE</string>
  <string id="54">ERROR: RIGHT OF STRUCTURE PART NOT FIELD IN STRUCTURE</string>
  <string id="55">ERROR: UNDEFINED FIELD IN STRUCTURE</string>
  <string id="56">ERROR: STRUCTURE REDEFINED</string>
  <string id="57">ERROR: VARIABLE USED TWICE IN SAME STRUCTURE</string>
  <string id="58">ERROR: FUNCTION IMPLEMENTATION AND DEFINTITION DIFFER</string>
  <string id="59">ERROR: MISMATCHED TYPES</string>
  <string id="60">ERROR: INTEGER NOT AT TOP OF STACK</string>
  <string id="61">ERROR: RETURN TYPE AND FUNCTION TYPE MISMATCHED</string>
  <string id="62">ERROR: NOT ALL CONTROL PATHS RETURN A VALUE</string>
  <string id="63">ERROR: UNDEFINED IDENTIFIER</string>
  <string id="64">ERROR: NO FUNCTION MAIN() IN SCRIPT</string>
  <string id="65">ERROR: FUNCTION MAIN() MUST HAVE A VOID RETURN VALUE</string>
  <string id="66">ERROR: FUNCTION MAIN() MUST HAVE NO PARAMETERS</string>
  <string id="67">ERROR: NON VOID FUNCTION CANNOT BE A STATEMENT</string>
  <string id="68">ERROR: BAD VARIABLE NAME</string>
  <string id="69">ERROR: NON OPTIONAL PARAMETER CANNOT FOLLOW OPTIONAL PARAMETER</string>
  <string id="70">ERROR: TYPE DOES NOT HAVE AN OPTIONAL PARAMETER</string>
  <string id="71">ERROR: NON CONSTANT IN FUNCTION DECLARATION</string>
  <string id="72">ERROR: PARSING CONSTANT VECTOR</string>
  <string id="73">ERROR: OPERAND MUST BE AN INTEGER LVALUE</string>
  <string id="74">ERROR: CONDITIONAL REQUIRES SECOND EXPRESSION</string>
  <string id="75">ERROR: CONDITIONAL MUST HAVE MATCHING RETURN TYPES</string>
  <string id="76">ERROR: MULTIPLE DEFAULT STATEMENTS WITHIN SWITCH</string>
  <string id="77">ERROR: MULTIPLE CASE CONSTANT STATEMENTS WITHIN SWITCH</string>
  <string id="78">ERROR: CASE PARAMETER NOT A CONSTANT INTEGER</string>
  <string id="79">ERROR: SWITCH MUST EVALUATE TO AN INTEGER</string>
  <string id="80">ERROR: NO COLON AFTER DEFAULT LABEL</string>
  <string id="81">ERROR: NO COLON AFTER CASE LABEL</string>
  <string id="82">ERROR: NO SEMICOLON AFTER STATEMENT</string>
  <string id="83">ERROR: BREAK OUTSIDE OF LOOP OR CASE STATEMENT</string>
  <string id="84">ERROR: TOO MANY PARAMETERS ON FUNCTION</string>
  <string id="85">ERROR: UNABLE TO OPEN FILE FOR WRITING</string>
  <string id="86">ERROR: UNTERMINATED STRING CONSTANT</string>
  <string id="87">ERROR: NO FUNCTION STARTINGCONDITIONAL() IN SCRIPT</string>
  <string id="88">ERROR: FUNCTION STARTINGCONDITIONAL() MUST HAVE AN INT RETURN VALUE</string>
  <string id="89">ERROR: FUNCTION STARTINGCONDITIONAL() MUST HAVE NO PARAMETERS</string>
  <string id="90">ERROR:  SKIPPING DECLARATION VIA &quot;case&quot; STATEMENT DISALLOWED.</string>
  <string id="91">ERROR:  SKIPPING DECLARATION VIA &quot;default&quot; STATEMENT DISALLOWED.</string>
  <string id="92">ERROR:  &quot;else&quot; WITHOUT &quot;if&quot; STATEMENT.</string>
  <string id="93">ERROR: TOO MANY INSTRUCTIONS</string>
  <string id="94">ERROR: TOO MANY LEVELS OF RECURSION</string>
  <string id="95">ERROR: FILE NOT OPENED</string>
  <string id="96">ERROR: FILE NOT COMPILED SUCCESSFULLY</string>
  <string id="97">ERROR: INVALID AUX CODE</string>
  <string id="98">ERROR: NULL VIRTUAL MACHINE NODE</string>
  <string id="99">ERROR: STACK OVERFLOW</string>
  <string id="100">ERROR: STACK UNDERFLOW</string>
  <string id="101">ERROR: INVALID OP CODE</string>
  <string id="102">ERROR: INVALID EXTRA DATA ON OP CODE</string>
  <string id="103">ERROR: INVALID COMMAND</string>
  <string id="104">ERROR: FAKE SHORTCUT LOGICAL OPERATION</string>
  <string id="105">ERROR: DIVIDE BY ZERO</string>
  <string id="106">ERROR: FAKE ABORT SCRIPT</string>
  <string id="107">ERROR: IP OUT OF CODE SEGMENT</string>
  <string id="108">ERROR: COMMAND IMPLEMENTER NOT SET</string>
  <string id="109">ERROR: UNKNOWN TYPE ON RUN TIME STACK</string>
  <string id="110">Please click to begin</string>
  <string id="111">New Game</string>
  <string id="112">Load Game</string>
  <string id="113">Download new content.</string>
  <string id="114">Play Mini-games</string>
  <string id="115">Gallery</string>
  <string id="116">Options</string>
  <string id="117">Select</string>
  <string id="118">Warning: Current progress will be lost!  Load game &quot;&lt;CUSTOM0&gt;&quot;?</string>
  <string id="119">Campaign progress in this save game will be lost.  Delete game &quot;&lt;CUSTOM0&gt;&quot;?</string>
  <string id="120">OK</string>
  <string id="121">Cancel</string>
  <string id="122">New Game?</string>
  <string id="124">You have no saved games.</string>
  <string id="125">Save game &quot;&lt;CUSTOM0&gt;&quot;?</string>
  <string id="126">Empty Slot</string>
  <string id="127">Are you sure you want to overwrite &lt;CUSTOM0&gt;?</string>
  <string id="128">Save Game</string>
  <string id="129">Change the Audio Settings (Music Volume, FX Volume, etc.).</string>
  <string id="130">Change Video Settings.</string>
  <string id="131">Change Gameplay Settings (Difficulty, Force Feedback, etc.).</string>
  <string id="132">Audio Settings</string>
  <string id="133">Video Settings</string>
  <string id="134">Gameplay Settings</string>
  <string id="135">Sound Effects: (&lt;CUSTOM0&gt;%)</string>
  <string id="136">Music: (&lt;CUSTOM0&gt;%)</string>
  <string id="137">Movie: (&lt;CUSTOM0&gt;%)</string>
  <string id="138">Voice: (&lt;CUSTOM0&gt;%)</string>
  <string id="139">Change the volume of explosions, background noises, fight sounds, etc.</string>
  <string id="140">Change the volume of the music.</string>
  <string id="141">Change the volume of pre-rendered movies.</string>
  <string id="142">Change the volume of conversations.</string>
  <string id="143">Letterbox Movies</string>
  <string id="144">Letterbox Conversation</string>
  <string id="145">Allow movies to be played in Letterbox mode.</string>
  <string id="146">Allow conversations to happen in Letterbox mode.</string>
  <string id="147">On</string>
  <string id="148">Off</string>
  <string id="149">Difficulty</string>
  <string id="150">Feedback</string>
  <string id="151">Control</string>
  <string id="152">Adjust the difficulty of various game modes.</string>
  <string id="153">Edit controller vibration, gore, and subtitle options.</string>
  <string id="154">Change input options.</string>
  <string id="155">Combat</string>
  <string id="156">TEMP: INC Difficulty</string>
  <string id="157">Adjust the difficulty of your opponents during combat.</string>
  <string id="158">TEMP: Adjust the difficulty of the interactive cutscenes (INC).</string>
  <string id="159">Very Easy</string>
  <string id="160">Student</string>
  <string id="161">Master</string>
  <string id="162">Grand Master</string>
  <string id="163">Very Hard</string>
  <string id="164">Mini-game</string>
  <string id="165">Control the difficulty of the mini-games.</string>
  <string id="166">Brightness Control</string>
  <string id="167">Increase and decrease the brightness of the game.</string>
  <string id="168">Combat</string>
  <string id="169">Move Display</string>
  <string id="170">Plot NPC</string>
  <string id="171">Subtitles</string>
  <string id="172">Display statistics about your attacks in combat mode.</string>
  <string id="173">Select the level of information displayed about combat styles.</string>
  <string id="174">Indicate important characters with a plot-giver icon.</string>
  <string id="175">Display subtitles for spoken dialog.</string>
  <string id="176">Default</string>
  <string id="177">Target Right</string>
  <string id="178">Alternate Config</string>
  <string id="179">HEAD CAM</string>
  <string id="180">Custom Setup</string>
  <string id="181">Default Setup for Jade Empire
Press OK to select this scheme</string>
  <string id="182">RESET CAMERA</string>
  <string id="183">Alternate Setup for Jade Empire
Press OK to select this scheme</string>
  <string id="184">Target Left</string>
  <string id="185">Define your own control scheme.
A to modify controls
X  Saves
B  Cancels</string>
  <string id="186">Unable to load Saved Game (cannot read file). Press OK to continue.</string>
  <string id="187">COMBAT</string>
  <string id="188">MOVEMENT</string>
  <string id="189">START MENU</string>
  <string id="190">KICK</string>
  <string id="191">PUNCH</string>
  <string id="192">Journal</string>
  <string id="193">UNASSIGNED</string>
  <string id="194">ACTION</string>
  <string id="195">CANCEL/BACK</string>
  <string id="234">Mini-game</string>
  <string id="235">Block</string>
  <string id="236">Chi Strike</string>
  <string id="237">Focus</string>
  <string id="238">Options</string>
  <string id="239">Audio Menu</string>
  <string id="240">Video Menu</string>
  <string id="241">Save</string>
  <string id="242">Load</string>
  <string id="243">TITLE MENU</string>
  <string id="244">GAMEPLAY MENU</string>
  <string id="245">Difficulty Menu</string>
  <string id="246">Combat Controller Setup</string>
  <string id="247">Feedback Menu</string>
  <string id="248">MAIN MENU</string>
  <string id="257">Silver</string>
  <string id="269">Character Selection</string>
  <string id="270">Name:</string>
  <string id="271">Style:</string>
  <string id="272">Mind:</string>
  <string id="273">Body:</string>
  <string id="274">Spirit:</string>
  <string id="275">Furious &lt;CUSTOM0&gt;</string>
  <string id="276">Boxer &lt;CUSTOM0&gt;</string>
  <string id="277">Tiger &lt;CUSTOM0&gt;</string>
  <string id="278">Panther &lt;CUSTOM0&gt;</string>
  <string id="279">Monk &lt;CUSTOM0&gt;</string>
  <string id="280">Scholar &lt;CUSTOM0&gt;</string>
  <string id="281">&lt;CUSTOM0&gt; the Prodigy</string>
  <string id="282">&lt;CUSTOM0&gt; the Lotus Blossom</string>
  <string id="283">Zhu</string>
  <string id="284">Mai</string>
  <string id="285">Jiang</string>
  <string id="286">Gefu</string>
  <string id="287">Mi</string>
  <string id="288">Scholar Ling</string>
  <string id="289">H&apos;san</string>
  <string id="290">Zhiang</string>
  <string id="291">100-Pip Fist</string>
  <string id="292">Leaping Tiger Style</string>
  <string id="293">Willow</string>
  <string id="294">Balanced</string>
  <string id="295">Random</string>
  <string id="296">Shift</string>
  <string id="297">Symbols</string>
  <string id="298">Symbols</string>
  <string id="299">Done</string>
  <string id="300">Cancel</string>
  <string id="301">Enter your name:</string>
  <string id="302">Backspace</string>
  <string id="303">Delete</string>
  <string id="306">Pillar</string>
  <string id="308" soundid="184165">Don&apos;t act like it&apos;s a surprise. Lots of people speak it, although I suppose it is concentrated mostly in the Prosperous East.</string>
  <string id="312">Tiger Shen</string>
  <string id="313">Yun</string>
  <string id="314">Furious Ming</string>
  <string id="315">Monk Zeng</string>
  <string id="316">Li</string>
  <string id="317">Lu</string>
  <string id="318">Scholar Ling</string>
  <string id="319">Wu</string>
  <string id="320">ERROR: IF CONDITION CANNOT BE FOLLOWED BY A NULL STATEMENT</string>
  <string id="321">ERROR: INVALID TYPE FOR CONST KEYWORD</string>
  <string id="322">ERROR: CONST KEYWORD CANNOT BE USED ON NON GLOBAL VARIABLES</string>
  <string id="323">ERROR: INVALID VALUE ASSIGNED TO CONSTANT</string>
  <string id="324">Character View</string>
  <string id="330">Fox Spirit</string>
  <string id="332">Given Name:</string>
  <string id="333">Warrior Name:</string>
  <string id="345">Character</string>
  <string id="346">A:Change Button  B:Save &amp; Exit    Up/Down: Change Action</string>
  <string id="347" soundid="124430">Yes... I suppose I&apos;ll have to face her eventually. And I should be safe, if you&apos;re with me. Okay, let&apos;s go.</string>
  <string id="348">Let&apos;s go see Ai Ling and sort this out.</string>
  <string id="355">Nervous Dun Ding</string>
  <string id="359">Find Doctor An</string>
  <string id="360">Get Carter</string>
  <string id="361">Rock the World</string>
  <string id="362">Locate Elvis impersonator Carter Syphin and Return him to the king.</string>
  <string id="363">Get the Air Guitar of Power and use it to defend the castle from the boy bands.</string>
  <string id="364">Locate and Kill the mofo Carter</string>
  <string id="365">Use the Air Guitar of Power to smash open the heads of Ozzy&apos;s Family.</string>
  <string id="366">Locate Carter</string>
  <string id="367">Locate Air Guitar</string>
  <string id="368">Give Shibbled Quintsey to Dolfernad</string>
  <string id="369">Attack Fionians.</string>
  <string id="370">LT:Prev - D-pad:Move Cursor - B:Cancel - RT:Next</string>
  <string id="371">Primary Quests</string>
  <string id="372">Side Quests</string>
  <string id="373">Description</string>
  <string id="374">Tasks</string>
  <string id="375">TEMP: I am a very very long string of epic and galactic proportions. Once I was short but then on my birthday I grew really long and now I am the longest string in this String Table. My sole purpose in life is to test the Chapter Screen and I can be removed and/or changed to something else later because I am essentially useless except for being really really long. This one time at Band Camp I killed a hooker but she wasnt really dead and now she haunts my mind like a ghost of some sort. In fact just the other night she was in my room while I was asleep and took pictures of me and put them on the internet and I was afraid and I may never sleep again ever ever.</string>
  <string id="376">Continue</string>
  <string id="378">Chi Heal</string>
  <string id="379">Please reconnect the controller and press START to continue.</string>
  <string id="381" soundid="141533">What is there to say? She tells me that she is feeling much better. If you wish to face her, I will allow it.</string>
  <string id="391" soundid="575">Ah, there you are, my student. I watched your bout against Jing Woo with great pride. You have gained almost all you can from the practice arena.</string>
  <string id="426">Fisherman</string>
  <string id="448">I&apos;m sure you will tell me what I need to know, Master.</string>
  <string id="449" soundid="126607">It&apos;s good to give due consideration to your choice. Once you start to use a real weapon, you get used to its particular balance very quickly.</string>
  <string id="450">You have met the ghost of Miss Chan. She is crying for her lost baby, and she will not rest until it is found.</string>
  <string id="451" soundid="126608">You&apos;re adept enough to pick up other weapons later, but this is your first real weapon, so I want you to have the right one.</string>
  <string id="453" soundid="187912">[From here it&apos;s obvious that if you close the dam again, the ruins will flood fairly quickly and you would no longer be able to reach the old Tien&apos;s Landing site.]</string>
  <string id="455">Townsquare</string>
  <string id="457" soundid="141534">You are intrigued by the secretive prize I am offering to whoever can beat Kia Min&apos;s record, but she cannot compete while injured.</string>
  <string id="512">Girl</string>
  <string id="517">Peasant Woman</string>
  <string id="522">Peasant Man</string>
  <string id="532" soundid="669">I recall that, as a child, you fell and bruised your arm. I comforted you, saying that small pains are part of learning. But not every setback imparts wisdom. You must be careful.</string>
  <string id="548">Boy</string>
  <string id="573">Bearded Tongue Grass Poultice</string>
  <string id="574">A medicinal poultice designed to accelerate the healing of wounds. This poultice is infused with extract of red silk grass, a powerful herb that hastens recovery by binding the wounded flesh together.
</string>
  <string id="594">Red Silk Grass Poultice</string>
  <string id="595">A medicinal poultice designed to accelerate the healing of wounds. This poultice is infused with extract of red silk grass, a powerful herb that hastens recovery by binding the wounded flesh together.</string>
  <string id="935">Door</string>
  <string id="1049" soundid="1200">Ah, you are back. I hope this unfortunate matter with the bandits has not caused undue stress. Some good people were lost, but many were saved.</string>
  <string id="1052" soundid="1203">It is done! The challenge has concluded and the winner is clear.</string>
  <string id="1053" soundid="1204">No! I am not finished!</string>
  <string id="1054">You need more discord in your heart to use this gem.</string>
  <string id="1055" soundid="1206">Gao! I have made enough concessions to you today! I thought I could guide you away from your corrupted path, but you are too much the son of Gao the Greater!</string>
  <string id="1056" soundid="1207">You are no longer welcome among my students, and your father&apos;s house shall have no more business here, despite his influence.</string>
  <string id="1057" soundid="1208">I was not beaten! Not by this peasant!</string>
  <string id="1059">Courtesan</string>
  <string id="1060" soundid="71463">Life went on, but no word ever came from the Imperial city. No warning, no explanation. Did we displease the Emperor? Or were we just beneath his notice? I will never know.</string>
  <string id="1062" soundid="71464">True, they weren&apos;t underwater for a while. For some reason the Great Dam was opened, and the lake drained. But now that the Great Dam is closed, the water is back.</string>
  <string id="1064">Sailor</string>
  <string id="1065" soundid="71465">You&apos;re not the first who didn&apos;t want to listen to me. I&apos;m sure you won&apos;t be the last.</string>
  <string id="1069">Beggar</string>
  <string id="1072">First Brother Kai</string>
  <string id="1074">Dockworker</string>
  <string id="1088">The discord in your heart rejects this gem.</string>
  <string id="1092">Urchin</string>
  <string id="1194">End Conversation</string>
  <string id="1195">Continue</string>
  <string id="1562">Use the Xbox Live to download new game content.</string>
  <string id="1564">Start a new game.</string>
  <string id="1567">Load a previously saved game.</string>
  <string id="1568">Play an unlocked mini-game.</string>
  <string id="1578">Stance History Page</string>
  <string id="1956">AND</string>
  <string id="2077" soundid="127646">Gem is hidden behind wall. Go down path and you see. Assassins gots rockets set up. They getting ready to blow up wall with rockets.</string>
  <string id="2079" soundid="127648">Yes, yes. But rockets need dragon powder. Lotus Assassins always gots dragon powder handy. Good for blowing stuff up. Look around their camp and you find it.</string>
  <string id="2080" soundid="127649">You get dragon powder and use rockets to blow up wall. When wall is gone, you go look for gem. Gem is behind wall, somewhere. You just search around.</string>
  <string id="2081" soundid="127650">Better question: Why should demon trust you? But you listen good now. Rat demon knows lots of things.</string>
  <string id="2082">Lost Spirit</string>
  <string id="2084">Go on, get out of here.</string>
  <string id="2085">You&apos;re an evil demon. I must destroy you.</string>
  <string id="2086">I think I&apos;ll kill you anyway.</string>
  <string id="2090">OR</string>
  <string id="2091">TEMP: I am a Waypoint.</string>
  <string id="2092">TEMP: I am also a waypoint, too, as well.</string>
  <string id="2101">View the gallery.</string>
  <string id="2102">View audio, video, and gameplay options.</string>
  <string id="2335">Balanced</string>
  <string id="2343">Available Points:</string>
  <string id="2350">Master Radiant</string>
  <string id="2417" soundid="143430">A rat always flashes his fangs when backed into a corner.</string>
  <string id="2420" soundid="142480"></string>
  <string id="2421">Spirit Realm</string>
  <string id="2422">Scholar Kongyu</string>
  <string id="2474">Heaven</string>
  <string id="2475">Red Lion Figurine</string>
  <string id="2477" soundid="20805">Ah, I see the glint of intelligence, nobility, wisdom, consideration, and piety in your eye! A fine day to you! What can I sell you?</string>
  <string id="2478">So I should use the rockets to blow up the wall?</string>
  <string id="2480">Sounds like a trap. I better kill just kill you.</string>
  <string id="2487">Yellow Lion Figurine</string>
  <string id="2488" soundid="20806">Well, I make my living by knowing people. I can clearly see that you are of the finest sort. That is to say, the sort with silver ready in hand.</string>
  <string id="2489" soundid="20807">Can I interest you in some seed? What about a pitchfork? I have hay, as well.</string>
  <string id="2511" soundid="126210">Good, I have better things to do than to stand around here.</string>
  <string id="2512">Commoner</string>
  <string id="2513">Abomination</string>
  <string id="2518" soundid="135266">No! I mean, there is safety of a sort here. We have had refuge here so far, and the paths below are far from safe.</string>
  <string id="2519" soundid="135267">It is best that we stay here. Surely you will find a way to destroy the murderous fox.</string>
  <string id="2520">Is there any way we could lead these people to safety?</string>
  <string id="2523">Warp</string>
  <string id="2525" soundid="135272">Your concept of honor is outdated too. Finish a dog when he&apos;s down.</string>
  <string id="2529" soundid="191419"></string>
  <string id="2530">Mister Ren at Rest</string>
  <string id="2598" soundid="2898">You are my best pupil, though you came to me an orphan. I have tried to prepare you for the responsibility your skills will bring. Have you given thought to your future?</string>
  <string id="2599" soundid="2899">Your lessons are complete. Remember these basic skills and keep them at heart, but also remember that classes are not a true measure of ability. Always be ready to learn.</string>
  <string id="2601" soundid="2901">There will be a time for that later. I have kept you hungry for information, but you must trust that my reasons are valid. It is for your benefit that I do this.</string>
  <string id="2606">I want to ask some questions.</string>
  <string id="2723" soundid="152296">Your words mean nothing! You are a murderer, a killer! Gao was everything to me, and now he is gone!</string>
  <string id="2724" soundid="141535">I will only allow such a contest when her wounds are healed. Kia Min has always been handy with herbs, maybe she knows some way you could help her.</string>
  <string id="2749" soundid="141537">Yes, and the students are on edge from the bandit attack. It would do them good to work some of that out.</string>
  <string id="2750">Lion head token</string>
  <string id="2751" soundid="3051">You were defeated by your own foolish ambition and predictable temper. I will speak with you in my chambers about your expulsion. Go now!</string>
  <string id="2752" soundid="3052"></string>
  <string id="2757" soundid="141538">It is a shame about Kia Min. She holds the record for the most opponents defeated in my little training challenge. No one can challenge her record while she is injured.</string>
  <string id="2767" soundid="141539">You could match it, but with Kia Min injured, there aren&apos;t enough students free to beat it. You will have to wait until she is healed to challenge the record.</string>
  <string id="2785">A Mournful Ghost</string>
  <string id="2787" soundid="132488">This is the realm of the Forest Shadow, my mistress. It is her piece of heaven.</string>
  <string id="2893" soundid="3199">Everyone! This challenge is concluded. I&apos;m sure the victor would appreciate your congratulations. They are well earned.</string>
  <string id="3256" soundid="26314">Ah, there you are. Have you finished all your business with your fellow students? I expect our next conversation to change a great many things. You should be ready.</string>
  <string id="3257" soundid="3771">Who let you back here? It&apos;s bad enough I must work with incompetents. I don&apos;t need you walking through my kitchen!</string>
  <string id="3258" soundid="3772">You really shouldn&apos;t be here. Mister Teh does not like others to observe him working.</string>
  <string id="3405" soundid="3922">Unless, eh, pretty lady, you have come to take me from this existence of pain with your considerable charms.</string>
  <string id="3406" soundid="3923">Yeah, me too. Okay, Mister Teh?</string>
  <string id="3407" soundid="3924">Step back, Mister Wong. You just... step back.</string>
  <string id="3408" soundid="3925">Do thugs like you think you can just walk back here for food anytime? If I wanted *human* interaction, I&apos;d have a kiosk in the square! Or maybe a trough.</string>
  <string id="3409" soundid="3926">Why a trough? We don&apos;t feed the animals, Mister Teh. That&apos;s handled by the farmers.</string>
  <string id="3410" soundid="3927">Oh, again you are here. What is it now? Maybe you need directions? I have a few for you, that&apos;s for sure.</string>
  <string id="3411" soundid="3928">Don&apos;t trust him. His directions usually start out friendly but end up with a spatula in someone&apos;s nose. Why would anyone want to know how to do that?</string>
  <string id="3412" soundid="3929">Thank you, Mister Wong. Thank you for over-explaining the intricacies of my wit. Implied threats are ever so much more effective when they are no longer implied!</string>
  <string id="3413" soundid="3930">What is this, the third time you&apos;ve bothered me? Go tell the customers in the teahouse their food will be late because of someone&apos;s nosy tour.</string>
  <string id="3414" soundid="3931">He doesn&apos;t really mean that. I mean, if everyone showed up in town, sure, there would be some delay, but most people eat at home, you know?</string>
  <string id="3415" soundid="3932">Mister Wong... you are an imbecile.</string>
  <string id="3416" soundid="3933">You again? I really don&apos;t have time for you. How about you come back in a week. Maybe a season would be good.</string>
  <string id="3417" soundid="3934">We can talk while we cut the vegetables, Mister Teh. We can make time if they need something.</string>
  <string id="3418" soundid="3935">Mister Wong... I hate you.</string>
  <string id="3419" soundid="3936">Oh, more interruptions. Look, I don&apos;t have any work, I don&apos;t need anything fetched, and I don&apos;t have any lost relatives for you to rescue!</string>
  <string id="3420" soundid="3937">You said your nephew was lost. You don&apos;t want help finding him?</string>
  <string id="3421" soundid="3938">Lost cause, Mister Wong, I said he was a lost cause. The boy was spoiled by my sister and.... Why am I telling you this? Just... go away.</string>
  <string id="3422" soundid="3939">Did I not just speak with you? I have no patience for this. I am not here to amuse you.</string>
  <string id="3423" soundid="3940">And yet you are so often funny. Thank you for your levity, Mister Teh.</string>
  <string id="3424" soundid="3941">Shut up, Mister Wong.</string>
  <string id="3425" soundid="3942">Ah, another fine joke. I love them all.</string>
  <string id="3432">She won&apos;t bother him anymore. She&apos;s dead.</string>
  <string id="3433" soundid="127042">It ain&apos;t easy being a dock worker. We don&apos;t get paid much, but we sure earn it!</string>
  <string id="3434" soundid="127043">We oughta form a guild. Everyone else has them, why not us?</string>
  <string id="3435" soundid="127044">Now that the pirates are gone, things are getting back to normal.</string>
  <string id="3436" soundid="127045">Ain&apos;t been no work down here on the dock since the dam opened.</string>
  <string id="3437" soundid="127046">Sure, the dam is closed. But with them pirates out there, we still got no work.</string>
  <string id="3439">Kang</string>
  <string id="3442">Silk Fox</string>
  <string id="3446" soundid="108212">I wish that I had another dozen fighters who could rise through the ranks with your alacricity!</string>
  <string id="3447" soundid="108213">I will not dishonor you with a pairing to those who cannot match your skill. In time someone will come along, but I suspect your equal will not be manifestering any time soon.</string>
  <string id="3450" soundid="170232">You meditate and restore your Focus.</string>
  <string id="3470">Silk Fox</string>
  <string id="3473">Kang</string>
  <string id="3476">Hou</string>
  <string id="3479">Sky</string>
  <string id="3482">Dawn Star</string>
  <string id="3485">Chai Ka</string>
  <string id="3523">TEST - Louie&apos;s Magic Thumbscrews</string>
  <string id="3525">TEST - Louie&apos;s Magic Thumbscrews</string>
  <string id="3526">TEST - Louie&apos;s Magic Thumbscrews</string>
  <string id="3527">TEST - Louie&apos;s Magic Thumbscrews</string>
  <string id="3537" soundid="4054">A polite response from one of you strangers? Go on, don&apos;t waste your respect on me. I&apos;m no high minister, I just cook.</string>
  <string id="3538" soundid="4055">Me? There is nothing to know about me. I cook for ungrateful people who do not understand what good food is.</string>
  <string id="3539" soundid="4056">Your palate is very sophisticated, Mister Teh. Some say your dishes are... er... acquired tastes.</string>
  <string id="3540" soundid="4057">No. No, I am quite certain that the problem is with the customers. If you wish to keep your position, Mister Wong, you will smile and nod.</string>
  <string id="3541" soundid="4058">Mister Wong is here to cut the vegetables and heft the rice bags. His job does not include criticizing the menu. I am the head chef. He is nothing.</string>
  <string id="3542" soundid="4059">But I am learning. I will train hard to become the best chef I can.</string>
  <string id="3543" soundid="4060">There is a small chance he could become slightly more than nothing, but I have seen no sign of it as yet. Some people are heroes; some merely clap as heroes walk by.</string>
  <string id="3544" soundid="4061">Good. I need to concentrate on the menu. You want to eat, you&apos;ll leave me alone.</string>
  <string id="3545" soundid="4062">Then go walk around it. I do not waste my time collecting rumors. Everybody eats. That is all I need to know.</string>
  <string id="3546" soundid="4063">The spirit world? You are talking about stories for children. I believe what I see. If I see it, it is real. Very simple.</string>
  <string id="3547" soundid="4064">If you want some deeper discussion than that, go to a temple. Me, I will stay here and cook for the living.</string>
  <string id="3548" soundid="4065">I hear stories just like everyone else, but they are always told by some scared farmer who wouldn&apos;t know the wind from a howl. I believe what I see. That&apos;s enough.</string>
  <string id="3550">Yazhen</string>
  <string id="3552" soundid="4069">Perhaps not, but I have little patience for the rules of so-called polite society. They only increase the time I must spend away from my work.</string>
  <string id="3553" soundid="4070">You see, Mister Wong? That is how we are regarded, dogs to be brushed aside. Talk like that will not get you a meal at the best of times.</string>
  <string id="3557" soundid="172543">This place is... strange. The Guardian says not to worry, but... I hear things here. I don&apos;t know what they are.</string>
  <string id="3559" soundid="172544">This place... there are spirits. The Guardian can hear them, and I can too, but there is something else... like the sound of the ocean. Voices.</string>
  <string id="3561" soundid="172545">The mists here hold voices... coming from below. They&apos;re too quiet though... Old. In the stones and the mist.</string>
  <string id="3564" soundid="172546">No, it&apos;s... it&apos;s different. It&apos;s like listening to the wind while people are yelling at you. The Guardian says... he says not to ask.</string>
  <string id="3565">I did not mean to disturb you.</string>
  <string id="3566">I want to ask something about you.</string>
  <string id="3569">You are very harsh with your assistant.</string>
  <string id="3572">I&apos;m leaving now.</string>
  <string id="3573">I need information about Tien&apos;s Landing.</string>
  <string id="3574">What do you know about the spirit world?</string>
  <string id="3576">You don&apos;t believe in spirits?</string>
  <string id="3577" soundid="172547">He says it doesn&apos;t matter who they are... who they were. He says &quot;They are not under Heaven.&quot; He doesn&apos;t want to say anything more.</string>
  <string id="3578">That is not an appropriate greeting, cook.</string>
  <string id="3579">You will show me the proper respect, dog!</string>
  <string id="3587" soundid="108259">Go ask them yourselves, if you want to know more. Hapless Han&apos;s faced more than a few of them too, if you want his perspicacions.</string>
  <string id="3589" soundid="108261"></string>
  <string id="3590" soundid="108262"></string>
  <string id="3591" soundid="4108">I can&apos;t speak with you. Mister Teh is very strict with his apprentices.</string>
  <string id="3592" soundid="4109">Everyone gets used to Mister Teh&apos;s dishes eventually. They are very... complex.</string>
  <string id="3593" soundid="4110">Mister Teh keeps the kitchen well-stocked with... exotic ingredients. I&apos;m sure they are all delicacies somewhere.</string>
  <string id="3594" soundid="108263"></string>
  <string id="3595" soundid="108264">Wait. Before we go any further, I think we need to talk about a few things.</string>
  <string id="3596" soundid="108265">I agree!</string>
  <string id="3597" soundid="161664"></string>
  <string id="3598" soundid="108267">What is that child doing here? Can she not spare us a moment&apos;s peace from her prattle?</string>
  <string id="3601" soundid="108270"></string>
  <string id="3602" soundid="108271">So this is the lair of the enemy? We are really going inside... wait. I should say something. If only....</string>
  <string id="3603" soundid="108272">Wait!</string>
  <string id="3605" soundid="108274">Ah, she *would* find her way here. Is there anywhere free of her influence?</string>
  <string id="3857">Do you want to buy &lt;CUSTOM0&gt;?</string>
  <string id="3858">Pilgrim&apos;s Rest Inn</string>
  <string id="3873" soundid="106247">She&apos;s even got a standing offer to pass the secrets of her blade mastery on to the first fighter to defeat her. So far, no one has managed that feat.</string>
  <string id="3877" soundid="106250">Is there something you actually need from me?</string>
  <string id="3883" soundid="4456"></string>
  <string id="3884">Guard</string>
  <string id="3887">Merchant Kia Jong</string>
  <string id="3896">Peasant</string>
  <string id="3907">Slowed</string>
  <string id="3908" soundid="127040">Business sure has dropped with those sailors gone.</string>
  <string id="3913" soundid="23046">I&apos;m not a rich man. But my reputation, my ship, and my men are worth everything I can give. Close the dam and free us, and I&apos;ll give you all the silver I have.</string>
  <string id="3920" soundid="23053">The Great Dam is open, and the lake that feeds into the river is gone. My ship, the Lucky Night, is stranded here like a lame water buffalo.</string>
  <string id="3922" soundid="23055">They&apos;re good men, but we&apos;re all a bit mad right now. The Great Dam is open, and the lake that feeds into the river is gone. My ship is stranded here like a lame water buffalo.</string>
  <string id="3923" soundid="23105">I offered you an enormous amount of silver to perform a simple task. Instead, you chose to close the Great Dam and ruin my business.</string>
  <string id="3924" soundid="23057">If you&apos;ve come to complain about my men, I don&apos;t want to hear it. When Minister Sheng gets the Great Dam closed, we&apos;ll be happy to leave. Until then, we&apos;re stuck here.</string>
  <string id="3930" soundid="23063">If I leave the ship, my men will have Tien&apos;s Landing in flames. The locals think the dam is haunted, and Minister Sheng can&apos;t find anyone brave enough to risk closing it.</string>
  <string id="3931">Demon</string>
  <string id="3932">I&apos;ll help you.</string>
  <string id="3933">I&apos;ll think about it.</string>
  <string id="3934">I have more important things to do.</string>
  <string id="3938" soundid="154747">In other words, accepting your place in the world and using your skills accordingly is the optimal way of following the path of harmony.</string>
  <string id="3940">If the river is too low and fast, why don&apos;t you go close the dam?</string>
  <string id="3949">Master Smiling Hawk</string>
  <string id="3953" soundid="26644">The way is clear to the Imperial City. You need only speak to our mad friend, Kang, and he will prepare the flyer.</string>
  <string id="3954">Imperial Soldier</string>
  <string id="3958" soundid="125460">I... I will do my best. But I don&apos;t know anything. The Lotus Assassins just told us to guard the gate while they searched the ruins. That&apos;s all. I swear.</string>
  <string id="3959">Wu the Lotus Blossom</string>
  <string id="3960" soundid="145324">Unless you need me, I will stay here at this new camp. It seems safe enough, and it may as well serve as a base for us.</string>
  <string id="3961">Player</string>
  <string id="3967" soundid="145325">I will stay here at this new camp unless you need me. It seems like a good enough place to base ourselves out of.</string>
  <string id="3971">Silk Fox</string>
  <string id="3972">Old Master</string>
  <string id="3975" soundid="31107">I have been thinking since our match. I came to this place seeking honor, but I feel that my many victories have all been hollow.</string>
  <string id="3976" soundid="31108">We did not speak before our match, but I see you are not like the rabble that fills this place. I think.... Yes, it is time for me to leave again and seek other challenges.</string>
  <string id="3977" soundid="31109">I think.... Yes, it is time for me to leave again and seek other challenges.</string>
  <string id="3980" soundid="145337">You dogs are pathetic. I&apos;ll take care of this myself!</string>
  <string id="3983" soundid="160300">[The machine is inactive. You corrupted it with Zeng Sai&apos;s corpse and obtained the Spirit Shard.]</string>
  <string id="3985">Your men don&apos;t respect you very much, do they?</string>
  <string id="3986">I&apos;ll leave you alone, then.</string>
  <string id="3987">You&apos;re stuck here?</string>
  <string id="3993">Do you want to sell &lt;CUSTOM0&gt;?</string>
  <string id="3997" soundid="125461">They are evil. Pure evil! They forced me to serve them. They would have killed me if I disobeyed. I had no choice but to guard this door while they searched the ruins.</string>
  <string id="3998" soundid="31110">Judge it as you wish; I simply tire of this place. More specifically, I tire of dealing with the machinations of the Guild.</string>
  <string id="4000" soundid="31111">I think I shall return to the Prosperous East and continue my studies. But first, I am sworn to teach the secrets of my style to any who can best me. Let me instruct you.</string>
  <string id="4002" soundid="31112">Since you told me the Serpent&apos;s plan, I will teach you a more advanced technique. The key is balance and form. Your motion must be swift but precise.</string>
  <string id="4003">Death&apos;s Hand</string>
  <string id="4004">Lieutenant</string>
  <string id="4006" soundid="31116">What I sensed was some opening in your guard. I cannot name it and could not find it leading me to believe that it was a brilliant gambit.</string>
  <string id="4007" soundid="31117">Could it be a gambit you are barely aware of?</string>
  <string id="4012" soundid="105586">A few scruffy bandits and their mysterious leader show up, and suddenly everyone&apos;s pestering me about the village, like it&apos;s important.</string>
  <string id="4013" soundid="105587">Cursed bandits. Let their spirits lay troubled for all they have done. Some good people fell here, but thanks to you, not as many as might have.</string>
  <string id="4014" soundid="105588">And my statue... it&apos;s a good thing they didn&apos;t touch it. Disgracing such a tribute would be like disgracing the Emperor himself.</string>
  <string id="4015" soundid="142484"></string>
  <string id="4016" soundid="142485">Never bargain with a man who makes deals for a living. You&apos;ll always lose.</string>
  <string id="4044" soundid="23095">I&apos;m grateful you agreed to close the dam for me, but I see the water is still low. The longer you wait, the more difficult it becomes to control my men.</string>
  <string id="4049" soundid="23100">I&apos;m Captain Ing. This is my ship, the Lucky Night. She&apos;s a fine vessel... or was. But now that the Great Dam is open, the Lucky Night is stranded here, along with me and my men. </string>
  <string id="4051">Who are you?</string>
  <string id="4054" soundid="23106">It was a pleasure doing business with you earlier, my friend. The best deals are those where all parties profit. As you can see, business is still quite brisk for me.</string>
  <string id="4055" soundid="23107">I think you know. Minister Sheng has asked you to go out to the Great Dam. He must have given you the key to the ruins.</string>
  <string id="4056" soundid="127286">I have seen his kind in the city. He thinks his family&apos;s wealth is a substitute for nobility and is angered when others still see him for what he is: a crass and spoiled bully.</string>
  <string id="4059" soundid="23111">No need to rush to a decision. Just keep it in mind. If you destroy the controls, bring me some proof, and I will happily honor my word.</string>
  <string id="4063">You found:</string>
  <string id="4064">A:Continue</string>
  <string id="4065">Saving game. Please don&apos;t shut down Jade Empire.</string>
  <string id="4147">Prerequisites not met.</string>
  <string id="4148">Disallowed</string>
  <string id="4149">Already Purchased</string>
  <string id="4190">&lt;CUSTOM0&gt;+&lt;CUSTOM1&gt;</string>
  <string id="4191">&lt;CUSTOM0&gt;, &lt;CUSTOM1&gt;</string>
  <string id="4241">Replace existing mapped style?</string>
  <string id="4264">Bandit Captain</string>
  <string id="4267">Sheng Guard</string>
  <string id="4309">Imperial City - Market District</string>
  <string id="4636">Mister Ren&apos;s ghost lies peacefully and won&apos;t rise again.</string>
  <string id="4637">I am &lt;FullName&gt;, and you are about to be humbled.</string>
  <string id="4638">Mister Ren&apos;s ghost lies peacefully and won&apos;t rise again.</string>
  <string id="4639">Black Whirlwind</string>
  <string id="4644">Butcher</string>
  <string id="4649">Crash Site</string>
  <string id="4650">Cannibal</string>
  <string id="4655">Cannibal</string>
  <string id="4755">Inquisitor Lim</string>
  <string id="4760">Boat</string>
  <string id="4761">Turnkey Shiji</string>
  <string id="4766">Convict Ghost</string>
  <string id="4771">Strangler Jizu</string>
  <string id="4780" soundid="21543">No lake, no fish. How&apos;ll I feed my family?</string>
  <string id="4781" soundid="21544">With the dam closed I can fish and feed my family again!</string>
  <string id="4786">Dire Flame</string>
  <string id="4787">Dire Flame</string>
  <string id="4867">Proud Shanli</string>
  <string id="4876">Judge Fang</string>
  <string id="4881">Fang Guard</string>
  <string id="4886">Cannibal</string>
  <string id="4897">Jinlin</string>
  <string id="4902">Bodyguard Binggong</string>
  <string id="4910">Transition</string>
  <string id="4915">Biyu</string>
  <string id="4921">Biyu</string>
  <string id="4922">Character Record</string>
  <string id="4923">Ability Scores</string>
  <string id="4924">Health:</string>
  <string id="4925">Focus:</string>
  <string id="4926">Chi:</string>
  <string id="4927">Level:</string>
  <string id="5093" soundid="5728">You go away! Sung Bu very busy thinking right now.</string>
  <string id="5094" soundid="5729">If you must pester one of us, then make it my brother Sung Bo.</string>
  <string id="5095" soundid="14420">No, no, we can&apos;t allow that to happen. It would be too much to bear.</string>
  <string id="5097" soundid="14422">My daughter, Wen Si Wei, has fallen ill, and nothing in my previous training could help me with what ails her.</string>
  <string id="5098" soundid="14423">Her liver has been rotted from within, corrupted by some energy I have never encountered before.</string>
  <string id="5099" soundid="14424">I don&apos;t know what it is, but it has prevented her liver from functioning. Now, her body no longer responds. I fear she is dying.</string>
  <string id="5100" soundid="14425">That is what I fear. Her liver has been corrupted, and now her body no longer responds well. Without my efforts, she would be dead already.</string>
  <string id="5101" soundid="14426">No! No! No! It... Oh... you!</string>
  <string id="5103" soundid="14428">Have... have you managed to find some way to help me?</string>
  <string id="5104" soundid="14429">Please, if you can find something to help my daughter, you would have my eternal gratitude.</string>
  <string id="5105" soundid="14430">It can&apos;t be done! It can! Why not?!</string>
  <string id="5107" soundid="14432">It&apos;s a perfectly reasonable assumption. There&apos;s no reason why it shouldn&apos;t.</string>
  <string id="5108" soundid="14433">No! It has to work... It has to!</string>
  <string id="5111" soundid="14436">You!</string>
  <string id="5112" soundid="145504">A man in need of a doctor? Why haven&apos;t you brought him here?</string>
  <string id="5117" soundid="14442">But this poor wretch isn&apos;t much good either, No, not at all... But what else is there? What else is there?</string>
  <string id="5118" soundid="14443">Work, damn you! Work!</string>
  <string id="5123">%d/%d</string>
  <string id="5126" soundid="14448">Wha... What do you want? You... you can&apos;t have me, corpse! Not yet!</string>
  <string id="5128" soundid="14450">You... you&apos;re not dead!</string>
  <string id="5130" soundid="14452">I&apos;m sorry, I just... I just panicked. I thought you were some spirit, here for revenge.</string>
  <string id="5131" soundid="14453">Well... my incense didn&apos;t drive you away... but mostly, it&apos;s because I can&apos;t see through you.</string>
  <string id="5132" soundid="14454">My research has shown that virtually all spirits, especially those whose bodies can no longer support themselves, return as incorporeal beings.</string>
  <string id="5133" soundid="14455">It means you can see through them.</string>
  <string id="5134" soundid="14456">Ah, well... my work, you see, while very important--*very important*--may upset some of those spirits not fully at peace.</string>
  <string id="5135" soundid="14457">My name is Wen Zhi, but the few who come here call me mad. Mad Wen, they say. But I am not mad!</string>
  <string id="5136" soundid="14458">I am desperate, it is true, but I know what I&apos;m doing. The vengeful spirits of this place will not hold me!</string>
  <string id="5137" soundid="14459">I... I am conducting my research.</string>
  <string id="5138" soundid="14460">I am a doctor by trade, studying the internals of the body and the energies that drive it. But lately, I have come on hard, hard times.</string>
  <string id="5139" soundid="145505">His daughter? Well, then something must be done immediately. If need be, I&apos;m sure I could steal away from this noisy place for a few hours.</string>
  <string id="5143" soundid="145506">A new liver? That&apos;s... that&apos;s impossible! He would have to be mad to try that! Acupuncture can do wondrous things, but it cannot restore an organ that has failed.</string>
  <string id="5149">Some energy?</string>
  <string id="5150">She is dying then?</string>
  <string id="5151">What did you do?</string>
  <string id="5152">Is there anything I can do to help?</string>
  <string id="5153" soundid="190658">To the Golden Way.</string>
  <string id="5154">I am a spirit, here for revenge!</string>
  <string id="5157">I have a preserved liver.</string>
  <string id="5158">I don&apos;t have anything yet.</string>
  <string id="5159">Tell me about your work.</string>
  <string id="5160">Tell me about your daughter again.</string>
  <string id="5161">I have to go now.</string>
  <string id="5182">I&apos;m &lt;FullName&gt;, and I&apos;m not dead.</string>
  <string id="5183" soundid="145817">I am tired of seeing our carefully laid plans fall to your thuggish fists. The operations in the ruins and Gao&apos;s factory were my responsibility. Their destruction is my shame.</string>
  <string id="5184">Who are you?</string>
  <string id="5187">Revenge for what?</string>
  <string id="5188">How do you know I&apos;m not a spirit?</string>
  <string id="5191">What would a spirit want revenge for?</string>
  <string id="5192">Who are you?</string>
  <string id="5194">What are you doing here?</string>
  <string id="5198" soundid="5833">No woman can resist the alluring gaze of Lustful Lao! I can say &quot;good morning&quot; in seven dialects, which would you prefer I use tomorrow?</string>
  <string id="5199" soundid="5834">How dare you interrupt me!?</string>
  <string id="5200" soundid="5835">Oh, I knew you&apos;d be back. No woman alive can resist the call of Lustful Lao&apos;s powerful yang!</string>
  <string id="5201" soundid="5836">You return once again to interrupt Lustful Lao, master of the eye of beckoning, lord of the billowing sheets!</string>
  <string id="5202" soundid="5837">I see your true question dancing in your marvelous eyes. &quot;Yes, I *can* lift a two person rickshaw without my hands.&quot; Would you like a demonstration?</string>
  <string id="5203" soundid="5838">Not half as impressive as when I lean forward at forty five degrees and yet stand perfectly stable! Now, what are you really here to ask of Lustful Lao?</string>
  <string id="5204" soundid="5839">The only way to find out would be to spend an eternity of evenings with me, wouldn&apos;t it?</string>
  <string id="5205" soundid="5840">Recruiters for the Lotus Assassins, you say? Of course not! No wise man is too familiar with their order.</string>
  <string id="5207" soundid="5842">Damn! You have anticipated my most delicious comparison! Such fire! Shall we dance some more, frisky one?</string>
  <string id="5208" soundid="5843">Worst subject ever! Instead, let me ask you this: What are the fourteen essential differences between a bowl of steaming, sweetened rice and a night of fiery passion?</string>
  <string id="5209" soundid="5844">Don&apos;t know? Perfect! Lustful Lao humbly invites you back to a private room to share some rice at your convenience.</string>
  <string id="5210" soundid="5845">You&apos;re no fun!</string>
  <string id="5211" soundid="5846">Close, but I am far more accustomed to dining in groups. We should start slowly so your constitution is not sorely tested, I think.</string>
  <string id="5212" soundid="5847">Very well, go, do what you have to. Lustful Lao will remain here to stoke the coals of your desire.</string>
  <string id="5214">Handler</string>
  <string id="5220" soundid="5855">Alas, we were just getting to know each other, and we haven&apos;t even reached the best part. If we&apos;re lucky, it will make an appearance next time we speak.</string>
  <string id="5221" soundid="5856">Oh, please do. I shall enjoy the opportunity to admire your... departure.</string>
  <string id="5222" soundid="5857">Oooohhhh, the little peach likes to play, does she? Very well, I know exactly the information you seek.</string>
  <string id="5223" soundid="5858">You know, they say pigs have incredible... stamina. Consider that for when you return, because Lustful Lao knows his little peach will come back sooner or later.</string>
  <string id="5224" soundid="5859">If you must know, I, Lustful Lao, conqueror of the female kingdom, was emanating my yang. It is but one of my many irresistible charms.</string>
  <string id="5225" soundid="5860">You don&apos;t see my brimming knowledge of the 232 points of pleasure, as documented by Men Shi Tsao the Salacious Scholar?</string>
  <string id="5227" soundid="5862">Or that I perform the stretches outlined in the writings of the now-disbanded Lascivious Order of the Abbotless Monks every morning?</string>
  <string id="5228" soundid="5863">If even these simple things are beyond your ken, sir, then Lustful Lao has no time to spare on you!</string>
  <string id="5229" soundid="5864">If you, like all the others, seek to know my secrets, I will not share them. If you seek common knowledge, then you ask the wrong man.</string>
  <string id="5230" soundid="5865">I would not deprive the fair ladies of this watering hole a moment of my attention! Ask one of the others.</string>
  <string id="5231" soundid="5866">That&apos;s exactly what I intend to do. Now leave me, and don&apos;t stand between that waitress and me. You&apos;ll disturb the harmonies I&apos;ve established.</string>
  <string id="5232" soundid="5867">No need! The answers, in order, are, &quot;seventeen times,&quot; and, &quot;no, in a row, thank you very much for your sarcasm.&quot;</string>
  <string id="5233" soundid="5868">No, I&apos;m fully versed in the 68 positions of the flowering lotus, any of which I&apos;d be happy to show you once you&apos;re done with your silly questions.</string>
  <string id="5234">I was hoping to ask you some questions.</string>
  <string id="5235">That&apos;s... impressive, but no, I really just need answers.</string>
  <string id="5237">I&apos;m afraid of the answers I&apos;d get. I&apos;ll be going.</string>
  <string id="5238">I can&apos;t take this anymore. I&apos;m leaving.</string>
  <string id="5239">Maybe all of them, if you answer some questions first.</string>
  <string id="5241">None! Leave me alone, disgusting son of a sow!</string>
  <string id="5242">What were you doing?</string>
  <string id="5243">It&apos;s impossible to interrupt someone who is doing nothing, fool.</string>
  <string id="5244">What charms are those?</string>
  <string id="5246">This follower is not available.</string>
  <string id="5248">Since I&apos;ve already interrupted, do you have time for a few questions?</string>
  <string id="5250">I have no time for this, get back to whatever you claim to be doing.</string>
  <string id="5251">If you can keep your yang under check for a moment, can I ask a question or two?</string>
  <string id="5252">I think you&apos;ve lost your ability to count, then.</string>
  <string id="5253">I will let you get back to... whatever you&apos;re doing.</string>
  <string id="5254">Are you always this disgusting?</string>
  <string id="5255">Do you know anything about recruiters for the Lotus Assassins?</string>
  <string id="5257">Please, let&apos;s move on to something else!</string>
  <string id="5258">Tell me the most impressive structure *isn&apos;t* the palace, and I&apos;ll slap you.</string>
  <string id="5259">No, we&apos;re done for now.</string>
  <string id="5260">I really can&apos;t take this anymore.</string>
  <string id="5261">What can you tell me about this place?</string>
  <string id="5262">Well...</string>
  <string id="5263">There&apos;s...</string>
  <string id="5264">I&apos;ll pass, but I have some other questions.</string>
  <string id="5265">You must be used to dining alone. I&apos;d hate to interrupt.</string>
  <string id="5266">I should go.</string>
  <string id="5267">This is too much. I&apos;m leaving.</string>
  <string id="5302">Character Progress</string>
  <string id="5303">&lt;CUSTOM0&gt; Secrets Revealed</string>
  <string id="5304">&lt;CUSTOM0&gt; Opponents Defeated</string>
  <string id="5306" soundid="14512">I... I could not stand the possibility of her loss, so I took matters into my own hands.</string>
  <string id="5307" soundid="14513">I researched the workings of the body and the spirit, as well as the lore of the creatures that live beyond death.</string>
  <string id="5308" soundid="14514">I believe I have found a way to save my daughter... but I have not been successful in my efforts.</string>
  <string id="5309" soundid="14515">I have found a way to strengthen--no, to replace--the corrupt flesh of one living creature with that of another.</string>
  <string id="5310" soundid="14516">Through the energies of the earth and by the divine will of Heaven, her body can be made to accept the organ as if it were a part of her. She can be given a new life!</string>
  <string id="5311" soundid="14517">But these cursed, wretched corpses do nothing for me! They are too old, too... dead! Their organs are rotted beyond repair. Even the ones recently buried.</string>
  <string id="5312" soundid="14518">I need something else... something more. Either one that is perfectly preserved, or one that is fresh.</string>
  <string id="5313" soundid="14519">Her time is drawing near. If I cannot get a new organ for her soon, I fear it may be too late.</string>
  <string id="5314" soundid="14520">I need a liver that has been perfectly preserved. Even a short time after death, the flesh begins to decay. Only a few rare bodies are truly well preserved.</string>
  <string id="5315" soundid="14521">I have tried all the organs I could find, but none work. A nobleman here, Ji Xin, had his body preserved well enough and buried in this graveyard, but his corpse has... moved.</string>
  <string id="5316" soundid="14522">Thank you! Whatever I can give you in reward, I will. Please, hurry!</string>
  <string id="5317" soundid="145507">I know there are some practices deemed able to replace an organ, but organs do not just appear; someone must die to provide that replacement.</string>
  <string id="5318" soundid="14524">Please! I will give you whatever I can, just please help my daughter!</string>
  <string id="5319" soundid="14525">Please, stranger! If you just look, you may find a pristine liver for my daughter. I&apos;m sure there is a corpse preserved sufficiently in this very graveyard!</string>
  <string id="5320" soundid="14526">I... I cannot leave my daughter to look, not with her in this condition. She hangs on by the barest thread.</string>
  <string id="5321" soundid="14527">Luck... A curse that has haunted me in its absence.</string>
  <string id="5322" soundid="14528">You... you do? Thank you! Thank you!</string>
  <string id="5324" soundid="145508">He would sacrifice himself to save this girl? I am in awe. And I would be assisting, then? It is no wonder he could not do it himself. But is the situation so desperate?</string>
  <string id="5326" soundid="145509">I... I cannot let this be. I know I must help, though the thought of putting a living organ into another person... disgusts me. Still, his story is... touching. Tragic.</string>
  <string id="5536">Most Powerful Enemy Defeated</string>
  <string id="5537">Most Damaging Stance</string>
  <string id="5538">&lt;CUSTOM0&gt;:&lt;CUSTOM1&gt;:&lt;CUSTOM2&gt; Time Played</string>
  <string id="5539">&lt;CUSTOM0&gt;% Percentage Complete</string>
  <string id="5540">Jades</string>
  <string id="5541">Weapons</string>
  <string id="5542">Spirits</string>
  <string id="5543">Techniques</string>
  <string id="5560">Jin Lin</string>
  <string id="5590">General Kao</string>
  <string id="5598" soundid="6241">Busy, busy. The Heart of the Empire never slows down this time of year.</string>
  <string id="5599" soundid="6242">Travelers have been telling a lot of ghost stories recently. Is it really such a problem?</string>
  <string id="5600" soundid="6243">Either grab a table or ask the tavern keeper directly if you want to order.</string>
  <string id="5601" soundid="6244">I wish Lustful Lao would stop ogling me. It&apos;s disgusting.</string>
  <string id="5608" soundid="105438">Thanks for dealing with those bandits. You&apos;ve become quite a strong fighter.</string>
  <string id="5609" soundid="105439">I have never seen Master Li fight before. His skills are beyond anything I expected.</string>
  <string id="5610" soundid="127271">I think you&apos;ll change your mind when you hear my offer.</string>
  <string id="5611" soundid="127272">In appreciation of your earlier service for me, I&apos;ll tell you everything I know. However, I&apos;m afraid the news is not good.</string>
  <string id="5612" soundid="105442">There&apos;s blood in the river from those killed in the attack. Fish won&apos;t take bait while they&apos;re distracted by blood.</string>
  <string id="5613" soundid="105443">I had no idea you were so skilled. Your master teaches his students well.</string>
  <string id="5618">Character Advancement</string>
  <string id="5640">Steeper Yanru</string>
  <string id="5651" soundid="34738">[The Ravager silently stares at you from behind his mask.]</string>
  <string id="5652" soundid="34739">Leave me be, I am contemplating.</string>
  <string id="5660">Area Map</string>
  <string id="5661">Followers</string>
  <string id="5662">Styles</string>
  <string id="5663">Unable to load Saved Game (cannot open file). Press OK to continue.</string>
  <string id="5664">&lt;&lt;&lt;CUSTOM0&gt;&gt; appears to be damaged and cannot be used.  Press OK to continue.</string>
  <string id="5665">Unable to load Saved Game (cannot read file). Press OK to continue.</string>
  <string id="5666">Unable to load Saved Game (system error). Press OK to continue.</string>
  <string id="5667">Styles</string>
  <string id="5668">Mastery</string>
  <string id="5669">Style Points</string>
  <string id="5670">Cost</string>
  <string id="5671">Name</string>
  <string id="5672">School</string>
  <string id="5673">Styles</string>
  <string id="6140">Increase your Body to increase your Health and improve your Intimidation and Charm skills.</string>
  <string id="6141">Increase your Mind to increase your Focus and improve your Intuition and Charm skills.</string>
  <string id="6142">Increase your Spirit to increase your Chi and improve your Intimidation and Intuition skills.</string>
  <string id="6143">Accept the allocation of points.</string>
  <string id="6144">&lt;CUSTOM0&gt;/&lt;CUSTOM1&gt; Jades</string>
  <string id="6145">&lt;CUSTOM0&gt;/&lt;CUSTOM1&gt; Weapons</string>
  <string id="6146">&lt;CUSTOM0&gt;/&lt;CUSTOM1&gt; Spirits</string>
  <string id="6147">&lt;CUSTOM0&gt;/&lt;CUSTOM1&gt; Followers</string>
  <string id="6148">Defensive</string>
  <string id="6149">Centipede</string>
  <string id="6150">Hick I am drunk. Drunky drunk drunk. I LOVE YOU MAN!!!!</string>
  <string id="6151">Every seen a centipede eat a mouse? Think about it...</string>
  <string id="6170">Style Info</string>
  <string id="6171">Switch to</string>
  <string id="6172">Map to D-pad</string>
  <string id="6173">Level Up</string>
  <string id="6174">Your hard drive does not have enough free space to save games. You need to free up more space to be able to save. Press OK to lose your progress and free more space or CANCEL to continue without saving.
</string>
  <string id="6176">ERROR: ELSE CANNOT BE FOLLOWED BY A NULL STATEMENT</string>
  <string id="6177">ERROR: SWITCH CONDITION CANNOT BE FOLLOWED BY A NULL STATEMENT</string>
  <string id="6178">ERROR: WHILE CONDITION CANNOT BE FOLLOWED BY A NULL STATEMENT</string>
  <string id="6179">ERROR: FOR STATEMENT CANNOT BE FOLLOWED BY A NULL STATEMENT</string>
  <string id="6281">The Jade Tongue</string>
  <string id="6282">Shining Death</string>
  <string id="6283">Dragon Sword</string>
  <string id="6284">Charm +10
Intimidation +10
Intuition +10

Legends of the fabled Jade Tongue, also known as &quot;the tongue of the gods,&quot; say that anyone lucky enough to possess it can control the minds of others. While the Jade Tongue might not grant total mental dominance, its subtle power lends weight to its owner&apos;s words, making an audience far more likely to agree or obey.</string>
  <string id="6285">This was once the sword of Wen Hu the Reckless. The Shining Death is stunningly well balanced and very easy to wield.</string>
  <string id="6286">Weapon Style, Artifact Weapon
Drains Focus, +25% Damage Over Basic Long Sword Style

Before his departure to the unknown, the Celestial Dragon crafted the first true warrior, Lu Fang. Though Lu Fang&apos;s fists were stronger and quicker than any blade, the Celestial Dragon forged the Dragon Sword to give the warrior a weapon worthy of his skill. Hard as dragon scales and sharp as a dragon&apos;s tooth, it is still one of the most formidable swords in the Empire.</string>
  <string id="6287">Quest</string>
  <string id="6288">Item</string>
  <string id="6315">Jade</string>
  <string id="6317">Buy Upgrade</string>
  <string id="6318">Cost to Purchase</string>
  <string id="6320">Press START for Options</string>
  <string id="6336">Press START to Return</string>
  <string id="6357">Place the remaining points into the attributes that best suit this character.</string>
  <string id="6374" soundid="41559"></string>
  <string id="6399">Minister of Culture</string>
  <string id="6604">Map</string>
  <string id="6605">The serving girl, Mai Ling, has asked you to rescue her sister, Dr. An La. Mai Ling is certain that her sister is still alive, and imprisoned in the caves below the inn.</string>
  <string id="6606">Rescue Doctor An</string>
  <string id="6607">According to Mai Ling, there are two ways to access the lower level. The room that was being prepared for you has a lever which will open a trap door designed to drop people below, and you could climb down from there. A safer route would be through the kitchen, where steps are hidden behind the oven. Once you are down there, search the caves for Doctor An.</string>
  <string id="6608">Mai Ling has asked you to find and rescue her sister, Dr. An La. You have found her, but according to the doctor&apos;s fellow prisoner, they are both suffering from a disease called The Hunger which causes cravings for human flesh. Before you can rescue them, you&apos;ll have to find a cure.</string>
  <string id="6609">Find Doctor An&apos;s equipment.</string>
  <string id="6610">Zheng has told you that Dr. An had some equipment and notes taken from her by the guards. Before she lapsed into unconsciousness, she told Zheng that she was very close to a cure. The equipment must be somewhere nearby.</string>
  <string id="6611">Mai Ling, the serving girl at the inn has asked you to rescue her sister, but Doctor An is suffering from The Hunger, and is slowly turning into a Cannibal herself. The equipment and notes you found suggest that it may be possible to cure her.</string>
  <string id="6612">Divide the cure into the right proportions.</string>
  <string id="6613">Doctor An&apos;s notes are confident that the liquid in the two flasks you found will cure The Hunger, but that improper dosage could be either ineffective or fatal. You have to find some means to divide the cure she has in half, but with these irregular bottles it won&apos;t be easy.</string>
  <string id="6614">You&apos;ve managed to find the right portions for Doctor An&apos;s cure. So long as her theories were correct, this should provide enough cure for both her and Farmer Zheng. After that, all that&apos;s left is the simple matter of escaping these cannibal-infested caves and meeting up with Mai Ling.</string>
  <string id="6615">Escape with Doctor An.</string>
  <string id="6616">You must find a way out of the caves and clear of the inn. Dr. An and Zheng seem convinced that there&apos;s a second exit farther on that should allow you to get away.</string>
  <string id="6617">After the defeat of The Master, you narrowly escaped the collapse of the caves under the cannibals&apos; inn. A joyful Mai Ling met up with Doctor An and after learning that the serving girl she was a ghost you released her with your amulet. Doctor An has volunteered to join your cause and will be in Two Rivers should you ever need her services.</string>
  <string id="6618">Dr. An Lost</string>
  <string id="6620">You were unable to rescue Dr. An from the caves below the inn. With the network of tunnels collapsed, there&apos;s virtually no chance she survived. After revealing that she had died and was only holding on to her sanity in hope of her sister&apos;s rescue, Mai Ling attacked you in a rage. She was defeated and hopefully has found some peace thanks to the amulet&apos;s powers.</string>
  <string id="6621">Switch Opponent</string>
  <string id="6622">Try Alternate Style</string>
  <string id="6623">Exit Style Training</string>
  <string id="7354">Captain Ing</string>
  <string id="7357">Outer Courtyard</string>
  <string id="7359">Minister Sheng</string>
  <string id="7364">Merchant Jiang</string>
  <string id="7369" soundid="26806">I wish you hadn&apos;t done that, living one. Yushan&apos;s death will free us from this place, but I&apos;m afraid of what will happen to us now. I&apos;m afraid for Miao.</string>
  <string id="7404">Prisoner</string>
  <string id="7405" soundid="107037">Han&apos;s a sad little man. Don&apos;t put much stock in your victory.</string>
  <string id="7414">Shopkeeper</string>
  <string id="7419">Innkeeper</string>
  <string id="7424">Long Claw</string>
  <string id="7429">Lotus Assassin</string>
  <string id="7434">Mister Ren Banished</string>
  <string id="7439">Patron</string>
  <string id="7444">Patron</string>
  <string id="7449" soundid="106275">Rumor has it that the outer provinces are having as much trouble with ghosts as they are with bandits and raiders.</string>
  <string id="7454">Girl</string>
  <string id="7459">Prisoner</string>
  <string id="7464">Lord Yun</string>
  <string id="7472">Thug</string>
  <string id="7479">Mother</string>
  <string id="7484">Lost Spirit</string>
  <string id="7485">Mister Ren&apos;s ghost has been put down and won&apos;t be causing any more trouble.</string>
  <string id="7489">Forest Shadow</string>
  <string id="7494" soundid="125462">I don&apos;t know. I was here, on the far side of the gate, and the gate itself is locked. Only the Lotus Assassins themselves are allowed into the ruins.</string>
  <string id="7495" soundid="125463">No, nothing. Only that the gate leading into them was locked. The Lotus Assassins had to get a key from Sheng, the Imperial Minister in Tien&apos;s Landing.</string>
  <string id="7496" soundid="125464">But I think... I think the ruins are haunted! I hear strange sounds coming from beyond the gates. But even the threat of ghosts can&apos;t keep the Assassins from their search.</string>
  <string id="7499" soundid="107293">Please, my boy Ni Joh is trying to fight them down on the beach, but we need someone skilled.</string>
  <string id="7619">Orphan</string>
  <string id="7673">Travel to %s?</string>
  <string id="7674">Show Interface Hints</string>
  <string id="7710">Display hints the first time a particular menu screen is shown.</string>
  <string id="7738">Dragonfly Mini-game</string>
  <string id="7758" soundid="8611">Well, you see, there&apos;s been a mix-up. No, an error. Oh, who am I kidding? Some.. bastard has changed my play.</string>
  <string id="7759" soundid="8612">I am Incisive Chorus the Playwright. I&apos;m sure you&apos;ve heard of me, and if not, you have... er, now, I suppose.</string>
  <string id="7760" soundid="8613">One of my productions has been touring the countryside and catching people&apos;s attention. We were asked to bring it into the city and perform here in the Golden Way.</string>
  <string id="7761" soundid="8614">The play must go on, but not as they want it. The play&apos;s been changed, you see! One very key piece of the play has been rewritten!</string>
  <string id="7762" soundid="8615">No, no, NO! Well, yes, but not like this!</string>
  <string id="7763" soundid="8616">I tell you truthfully that they&apos;ve lost the whole point of the piece!</string>
  <string id="7764" soundid="8617">A like-minded island amidst a sea of dolts. Oh dear, that was a poor metaphor. The point stands regardless!</string>
  <string id="7765" soundid="8618">There&apos;s that too. Anyone could take offense. Now I&apos;m doubly concerned!</string>
  <string id="7766" soundid="8619">I will gladly offer you the going rate for a leading man, just for a walk-on part!</string>
  <string id="7767" soundid="8620">You have a most regal bearing, so I expect you&apos;d have no... well, no *major* problems, at any rate, acting the role of Lady Fourteen Flowers.</string>
  <string id="7768" soundid="8621">If you talk to First-Degree Thespian Phong, up by the pagoda, tell him you&apos;re the replacement actor. He&apos;ll be desperate, so all you&apos;ll have to do is read the proper lines.</string>
  <string id="7769" soundid="8622">Of course, all roles are played by men, er, or at least women with the decency to pose as men playing women. It&apos;s... well... it can get complex sorting it all out.</string>
  <string id="7770" soundid="8623">That will be a bit tricky I&apos;ll admit. Certainly breaking with tradition, but if you tell them you&apos;re already in makeup, they&apos;ll... er, gloss things over. It&apos;ll be fine, I&apos;m sure.</string>
  <string id="7771" soundid="8624">Oh, they will. It&apos;s a role practically suited to one of your... stature. It&apos;ll come to you as easily as pleasant scents on a spring wind.</string>
  <string id="7772" soundid="8625">Here&apos;s a copy of the original script for your scene. Pivotal, I assure you. This copy reads properly, not like that edited pile of dung.</string>
  <string id="7773" soundid="8626">Hurry over to the large pagoda overlooking the Golden Way, and tell Phong that you&apos;re the replacement. They won&apos;t wait forever, so step quickly to it.</string>
  <string id="7774" soundid="8627">Now, good... no, you&apos;re about to perform so I shan&apos;t jinx it. Get to it!</string>
  <string id="7775" soundid="8628">Well, of course! I could... hmm... I suppose I could write you in as a character in one of my plays. Imagine, fame and, well... immortality on the stage!</string>
  <string id="7776" soundid="8629">Oh! Silver, is it? That&apos;s simple. I know we writers are supposed to be... poor is the best word, but I never saw the point. Can&apos;t afford ink as a poor man, you see?</string>
  <string id="7777" soundid="8630">Then I am, well, ruined, I suppose. The first in my family--wait... no. Oh yes, the first to see success, and I am undone. </string>
  <string id="7778" soundid="8631">Fine. The world didn&apos;t need to see the real... er... play anyway. Let them put on their tragedy. I apologize for taking your time, honored one.</string>
  <string id="7779" soundid="8632">I am an iamb, I am! Er... was that it? Oh! Sorry. You startled me. You&apos;re back... have you changed your mind? You&apos;ll help me?</string>
  <string id="7780" soundid="8633">Oh, goodness, I do hope that the... er, play goes as planned. Just... remember to breathe and push from the stomach up, yes?</string>
  <string id="7781" soundid="8634">Now hurry to the pagoda overlooking this district! Just follow the road and look for the crowd. Oh... I&apos;m so nervous!</string>
  <string id="7783">Defeat the Assassin</string>
  <string id="7784">The Lotus Assassins have dogged you long enough, eliminate their leader.</string>
  <string id="7785">Step away, smudged one, I don&apos;t have time to talk to you.</string>
  <string id="7786" soundid="151513">I died before the gates to the underworld closed, but I couldn&apos;t let go of my daughter. I worried for her, and rightly so, but I think she will find peace now.</string>
  <string id="7787">What can I do to help?</string>
  <string id="7790">What could I possibly do to help you with a play?</string>
  <string id="7791">Sounds positive so far. Where&apos;s the problem?</string>
  <string id="7792">Worried they&apos;re corrupting your &quot;art,&quot; are you?</string>
  <string id="7793">Why worry about a few rewrites? Doesn&apos;t that happen all the time?</string>
  <string id="7795">You&apos;re right; that is terrible!</string>
  <string id="7797">Not to mention that certain factions frown on satire of the Empire.</string>
  <string id="7799">This is the most ridiculous problem I&apos;ve ever heard. Why should I care?</string>
  <string id="7802">You want me to play Lady Fourteen Flowers?</string>
  <string id="7803">I&apos;m no actor. They wouldn&apos;t believe me!</string>
  <string id="7804">Sounds interesting. I&apos;ll do it.</string>
  <string id="7807">Find someone else to be your patsy. I have no intention of helping you.</string>
  <string id="7808">My help depends on my incentive.</string>
  <string id="7809">I was looking for something more material.</string>
  <string id="7810">A writer? There&apos;s no way you could afford my assistance. Stand aside.</string>
  <string id="7811">Why don&apos;t you just tell me what the problem is?</string>
  <string id="7812">I wouldn&apos;t have time to listen to your problem, stammering fool.</string>
  <string id="7815" soundid="8668">Had your, er... moment, did you?</string>
  <string id="7816" soundid="8669">I can&apos;t believe that performance! Disgraceful! Had you followed the original script, it would have been a masterpiece, but you mangled it!</string>
  <string id="7817" soundid="8670">Clearly! An actor would have had no trouble with that script. In fact, anyone with any culture would have already known it. I couldn&apos;t believe what I was, er... hearing.</string>
  <string id="7818" soundid="8671">Had you honored yours, of course. You promised that you would perform my play, not that bastardized version. Frankly, I&apos;m surprised they made that many changes!</string>
  <string id="7819" soundid="8672">I know my own work, and I&apos;d have let that performance, er... slide had you flubbed only *one* of the important lines, but that was terrible.</string>
  <string id="7820" soundid="8673">No one could have enjoyed that! Terrible, just, er... terrible!</string>
  <string id="7821" soundid="8674">Fantastic! The scholars loved it. One&apos;s already asked for a copy of the manuscript. I&apos;m sure there will be more.</string>
  <string id="7822" soundid="8675">Here, I promised you this, and you should... er, have it! Yes, that&apos;s it. Enjoy, and thank you so much!</string>
  <string id="7823" soundid="8676">Oh, so much to do. So many, er... copies to make! Yes! Ha!</string>
  <string id="7824">You didn&apos;t come to watch?</string>
  <string id="7825">What do you mean?</string>
  <string id="7826">It wasn&apos;t my fault. I&apos;m not a professional actor!</string>
  <string id="7828">Listen, ink stain, you will honor your commitments.</string>
  <string id="7833" soundid="8686">Excuse me! You&apos;re in my way, and I&apos;m trying to keep an eye out for our replacement actor.</string>
  <string id="7834" soundid="8687">The play that&apos;s about to go on here, obviously. Why do you think I&apos;m dressed like this? For fun?</string>
  <string id="7835" soundid="8688">You? You&apos;re the replacement?</string>
  <string id="7836" soundid="8689">Well, why aren&apos;t you in costume? If you&apos;re going to be playing Lady Fourteen Flowers, you&apos;ll need your dress!</string>
  <string id="7837" soundid="8690">By the starry river, that is the best makeup job I&apos;ve ever seen! We&apos;ll barely have to touch you up to play Lady Fourteen Flowers!</string>
  <string id="7838" soundid="8691">And let me just say, your costume makes everything look very... ah... authentic. Yes, yes, well, good job!</string>
  <string id="7839" soundid="8692">Did they give you a copy of the script when they sent you over here?</string>
  <string id="7840" soundid="8693">Let me see that.</string>
  <string id="7841" soundid="8694">No, no, no, no, NO! This is all wrong. They sent you with the old script. Bloody actor&apos;s guild is staffing itself with water buffaloes, I tell you! Here, have it back.</string>
  <string id="7842" soundid="8695">Damn your guild&apos;s myopic planning. Luckily for you, I expect the worst from them and pulled a copy from the back. Here, take it.</string>
  <string id="7843" soundid="8696">The script&apos;s recently been revised, so even if you&apos;re familiar with the old version, read it again for the changes before you head on stage.</string>
  <string id="7844" soundid="8697">Well, a southern noble funded the location and travel for us, but wanted to make a few tweaks.</string>
  <string id="7845">Captain Sen of the Imperial Army has tasked you with tracking down an arsonist named Fading Moon.</string>
  <string id="7846" soundid="8699">We couldn&apos;t afford to miss the exposure. Our writer wasn&apos;t that happy, but we accepted the revisions and here we are.</string>
  <string id="7847" soundid="8700">I&apos;m sure your actor&apos;s guild told you that we have standard rates. We&apos;ll happily pay you the going rate for a lead, especially since this is short notice.</string>
  <string id="7848" soundid="8701">Ruin your scene and you get nothing, just like normal. Understand?</string>
  <string id="7849" soundid="8702">Just get at least half the lines correct and the crowd will figure out what&apos;s happening. Any less than that and it becomes one of those obscure plays no one likes.</string>
  <string id="7850" soundid="8703">Now, read that script over. Come talk to me when you&apos;ve got it and we&apos;ll get you into final costume and onto the stage.</string>
  <string id="7851" soundid="8704">It&apos;s nothing grave, just pre-show jitters making me snappish. If you see an actor or someone who looks out of place in here, send them my way, would you?</string>
  <string id="7852" soundid="8705">Have you read the script? Do you feel one with Lady Fourteen Flowers yet?</string>
  <string id="7853" soundid="8706">That&apos;s the spirit! Let&apos;s get you into the back and costumed up, Lady Fourteen Flowers.</string>
  <string id="7854" soundid="8707">Okay, but hurry. The director will probably do something that would dishonor his family for generations if he&apos;s forced to wait much longer.</string>
  <string id="7855" soundid="8708">Why are you guild actors all the same? Isn&apos;t the money motivation enough?</string>
  <string id="7856" soundid="8709">Look, you&apos;re playing a noble lady in the court of the first Emperor, Sagacious Tien. Your scene is opposite another noble, Fortunate Puzzle.</string>
  <string id="7857" soundid="8710">Er... what else? You&apos;re kind of sad, depressed even! There, if you&apos;re as professional as the guild said you&apos;d be, that should be enough to work on.</string>
  <string id="7858" soundid="8711">Oh, of course you&apos;re not an actor. You&apos;re a fine lady from the court of Sagacious Tien. Forgive me for forgetting myself. That said, are you ready to go on stage?</string>
  <string id="7859" soundid="8712">A hundred curses! You really aren&apos;t an actor are you? Oh, the director&apos;s going to kill my incarnations a dozen times for this.</string>
  <string id="7860" soundid="8713">Get out of my sight! I have to find the real replacement!</string>
  <string id="7861" soundid="8714">You there, &quot;Lady Fourteen Flowers!&quot;</string>
  <string id="7862" soundid="8715">That had to be the worst performance since Affective Pathos tried to complete his role in Tale of the Singing Reed after taking a sandbag to the head!</string>
  <string id="7863" soundid="8716">There will be no payment for you! We&apos;ll be lucky if our director doesn&apos;t kill us all before he takes his own life out of shame.</string>
  <string id="7864" soundid="8717">Be gone, hack! Charlatan! Prevaricator! Get out of my sight!</string>
  <string id="7865" soundid="8718">That was pretty solid. It&apos;s too bad you couldn&apos;t hit it perfectly, but it will do.</string>
  <string id="7866" soundid="8719">The crowd loved it! Fantastic performance! You managed to hit every line perfectly!</string>
  <string id="7867" soundid="8720">Our sponsor will be ecstatic that you worked his revisions in so effortlessly. It sounded a bit harsh, but I&apos;m sure it will be fine.</string>
  <string id="7868" soundid="8721">Our sponsor may not be happy with the version you read, but I&apos;ve always preferred the old version of the play anyway.</string>
  <string id="7869" soundid="8722">I guess Incisive Chorus put you up to this, because I know I gave you the new script to study. Good for him.</string>
  <string id="7870" soundid="8723">I believe I owe you an actor&apos;s fee. Enjoy.</string>
  <string id="7871" soundid="8724">&quot;Rather fun?&quot; Now I *know* you&apos;re not one of the guild actors. They&apos;re never positive about anything! Oh well, no harm done I&apos;m sure.</string>
  <string id="7872" soundid="8725">The performance wouldn&apos;t have gone on without you, professional actor or not.</string>
  <string id="7873" soundid="8726">You guild actors are all the same. Never happy. Oh well, your loss.</string>
  <string id="7874" soundid="8727">Now if you&apos;ll excuse me, I have things I must attend to.</string>
  <string id="7876">Phong</string>
  <string id="7877">A replacement actor? For what?</string>
  <string id="7878">I&apos;m the understudy you needed.</string>
  <string id="7883">I have this script here. Is this it?</string>
  <string id="7886">No, I don&apos;t have a copy on me.</string>
  <string id="7888">Who revised the script?</string>
  <string id="7889">Why was the script changed?</string>
  <string id="7891">Fading Moon&apos;s Bounty</string>
  <string id="7894">I think I&apos;ve got it.</string>
  <string id="7895">What do you consider ruining the scene?</string>
  <string id="7897">Sorry to bother you.</string>
  <string id="7898">I&apos;m ready. Let&apos;s get the show on the road.</string>
  <string id="7899">Not yet. I need a bit more time.</string>
  <string id="7900">I&apos;m having trouble with my motivation. Tell me more about my character.</string>
  <string id="7903">You know, I&apos;m not really an actor. We should rethink this.</string>
  <string id="7904">No, really! I&apos;m really not an actor. I won&apos;t do this. Here, take your scripts.</string>
  <string id="7916">It was no problem. Rather fun, really.</string>
  <string id="7919">Next time, I expect my name higher on the play bill.</string>
  <string id="7920">It was barely worth my time.</string>
  <string id="7923" soundid="8776">Watch closely. We shall see if the informant was accurate.</string>
  <string id="7924" soundid="8777">Imagine, condemning the Jade Empire at its heart. The fools.</string>
  <string id="7925" soundid="8778">What in the dragon&apos;s eye was that? I saw no treason there. The informant will suffer for a lifetime!</string>
  <string id="7926" soundid="8779">Our informant was correct. Gather the others; these traitors will be *lucky* if they live to see the Wall.</string>
  <string id="7948">Amulet</string>
  <string id="8080">You cannot travel to that area. </string>
  <string id="8432">Weapon</string>
  <string id="8433">Fighting sticks of stickiness. Really sticky. Some sort of glue I guess.</string>
  <string id="8662" soundid="132375">Ah, my good friend! What a pleasant surprise to see you here in the glory that is the Imperial City!</string>
  <string id="8664" soundid="132376">Minister Sheng has not forgotten how you helped him with his troubles in Tien&apos;s Landing. Without your efforts the Great Dam might still be open!</string>
  <string id="8666" soundid="132377">How this could be accomplished I couldn&apos;t say. But at least Minister Sheng would be spared the wrath and fury of the Lotus Assassins.</string>
  <string id="9244">Blocked</string>
  <string id="9245" soundid="127059">Kill the filthy thin-blood, my pretties!</string>
  <string id="9461">You have been defeated.</string>
  <string id="9462" soundid="127061">Everyone&apos;s real happy in the town, now. Even Mommy and Daddy.</string>
  <string id="9464" soundid="127062">Even with the dam closed, Sheng still cries at night about going back to the Imperial City.</string>
  <string id="9465" soundid="127063">Good job on those pirates. But it would have been better if you&apos;d closed the dam.</string>
  <string id="9471" soundid="136815">Oh, and one other thing. The Serpent has requested that you visitate him alone. I know you usually have a friend with you, but they&apos;ll have to remain behind for this meeting.</string>
  <string id="9472" soundid="127074">You... uh... you did a good job with Ing. I&apos;ll let you know if any more executions come up.</string>
  <string id="9473" soundid="127075">But we hadn&apos;t even scheduled his execution yet. I just finished collecting enough silver to cover the executioner&apos;s fee this morning.</string>
  <string id="9474" soundid="127076">Well, you did execute him, so I guess you earned the executioner&apos;s fee. Here you go.</string>
  <string id="9475" soundid="127077">Fun? Slaughtering a prisoner like that is fun? I understand killing a man for profit, but for pleasure? What kind of twisted... uh, sorry.</string>
  <string id="9476" soundid="127078">No! No... of course not. I was just... surprised. After all, he was condemned to death.</string>
  <string id="9478">He attacked me first!</string>
  <string id="9480">I think I&apos;m entitled to that.</string>
  <string id="9481">Good. Hand it over.</string>
  <string id="9482">Keep the silver. I did this just for fun.</string>
  <string id="9489" soundid="10488">Sorry, stranger. I stick to my regular customers.</string>
  <string id="9491" soundid="10490">What&apos;s the matter, farm girl, never seen a real working woman?</string>
  <string id="9492" soundid="10491">This is my corner. I paid for it.</string>
</tlk>
`
})
