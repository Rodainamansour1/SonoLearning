const lungsButton = document.getElementById("lungs-btn");
const heartButton = document.getElementById("heart-btn");
const liverButton = document.getElementById("liver-btn");
const kidneysButton = document.getElementById("kidneys-btn");
const thyroidButton = document.getElementById("thyroid-btn");
const uterusButton = document.getElementById("uterus-btn");
const gallbladderButton = document.getElementById("gallbladder-btn");
const infoPanel = document.getElementById("info-panel");
const ultrasoundScreen = document.getElementById("ultrasound-screen");
const resetButton = document.getElementById("reset-btn");
const quizLink = document.getElementById("quiz-link");
const learnLink = document.getElementById("learn-link");
const aboutLink = document.getElementById("about-link");
const homeLink = document.getElementById("home-link");

homeLink.addEventListener("click", function(event) {
    event.preventDefault();

 infoPanel.innerHTML = `
<h2>Welcome to SonoLearning</h2>

<p>SonoLearning is an interactive educational website designed to introduce users to the fundamentals of diagnostic medical sonography. Explore how ultrasound is used to examine different organs, discover career specialties in medical imaging, learn essential ultrasound terminology, and test your knowledge with an interactive quiz.</p>

<p><strong>Choose an organ</strong> to view an ultrasound image, learn its function, and see how sonographers evaluate it.</p>

<p><strong>Learn</strong> reviews important ultrasound terms and imaging concepts.</p>

<p><strong>Quiz</strong> challenges your understanding with multiple-choice questions.</p>

<p><strong>About</strong> explains the different sonography specialties related to each organ.</p>

<p>Use the organ buttons below to begin exploring the human body through ultrasound.</p>
`;

    ultrasoundScreen.innerHTML = `
        <img src="Images/probe.png" class="probe-image">
        <p class="scan-message">
            Select Organ To Start Scanning
        </p>
    `;
});
aboutLink.addEventListener("click", function(event) {

    event.preventDefault();

    infoPanel.innerHTML = `
    <h2>Ultrasound Career Specialties</h2>

    <h3>Cardiac Sonographer (Heart)</h3>
    <p>Cardiac sonographers specialize in imaging the heart using echocardiography. They help doctors evaluate heart function, blood flow, heart valves, and other cardiovascular conditions.</p>

    <h3>Abdominal Sonographer (Liver)</h3>
    <p>Abdominal sonographers perform ultrasound examinations of the liver. They help detect liver disease, cysts, tumors, and other abnormalities.</p>

    <h3>Abdominal Sonographer (Gallbladder)</h3>
    <p>Abdominal sonographers examine the gallbladder to help identify gallstones, inflammation, and other gallbladder conditions.</p>

    <h3>Renal Sonographer (Kidneys)</h3>
    <p>Renal sonographers specialize in imaging the kidneys and urinary system. They help detect kidney stones, cysts, blockages, and other kidney disorders.</p>

    <h3>Small Parts Sonographer (Thyroid)</h3>
    <p>Small parts sonographers perform ultrasound examinations of the thyroid gland. They help doctors evaluate thyroid nodules, enlargement, and other thyroid conditions.</p>

    <h3>Obstetric and Gynecologic Sonographer (Uterus)</h3>
    <p>These sonographers examine the uterus and female reproductive organs. They also perform pregnancy ultrasounds to monitor fetal growth and development.</p>

    <h3>Thoracic Sonography (Lungs)</h3>
    <p>Thoracic sonographers use ultrasound to evaluate conditions involving the lungs and chest cavity, such as fluid around the lungs and certain respiratory conditions.</p>

    <h3>Why These Careers Matter</h3>
    <p>Sonographers play an important role in healthcare by providing safe, real-time images that help doctors diagnose and monitor medical conditions. Ultrasound uses sound waves and does not expose patients to radiation.</p>
`;

    ultrasoundScreen.innerHTML = `
        <img src="Images/probe.png" class="probe-image">
        <p class="scan-message">
            Ultrasound Careers
        </p>
    `;
});
lungsButton.addEventListener("click", function() {
infoPanel.innerHTML = `
<h2>Lungs</h2>
<p><strong>Function:</strong> The lungs bring oxygen into the body and remove carbon dioxide.</p>

<p><strong>Ultrasound Exam:</strong> Lung Ultrasound</p>

<p><strong>Specialty:</strong> Thoracic Sonographer</p>

<p><strong>What Sonographers Look For:</strong></p>
<ul>
<li>Pleural effusion (fluid around the lungs)</li>
<li>Pneumothorax (collapsed lung)</li>
<li>Pneumonia</li>
<li>Lung consolidation</li>
</ul>

<p><strong>Fun Fact:</strong> You take about 20,000 breaths every day.</p>
   `;



ultrasoundScreen.innerHTML = `
    <img src="Images/lungs.png" width="250">
`;


});

heartButton.addEventListener("click", function() {
infoPanel.innerHTML = `
<h2>Heart</h2>

<p><strong>Function:</strong> Pumps oxygen-rich blood throughout the body.</p>

<p><strong>Ultrasound Exam:</strong> Echocardiogram</p>

<p><strong>Specialty:</strong> Cardiac Sonographer</p>

<p><strong>What Sonographers Look For:</strong></p>
<ul>
<li>Heart valve disease</li>
<li>Heart chamber size</li>
<li>Heart muscle function</li>
<li>Blood flow abnormalities</li>
</ul>

<p><strong>Fun Fact:</strong> Your heart beats about 100,000 times every day.</p>
`;
ultrasoundScreen.innerHTML = `
    <img src="Images/heart.png" width="250">
`;
});

liverButton.addEventListener("click", function() {
infoPanel.innerHTML = `
<h2>Liver</h2>

<p><strong>Function:</strong> Filters blood, stores nutrients, and produces bile.</p>

<p><strong>Ultrasound Exam:</strong> Abdominal Ultrasound</p>

<p><strong>Specialty:</strong> Abdominal Sonographer</p>

<p><strong>What Sonographers Look For:</strong></p>
<ul>
<li>Fatty liver disease</li>
<li>Liver cysts</li>
<li>Tumors</li>
<li>Cirrhosis</li>
</ul>

<p><strong>Fun Fact:</strong> The liver is the largest internal organ.</p>
`;
ultrasoundScreen.innerHTML = `
    <img src="Images/liver.png" width="250">
`;
});

kidneysButton.addEventListener("click", function() {
infoPanel.innerHTML = `
<h2>Kidneys</h2>

<p><strong>Function:</strong> Filter waste and excess fluid from the blood.</p>

<p><strong>Ultrasound Exam:</strong> Renal Ultrasound</p>

<p><strong>Specialty:</strong> Renal Sonographer</p>

<p><strong>What Sonographers Look For:</strong></p>
<ul>
<li>Kidney stones</li>
<li>Cysts</li>
<li>Hydronephrosis</li>
<li>Tumors</li>
</ul>

<p><strong>Fun Fact:</strong> One healthy kidney can perform the work of two.</p>
`;


ultrasoundScreen.innerHTML = `
    <img src="Images/kidneys.png" width="250">
`;


});

thyroidButton.addEventListener("click", function() {
infoPanel.innerHTML = `
<h2>Thyroid</h2>

<p><strong>Function:</strong> Produces hormones that regulate metabolism.</p>

<p><strong>Ultrasound Exam:</strong> Thyroid Ultrasound</p>

<p><strong>Specialty:</strong> Small Parts Sonographer</p>

<p><strong>What Sonographers Look For:</strong></p>
<ul>
<li>Thyroid nodules</li>
<li>Goiter</li>
<li>Cysts</li>
<li>Signs of thyroid cancer</li>
</ul>

<p><strong>Fun Fact:</strong> The thyroid is shaped like a butterfly.</p>
`;


ultrasoundScreen.innerHTML = `
    <img src="Images/thyroid.png" width="250">
`;


});

uterusButton.addEventListener("click", function() {
infoPanel.innerHTML = `
<h2>Uterus</h2>

<p><strong>Function:</strong> Supports pregnancy and fetal development.</p>

<p><strong>Ultrasound Exam:</strong> Pelvic or Obstetric Ultrasound</p>

<p><strong>Specialty:</strong> Obstetric & Gynecologic Sonographer (OB/GYN Sonographer)</p>

<p><strong>What Sonographers Look For:</strong></p>
<ul>
<li>Pregnancy development</li>
<li>Fibroids</li>
`;

ultrasoundScreen.innerHTML = `
    <img src="Images/uterus.png" width="250">
`;


});

gallbladderButton.addEventListener("click", function() {
infoPanel.innerHTML = `
<h2>Gallbladder</h2>

<p><strong>Function:</strong> Stores bile to help digest fats.</p>

<p><strong>Ultrasound Exam:</strong> Abdominal Ultrasound</p>

<p><strong>Specialty:</strong> Abdominal Sonographer</p>

<p><strong>What Sonographers Look For:</strong></p>
<ul>
<li>Gallstones</li>
<li>Gallbladder inflammation</li>
<li>Bile duct blockage</li>
<li>Polyps</li>
</ul>

<p><strong>Fun Fact:</strong> Gallstones are one of the most common digestive conditions.</p>
`;

ultrasoundScreen.innerHTML = `
    <img src="Images/gallbladder.png" width="250">
`;


});
resetButton.addEventListener("click", function() {


infoPanel.innerHTML = `
<h2>Organ Information</h2>

<p>Select an organ below to view an ultrasound image, learn about its function, and discover how ultrasound is used to examine it.</p>
`;

ultrasoundScreen.innerHTML = `
    <img src="Images/probe.png" class="probe-image">
    <p class="scan-message">
        Select Organ To Start Scanning
    </p>
`;


});
learnLink.addEventListener("click", function(event) {

    event.preventDefault();

    infoPanel.innerHTML = `
        <h2>Ultrasound Terminology</h2>

        <p><strong>Ultrasound:</strong> A medical imaging technique that uses sound waves to create images inside the body.</p>

        <p><strong>Sonography:</strong> Another name for ultrasound imaging.</p>

        <p><strong>Sonographer:</strong> A healthcare professional trained to perform ultrasound exams.</p>

        <p><strong>Transducer (Probe):</strong> The handheld device that sends and receives ultrasound waves.</p>

        <p><strong>Ultrasound Gel:</strong> A special gel that helps sound waves travel between the probe and the skin.</p>

        <p><strong>Echo:</strong> A sound wave that bounces back to the probe and helps create an image.</p>

        <p><strong>Scan:</strong> The process of obtaining ultrasound images.</p>

        <p><strong>Image:</strong> The picture produced by the ultrasound machine.</p>

        <p><strong>Frequency:</strong> The number of sound wave vibrations per second.</p>

        <p><strong>Anatomy:</strong> The study of body structures and organs.</p>

        <p><strong>Doppler Ultrasound:</strong> A special ultrasound technique used to evaluate blood flow.</p>

        <p><strong>B-Mode:</strong> The standard black-and-white ultrasound image.</p>

        <p><strong>Real-Time Imaging:</strong> Images that update instantly as the probe moves.</p>
    `;

    ultrasoundScreen.innerHTML = `
        <img src="Images/probe.png" class="probe-image">
        <p class="scan-message">
            Ultrasound Terminology
        </p>
    `;
});
quizLink.addEventListener("click", function() {


infoPanel.innerHTML = `
    <h2>Ultrasound Quiz</h2>

    <p><strong>1.</strong> What is the primary purpose of ultrasound gel?<br>
    A. To cool the skin<br>
    B. To reduce sound waves<br>
    C. To help sound waves travel between the probe and the skin<br>
    D. To clean the probe</p>

    <p><strong>2.</strong> What is the transducer (probe) used for?<br>
    A. Stores images<br>
    B. Sends and receives sound waves<br>
    C. Measures blood pressure<br>
    D. Produces gel</p>

    <p><strong>3.</strong> What is an echo in ultrasound?<br>
    A. A heartbeat<br>
    B. A sound wave that bounces back to the probe<br>
    C. A type of gel<br>
    D. A body organ</p>

    <p><strong>4.</strong> Who performs an ultrasound examination?<br>
    A. Radiologist<br>
    B. Surgeon<br>
    C. Sonographer<br>
    D. Pharmacist</p>

    <p><strong>5.</strong> What does Doppler ultrasound help evaluate?<br>
    A. Bone density<br>
    B. Blood flow<br>
    C. Lung capacity<br>
    D. Muscle strength</p>

    <p><strong>6.</strong> Why is gel necessary during an ultrasound exam?<br>
    A. It improves screen brightness<br>
    B. It removes echoes<br>
    C. It eliminates air between the probe and skin<br>
    D. It increases blood flow</p>

    <p><strong>7.</strong> Which ultrasound mode produces the standard black-and-white image?<br>
    A. Doppler Mode<br>
    B. B-Mode<br>
    C. Color Mode<br>
    D. Motion Mode</p>

    <p><strong>8.</strong> Ultrasound uses which type of energy to create images?<br>
    A. X-rays<br>
    B. Magnetic fields<br>
    C. Sound waves<br>
    D. Radiation</p>

    <p><strong>9.</strong> Which organ stores bile and is commonly examined during an abdominal ultrasound?<br>
    A. Heart<br>
    B. Gallbladder<br>
    C. Thyroid<br>
    D. Lung</p>

    <p><strong>10.</strong> What is one advantage of ultrasound compared to X-rays?<br>
    A. Uses no ionizing radiation<br>
    B. Can only image bones<br>
    C. Requires surgery<br>
    D. Cannot show movement</p>

    <button id="answers-btn">Show Answers</button>
`;

ultrasoundScreen.innerHTML = `
    <img src="Images/probe.png" class="probe-image">
    <p class="scan-message">
        Ultrasound Quiz
    </p>
`;

const answersButton = document.getElementById("answers-btn");

answersButton.addEventListener("click", function() {

    infoPanel.innerHTML += `
        <hr>
        <h2>Quiz Answer Key</h2>

        <p>1. C - To help sound waves travel between the probe and the skin</p>
        <p>2. B - Sends and receives sound waves</p>
        <p>3. B - A sound wave that bounces back to the probe</p>
        <p>4. C - Sonographer</p>
        <p>5. B - Blood flow</p>
        <p>6. C - It eliminates air between the probe and skin</p>
        <p>7. B - B-Mode</p>
        <p>8. C - Sound waves</p>
        <p>9. B - Gallbladder</p>
        <p>10. A - Uses no ionizing radiation</p>
    `;

    ultrasoundScreen.innerHTML = `
        <img src="Images/probe.png" class="probe-image">
        <p class="scan-message">
            Answer Key
        </p>
    `;

    answersButton.remove();
});


});
