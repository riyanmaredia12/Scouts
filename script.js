function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,444,Shazeen Sherzad,7140\n2,Jetha kay jhabaz,Aadil nasir,7059\n3,SMS legends,Salman Mukhtiar,6565\n4,The Thundering Titans,Arsh Maknojia,6489\n5,All around the world 11,Ayaan kashif,6363\n6,Star boys ,shaayaan shmasuddin,6332\n7,Rameez_raja11,Mirsab Malik,6313\n8,Hayat,Moiz Hayat,6292\n9,The Winning Team,Sarim Ali Meghani,6260\n10,The Elites,Navroz Vadsaria,6213\n11,Armaan XI,Armaan Punjwani,6178\n12,Noble Rajans,Muneer Didarali Rajan,6177\n13,Elegant Eleven ,Saima Nadir,6146\n14,W-11,Ubaid Ali,6031\n15,Dream 11,Shaheer Ahmed,5982\n16,KhowajaX11,Alnoor nizar,5917\n17,Team Darky,Sharoon Sherzad,5863\n18,Azzy 11,Azim Ali,5834\n19,4 cut Atmaram,Riyan maredia,5785\n20,Balig Xl,Balig Barkat Ali,5728\n21,Ayyan fighters,Ayyan Noushad Solanki,5712\n22,Maaz 11,Maaz Khalid,5711\n23,Royal Rajans,Imaad Amyn Rajan,5695\n24,All Stars,Aashir Rahim,5644\n25,The real OG,Sahra Iqbal,5635\n26,Meerayy Underdogs,Sameer Vadsariya,5617\n27,Super xl,Shafeen,5580\n28,Liverpool,Ezaan Sikander,5536\n29,321 pillay,Aariz Aziz,5525\n30,World 11,Ali Mohammed,5520\n31,Marco polo culb,Hubb-i-Ali,5491\n32,Koko x1,Shafeen aslam,5477\n33,Panda Warriors,Shahnil Iqbal,5469\n34,Hit and Run XI,Shahzad Vadsariya,5441\n35,Lion xl,Shafeen Aslam,5432\n35,Scared Shotless,hassan kirmani,5432\n37,Trend Changers,Shahnil Iqbal,5427\n38,Ali 11,Ali Muhammad Murad,5388\n39,Gaitonde 11,Maisum,5382\n40,Wolf XI,Sarfaraz S. Vadsariya,5372\n41,Dororo11,Aly Shah Nizar,5339\n42,Velocity XI,Sahil Naseer,5296\n43,UK X1,Nadeem,5265\n43,SAROSH XI,Sarosh Sher Ali,5265\n45,CA Ke Balley,Noman Vadsariya,5260\n46,Sami falcons ,Sameer Noorddin,5254\n47,Prosperous Legends ,Affan Nadir,5246\n48,ALLIES,Nausher Rahim,5221\n49, Fierce Fighters,Navroz Vadsaria,5209\n50,Elite Warriors ,Asad,5207\n51,Best eleven xl,Shafeen Aslam,5189\n52,CricFlicks XI,Aman Hassan Vadsariya,5170\n53,The Pi - Guys,Moiz Ali,5108\n54,World best xl,Shafeen Aslam,5103\n55,Amnn Shaheens,Amnn Ajaz,5046\n56,Mighty lions,Ali nawaz,5038\n57,xD XI,Naveed Hakim,4993\n58,Maxi 11,Azim Ali,4890\n59,Wizards Of Wickets ,Raheen Ikram shah,4886\n60,Balig Gladiators ,Balig Barkat Ali,4720\n61,SVxKaku11,Karim Ismail,4678\n62,AJ XI,Ammad Jamil,4568\n63,Titans xl,Shafeen Aslam,4536\n64,Pana Tipu,Riyan maredia,4498\n65,Aahil\'s XI,Aahil Aziz,4444\n66,GOALDIGGERS 11,Ali Shah Kamruddin,4307\n67,Chilka11 ,Karim Mehboob,4211\n68,Shaheens X1,Haris Hanif Dinani,3910\n69,hyakkimaru11,Aly Shah Nizar,3825\n70,Pinocchios,Sarfaraz S. Vadsariya,3758'
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

