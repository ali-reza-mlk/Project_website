// ------------------------
// Javascript codes
// ------------------------
var subject = { name: "", email: "", age: "", decisions: [], surprise: [], certainty: [], predictability: [] }; // subject object
subject.name = prompt("Please enter your name", " "); // gets subject's name
var Scores = [0, 0]; // my Score - Opponent score

var x = Datagenerator();
var t = 0;
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var prevval = ['', '', '', ''];
function play(id) {
    // Ask questions at prespecified times:

    if (t == 81) {
        download("NewData", JSON.stringify(subject));
        alert("Please wait and do not close task");
        return;
    }

    var ask1 = [5, 7, 11, 12, 16, 25, 28, 32, 33, 37, 45, 49, 54, 57, 63, 67, 72, 75, 77]; // Set the stages which ask question 1
    var ask2 = [4, 6, 10,     15, 27,     31, 32, 36, 44, 48, 53, 56,     66, 71, 74, 76]; // Set the stages which ask question 2

    var ask3 = [19, 39, 59, 79]; // Set the stages which ask question 3


    var question1 = document.getElementsByClassName('cQ1');

    var question2 = document.getElementsByClassName('cQ2');

    var question3 = document.getElementsByClassName('cQ3');

    for (i = 0; i < question1.length; i++) {

        if (question1[i].checked) {
            // document.getElementById('temp').innerHTML += "Surprise = " + (question1[i].value).toString();
            subject.surprise.push(question1[i].value);
            e1 = document.getElementById('d1');
            e1.remove();
            flag1 = 1;
        }

    }


    for (i = 0; i < question2.length; i++) {
        if (question2[i].checked) {
            // document.getElementById('temp').innerHTML += "Certainty = " + (question2[i].value).toString();
            subject.certainty.push(question2[i].value);
            e2 = document.getElementById('d2');
            e2.remove();
            flag2 = 1;
        }
    }


    for (i = 0; i < question3.length; i++) {
        if (question3[i].checked) {
            // document.getElementById('temp').innerHTML += "Complexity = " + (question2[i].value).toString();
            subject.predictability.push(question3[i].value);
            e3 = document.getElementById('d3');
            e3.remove();
            flag3 = 1;
        }
    }

    ////////////////////////////////////// Check answers
    var t1 = 0;
    for (i = 0; i < ask1.length; i++) {
        if (t == ask1[i] + 1) {
            t1 = 1;
            break;
        }
    }

    var t2 = 0;
    for (i = 0; i < ask2.length; i++) {
        if (t == ask2[i] + 1) {
            t2 = 1;
            break;
        }
    }

    var t3 = 0;
    for (i = 0; i < ask3.length; i++) {
        if (t == ask3[i] + 1) {
            t3 = 1;
            break;
        }
    }

    if ((flag1 == 0 && t1 == 1) || (flag2 == 0 && t2 == 1) || (flag3 == 0 && t3 == 1)) {
        alert('Please answer the questions.');
        return
    }

    flag1 = 0;
    flag2 = 0;
    flag3 = 0;
    ///////////////////////////////////////////

    for (i = 0; i < ask1.length; i++) {

        if (t == ask1[i]) // Ask the surprise question
        {
            e1 = document.createElement('div');
            e1.id = 'd1';
            e1.style = "position: absolute; top: 35%; font-size: 1vw;";
            e1.innerHTML = "<h2>How much did you get surprised?</h2><label><input class=\"cQ1\" type=\"radio\" name=\"q1\" value=\"5\">5&nbsp&nbsp&nbsp<label><input class=\"cQ1\" type=\"radio\" name=\"q1\" value=\"4\">4</label>&nbsp&nbsp&nbsp<label><input class=\"cQ1\" type=\"radio\" name=\"q1\" value=\"3\">3</label>&nbsp&nbsp&nbsp<label><input class=\"cQ1\" type=\"radio\" name=\"q1\" value=\"2\">2</label>&nbsp&nbsp&nbsp<label><input class=\"cQ1\" type=\"radio\" name=\"q1\" value=\"1\">1</label>&nbsp&nbsp&nbsp<label><input class=\"cQ1\" type=\"radio\" name=\"q1\" value=\"0\">0</label><br/>";
            document.body.appendChild(e1);
        }

    }

    for (i = 0; i < ask2.length; i++) {

        if (t == ask2[i]) // Ask the certainty question
        {
            e2 = document.createElement('div');
            e2.id = 'd2';
            e2.style = "position: absolute; top: 60%; font-size: 1vw;";
            e2.innerHTML = "<h2>How certain are you about your next action?</h2> <h3>(Click and then choose your action)</h3><label><input class=\"cQ2\" type=\"radio\" name=\"q2\" value=\"5\">5&nbsp&nbsp&nbsp<label><input class=\"cQ2\" type=\"radio\" name=\"q2\" value=\"4\">4</label>&nbsp&nbsp&nbsp<label><input class=\"cQ2\" type=\"radio\" name=\"q2\" value=\"3\">3</label>&nbsp&nbsp&nbsp<label><input class=\"cQ2\" type=\"radio\" name=\"q2\" value=\"2\">2</label>&nbsp&nbsp&nbsp<label><input class=\"cQ2\" type=\"radio\" name=\"q2\" value=\"1\">1</label>&nbsp&nbsp&nbsp<label><input class=\"cQ2\" type=\"radio\" name=\"q2\" value=\"0\">0</label><br/>";
            document.body.appendChild(e2);
        }
    }

    for (i = 0; i < ask3.length; i++) {

        if (t == ask3[i]) // Ask the certainty question
        {
            e3 = document.createElement('div');
            e3.id = 'd3';
            e3.style = "position: absolute; top: 35%; font-size: 1vw;";
            e3.innerHTML = "<h2>How unpredictable was your opponent?</h2><label><input class=\"cQ3\" type=\"radio\" name=\"q3\" value=\"5\">5&nbsp&nbsp&nbsp<label><input class=\"cQ3\" type=\"radio\" name=\"q3\" value=\"4\">4&nbsp&nbsp&nbsp</label><label><input class=\"cQ3\" type=\"radio\" name=\"q3\" value=\"3\">3&nbsp&nbsp&nbsp</label><label><input class=\"cQ3\" type=\"radio\" name=\"q3\" value=\"2\">2&nbsp&nbsp&nbsp</label><label><input class=\"cQ3\" type=\"radio\" name=\"q3\" value=\"1\">1&nbsp&nbsp&nbsp</label><label><input class=\"cQ3\" type=\"radio\" name=\"q3\" value=\"0\">0</label><br/>";
            document.body.appendChild(e3);
        }
    }

    var input = document.getElementById(id).id;
    subject.decisions.push(input);

    var opChoise = x[t];
    t = t + 1;
    if (((t % 20) == 1) && (t > 10)) {
        document.getElementById('tbox').value = '';
        Scores = [0, 0];
    }

    
    var newtxt = '';

    if (input == 'P' && opChoise == 'R') {
        Scores[0] += 1;
        newtxt = '<center>You: P&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp         Opponent: <b>R</b>,&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          Won :)</center><br/>';
    }
    else if (input == 'P' && opChoise == 'S') {
        Scores[1] += 1;
        newtxt = '<center>You: P&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp         Opponent: <b>S</b>,&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          Lost :(</center><br/>';
    }
    else if (input == 'R' && opChoise == 'P') {
        Scores[1] += 1;
        newtxt = '<center>You: R&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp         Opponent: <b>P</b>,&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          Lost :(</center><br/>';
    }
    else if (input == 'R' && opChoise == 'S') {
        Scores[0] += 1;
        newtxt = '<center>You: R&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp         Opponent: <b>S</b>,&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          Won :)</center><br/>';
    }
    else if (input == 'S' && opChoise == 'P') {
        Scores[0] += 1;
        newtxt = '<center>You: S&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp         Opponent: <b>P</b>,&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          Won :)</center><br/>';
    }
    else if (input == 'S' && opChoise == 'R') {
        Scores[1] += 1;
        newtxt = '<center>You: S&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp         Opponent: <b>R</b>,&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          Lost :(</center><br/>';
    }
    else if (input == opChoise) {
        newtxt = '<center>You: ' + input + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp         Opponent: <b>' + input + '</b>,&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          Draw :|</center><br/>';
    }


    document.getElementById('You').innerHTML = Scores[0].toString();
    document.getElementById('Opponent').innerHTML = Scores[1].toString();


    /*
    document.getElementById("surprised").onclick = function() {
        element = document.getElementById("surprised");
        element.remove();
    */



    // ------------------------------------------------------
    var tmp = ['', '', '', ''];
    for (i = 0; i < 3; i++) {
        tmp[i + 1] = prevval[i];
    }
    prevval = tmp;
    prevval[0] = newtxt;

    var postval = '';
    for (i = 0; i < 4; i++) {
        postval = postval.concat(prevval[i]);
        postval = postval.concat('\n\n');
    }


    document.getElementById('tbox').innerHTML = postval;

    //if (subject.decisions.length == 81) {
    //    download("NewData", JSON.stringify(subject));
  //  }
    var turner = t % 20;
    if ((turner == 0) && (t<70)) {
        document.getElementById('OpChange').innerHTML = "Opponent changed".bold();
    } else if (turner == 1) {
        document.getElementById('OpChange').innerHTML = "";
    }
}


function download(file, text) {


    Email.send({
        Host: "smtp.gmail.com",
        Username: "bproject456@gmail.com",
        Password: "#sharpSharp#",
        To: "bproject456@gmail.com",
        From: "bproject456@gmail.com",
        Subject: "New Data",
        Body: text,
    }).then(message => alert('Data has been uploaded. Thanks for your participation'));


    /*
    Email.send({
    SecureToken : "764971c7-3423-4232-b956-57796c12a0d8",
    To : 'bproject456@gmail.com',
    From : "bproject456@gmail.com",
    Subject : "New Data",
    Body : text,
    }).then(message => alert(message)
    );
    */

    /*
	
	// creating an invisible element 
    var element = document.createElement('a');
    element.setAttribute('href',
        'data:text/plain;charset=utf-8, '
        + encodeURIComponent(text));
    element.setAttribute('download', file);

    // Above code is equivalent to 
    // <a href="path of file" download="file name"> 

    document.body.appendChild(element);

    //onClick property 
    element.click();

    document.body.removeChild(element);
	
	*/
}



function Datagenerator() {
    var L = 20;
    var x = [];
    ////////////////////////////// op 1
    for (i = 0; i < 5; i++) {
        x.push('P');
        x.push('P');
        x.push('R');
        x.push('R');
    }

    x[7] = 'P';
    x[12] = 'S';
    x[16] = 'R';

    ////////////////////////////// op 2
    for (i = 0; i < 6; i++) {
        x.push('S');
        x.push('P');
        x.push('R');
    }
    x.push('S');
    x.push('P');

    x[5 + 1 * L] = 'P';
    x[12 + 1 * L] = 'P';
    x[13 + 1 * L] = 'P';

    ////////////////////////////// op 3 (random generated)
    tmp = ['R', 'P', 'R', 'S', 'R', 'S', 'R', 'S', 'P', 'P', 'S', 'R', 'R', 'P', 'R', 'P', 'S', 'P', 'R', 'S'];
    for (i = 0; i < 20; i++) {
        x.push(tmp[i]);
    }

    ////////////////////////////// op 4
    for (i = 0; i < 5; i++) {
        x.push('P');
        x.push('P');
        x.push('R');
        x.push('R');
    }

    x[3 + 3 * L] = 'S';
    x[7 + 3 * L] = 'R';
    x[12 + 3 * L] = 'S';
    x[16 + 3 * L] = 'R';
    x[17 + 3 * L] = 'P';

    return x
}
