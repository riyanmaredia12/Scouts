function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Best eleven xl,Shafeen Aslam,2111\n2,Trend Changers,Shahnil Iqbal,1732\n3,Wizards Of Wickets ,Raheen Ikram shah,1693\n4,Noble Rajans,Muneer Didarali Rajan,1656\n5,Elegant Eleven ,Saima Nadir,1644\n6,Super xl,Shafeen,1620\n7,444,Shazeen Sherzad,1619\n8,Meerayy Underdogs,Sameer Vadsariya,1608\n9,Star boys ,shaayaan shmasuddin,1595\n10,The Winning Team,Sarim Ali Meghani,1587\n11,Liverpool,Ezaan Sikander,1545\n12,Elite Warriors ,Asad,1522\n13,Dream 11,Shaheer Ahmed,1509\n14,World best xl,Shafeen Aslam,1492\n15,Velocity XI,Sahil Naseer,1489\n16,Royal Rajans,Imaad Amyn Rajan,1485\n17, Fierce Fighters,Navroz Vadsaria,1453\n18,All Stars,Aashir Rahim,1433\n18,All around the world 11,Ayaan kashif,1433\n20,Balig Xl,Balig Barkat Ali,1432\n21,KhowajaX11,Alnoor nizar,1415\n22,Hayat,Moiz Hayat,1399\n23,W-11,Ubaid Ali,1386\n24,Jetha kay jhabaz,Aadil nasir,1355\n25,Azzy 11,Azim Ali,1352\n26,Armaan XI,Armaan Punjwani,1349\n27,Gaitonde 11,Maisum,1307\n28,Team Darky,Sharoon Sherzad,1305\n29,The Thundering Titans,Arsh Maknojia,1303\n30,SMS legends,Salman Mukhtiar,1297\n31,321 pillay,Aariz Aziz,1296\n32,ALLIES,Nausher Rahim,1295\n33,xD XI,Naveed Hakim,1293\n34,Wolf XI,Sarfaraz S. Vadsariya,1291\n35,The real OG,Sahra Iqbal,1289\n36,UK X1,Nadeem,1271\n37,Titans xl,Shafeen Aslam,1269\n38,Koko x1,Shafeen aslam,1260\n39,Chilka11 ,Karim Mehboob,1244\n40,CA Ke Balley,Noman Vadsariya,1243\n41,Pinocchios,Sarfaraz S. Vadsariya,1224\n42,SVxKaku11,Karim Ismail,1219\n43,World 11,Ali Mohammed,1197\n44,Maaz 11,Maaz Khalid,1186\n45,Aahil\'s XI,Aahil Aziz,1184\n46,Ayyan fighters,Ayyan Noushad Solanki,1172\n47,hyakkimaru11,Aly Shah Nizar,1170\n47,Lion xl,Shafeen Aslam,1170\n49,Scared Shotless,hassan kirmani,1167\n50,Prosperous Legends ,Affan Nadir,1156\n51,CricFlicks XI,Aman Hassan Vadsariya,1150\n52,SAROSH XI,Sarosh Sher Ali,1134\n53,Marco polo culb,Hubb-i-Ali,1129\n54,4 cut Atmaram,Riyan maredia,1119\n55,Pana Tipu,Riyan maredia,1112\n56,The Pi - Guys,Moiz Ali,1106\n57,Panda Warriors,Shahnil Iqbal,1040\n58,Ali 11,Ali Muhammad Murad,1039\n59,AJ XI,Ammad Jamil,1031\n60,Rameez_raja11,Mirsab Malik,1009\n61,Hit and Run XI,Shahzad Vadsariya,1007\n62,Sami falcons ,Sameer Noorddin,984\n63,The Elites,Navroz Vadsaria,980\n64,Amnn Shaheens,Amnn Ajaz,978\n65,Balig Gladiators ,Balig Barkat Ali,976\n66,GOALDIGGERS 11,Ali Shah Kamruddin,934\n67,Dororo11,Aly Shah Nizar,897\n68,Mighty lions,Ali nawaz,855\n69,Maxi 11,Azim Ali,739\n70,Shaheens X1,Haris Hanif Dinani,605'
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

