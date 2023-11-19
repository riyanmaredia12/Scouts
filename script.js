function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,444,Shazeen Sherzad,7415\n2,Jetha kay jhabaz,Aadil nasir,7231\n3,The Thundering Titans,Arsh Maknojia,6730\n4,All around the world 11,Ayaan kashif,6677\n5,SMS legends,Salman Mukhtiar,6649\n6,The Winning Team,Sarim Ali Meghani,6608\n7,Rameez_raja11,Mirsab Malik,6597\n8,Star boys ,shaayaan shmasuddin,6584\n9,Hayat,Moiz Hayat,6389\n10,Elegant Eleven ,Saima Nadir,6362\n11,The Elites,Navroz Vadsaria,6314\n12,Armaan XI,Armaan Punjwani,6307\n13,Dream 11,Shaheer Ahmed,6276\n14,W-11,Ubaid Ali,6205\n15,Noble Rajans,Muneer Didarali Rajan,6203\n16,KhowajaX11,Alnoor nizar,6047\n17,Team Darky,Sharoon Sherzad,6006\n18,Azzy 11,Azim Ali,6003\n19,4 cut Atmaram,Riyan maredia,5947\n20,Ayyan fighters,Ayyan Noushad Solanki,5892\n21,Maaz 11,Maaz Khalid,5850\n22,Balig Xl,Balig Barkat Ali,5843\n23,Meerayy Underdogs,Sameer Vadsariya,5789\n24,Royal Rajans,Imaad Amyn Rajan,5788\n25,The real OG,Sahra Iqbal,5763\n26,All Stars,Aashir Rahim,5753\n27,Panda Warriors,Shahnil Iqbal,5749\n28,Super xl,Shafeen,5738\n29,321 pillay,Aariz Aziz,5710\n30,Marco polo culb,Hubb-i-Ali,5688\n31,Koko x1,Shafeen aslam,5650\n32,Liverpool,Ezaan Sikander,5647\n33,Trend Changers,Shahnil Iqbal,5620\n34,Ali 11,Ali Muhammad Murad,5600\n35,World 11,Ali Mohammed,5596\n36,Lion xl,Shafeen Aslam,5572\n37,Scared Shotless,hassan kirmani,5568\n38,Hit and Run XI,Shahzad Vadsariya,5565\n39,Gaitonde 11,Maisum,5491\n40,CA Ke Balley,Noman Vadsariya,5474\n41,Sami falcons ,Sameer Noorddin,5447\n42,Wolf XI,Sarfaraz S. Vadsariya,5440\n43,Dororo11,Aly Shah Nizar,5439\n44,Velocity XI,Sahil Naseer,5416\n45,SAROSH XI,Sarosh Sher Ali,5391\n46,UK X1,Nadeem,5385\n47,World best xl,Shafeen Aslam,5378\n48,Best eleven xl,Shafeen Aslam,5357\n49, Fierce Fighters,Navroz Vadsaria,5346\n50,Prosperous Legends ,Affan Nadir,5334\n51,CricFlicks XI,Aman Hassan Vadsariya,5322\n52,Elite Warriors ,Asad,5308\n53,ALLIES,Nausher Rahim,5265\n54,The Pi - Guys,Moiz Ali,5195\n55,Mighty lions,Ali nawaz,5167\n56,xD XI,Naveed Hakim,5103\n57,Amnn Shaheens,Amnn Ajaz,5090\n58,Maxi 11,Azim Ali,5087\n59,Wizards Of Wickets ,Raheen Ikram shah,5072\n60,Balig Gladiators ,Balig Barkat Ali,4905\n61,SVxKaku11,Karim Ismail,4696\n62,Pana Tipu,Riyan maredia,4684\n63,Aahil\'s XI,Aahil Aziz,4636\n64,Titans xl,Shafeen Aslam,4624\n65,AJ XI,Ammad Jamil,4576\n66,GOALDIGGERS 11,Ali Shah Kamruddin,4333\n67,Chilka11 ,Karim Mehboob,4277\n68,Shaheens X1,Haris Hanif Dinani,3936\n69,hyakkimaru11,Aly Shah Nizar,3885\n70,Pinocchios,Sarfaraz S. Vadsariya,3841'
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

