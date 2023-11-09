function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,444,Shazeen Sherzad,6185\n2,SMS legends,Salman Mukhtiar,5689\n3,Jetha kay jhabaz,Aadil nasir,5663\n4,Hayat,Moiz Hayat,5603\n5,Noble Rajans,Muneer Didarali Rajan,5593\n6,Armaan XI,Armaan Punjwani,5499\n7,All around the world 11,Ayaan kashif,5317\n8,Elegant Eleven ,Saima Nadir,5258\n9,Star boys ,shaayaan shmasuddin,5241\n10,The Thundering Titans,Arsh Maknojia,5207\n11,Maaz 11,Maaz Khalid,5188\n12,The Winning Team,Sarim Ali Meghani,5149\n13,W-11,Ubaid Ali,5104\n14,Royal Rajans,Imaad Amyn Rajan,5080\n15,Super xl,Shafeen,5059\n16,Liverpool,Ezaan Sikander,5033\n17,Azzy 11,Azim Ali,5019\n18,Team Darky,Sharoon Sherzad,4951\n19,All Stars,Aashir Rahim,4943\n20,Dream 11,Shaheer Ahmed,4932\n21,Balig Xl,Balig Barkat Ali,4892\n22,Rameez_raja11,Mirsab Malik,4864\n23,The Elites,Navroz Vadsaria,4860\n24,321 pillay,Aariz Aziz,4817\n25,Panda Warriors,Shahnil Iqbal,4812\n26,KhowajaX11,Alnoor nizar,4809\n27,ALLIES,Nausher Rahim,4805\n28,The real OG,Sahra Iqbal,4784\n29,Meerayy Underdogs,Sameer Vadsariya,4782\n30,Trend Changers,Shahnil Iqbal,4777\n31,World 11,Ali Mohammed,4739\n32,Ayyan fighters,Ayyan Noushad Solanki,4722\n33,4 cut Atmaram,Riyan maredia,4700\n34,Hit and Run XI,Shahzad Vadsariya,4653\n35,The Pi - Guys,Moiz Ali,4626\n36,Marco polo culb,Hubb-i-Ali,4571\n37,Koko x1,Shafeen aslam,4562\n38,SAROSH XI,Sarosh Sher Ali,4552\n39,Prosperous Legends ,Affan Nadir,4525\n40,Elite Warriors ,Asad,4508\n41,Ali 11,Ali Muhammad Murad,4489\n41,Best eleven xl,Shafeen Aslam,4489\n43,Sami falcons ,Sameer Noorddin,4484\n44,Wizards Of Wickets ,Raheen Ikram shah,4469\n45,Dororo11,Aly Shah Nizar,4456\n46,Lion xl,Shafeen Aslam,4447\n47,Scared Shotless,hassan kirmani,4443\n48,Wolf XI,Sarfaraz S. Vadsariya,4437\n49,CricFlicks XI,Aman Hassan Vadsariya,4433\n50, Fierce Fighters,Navroz Vadsaria,4378\n51,Velocity XI,Sahil Naseer,4363\n52,Gaitonde 11,Maisum,4357\n53,SVxKaku11,Karim Ismail,4240\n54,Amnn Shaheens,Amnn Ajaz,4234\n55,UK X1,Nadeem,4217\n56,World best xl,Shafeen Aslam,4182\n57,CA Ke Balley,Noman Vadsariya,4175\n58,xD XI,Naveed Hakim,4144\n59,Mighty lions,Ali nawaz,4086\n60,Pana Tipu,Riyan maredia,3995\n61,Titans xl,Shafeen Aslam,3892\n62,AJ XI,Ammad Jamil,3871\n63,Chilka11 ,Karim Mehboob,3868\n64,Balig Gladiators ,Balig Barkat Ali,3831\n65,Maxi 11,Azim Ali,3806\n66,hyakkimaru11,Aly Shah Nizar,3729\n67,GOALDIGGERS 11,Ali Shah Kamruddin,3576\n68,Aahil\'s XI,Aahil Aziz,3465\n69,Pinocchios,Sarfaraz S. Vadsariya,3197\n70,Shaheens X1,Haris Hanif Dinani,3077'
const array = csvToArray(csvString);
array.reverse()
array.pop()
array.reverse()
console.log(array);


function displayTeams() {
    const resultTable = document.getElementById('resultTable');

    array.forEach((team) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team[0]}</td>
            <td>${team[1]}</td>
            <td>${team[2]}</td>
            <td>${team[3]}</td>
        `;
        resultTable.appendChild(row);
    });
}

window.onload = displayTeams;

document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    body.classList.add("animate");
});

