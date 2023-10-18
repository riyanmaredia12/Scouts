function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Best eleven xl,Shafeen Aslam,2288\n2,Trend Changers,Shahnil Iqbal,2240\n3,Noble Rajans,Muneer Didarali Rajan,2122\n4,Super xl,Shafeen,2017\n5,Wizards Of Wickets ,Raheen Ikram shah,1990\n6,Chilka11 ,Karim Mehboob,1951\n7,Meerayy Underdogs,Sameer Vadsariya,1933\n7,Royal Rajans,Imaad Amyn Rajan,1933\n9,Armaan XI,Armaan Punjwani,1892\n10,Liverpool,Ezaan Sikander,1875\n11,444,Shazeen Sherzad,1874\n12,World best xl,Shafeen Aslam,1857\n13,Star boys ,shaayaan shmasuddin,1819\n14,Velocity XI,Sahil Naseer,1794\n15,ALLIES,Nausher Rahim,1763\n16,Elegant Eleven ,Saima Nadir,1754\n17,The Winning Team,Sarim Ali Meghani,1752\n18,Dream 11,Shaheer Ahmed,1723\n19,W-11,Ubaid Ali,1710\n20,Elite Warriors ,Asad,1709\n21,SMS legends,Salman Mukhtiar,1695\n22,Azzy 11,Azim Ali,1672\n23,xD XI,Naveed Hakim,1670\n24,Balig Xl,Balig Barkat Ali,1667\n25,All Stars,Aashir Rahim,1659\n26,Jetha kay jhabaz,Aadil nasir,1634\n27,CA Ke Balley,Noman Vadsariya,1632\n28,Hayat,Moiz Hayat,1622\n29,UK X1,Nadeem,1618\n30, Fierce Fighters,Navroz Vadsaria,1605\n31,Team Darky,Sharoon Sherzad,1543\n32,Wolf XI,Sarfaraz S. Vadsariya,1529\n33,321 pillay,Aariz Aziz,1522\n34,KhowajaX11,Alnoor nizar,1518\n35,All around the world 11,Ayaan kashif,1512\n36,Hit and Run XI,Shahzad Vadsariya,1484\n37,Titans xl,Shafeen Aslam,1481\n38,The Thundering Titans,Arsh Maknojia,1478\n39,SVxKaku11,Karim Ismail,1469\n39,Panda Warriors,Shahnil Iqbal,1469\n41,Koko x1,Shafeen aslam,1436\n42,Gaitonde 11,Maisum,1417\n43,Maaz 11,Maaz Khalid,1416\n44,SAROSH XI,Sarosh Sher Ali,1413\n45,Ayyan fighters,Ayyan Noushad Solanki,1399\n46,Pana Tipu,Riyan maredia,1386\n46,Marco polo culb,Hubb-i-Ali,1386\n48,The real OG,Sahra Iqbal,1385\n48,hyakkimaru11,Aly Shah Nizar,1385\n50,World 11,Ali Mohammed,1335\n51,The Pi - Guys,Moiz Ali,1325\n52,Amnn Shaheens,Amnn Ajaz,1317\n53,4 cut Atmaram,Riyan maredia,1311\n54,CricFlicks XI,Aman Hassan Vadsariya,1307\n55,Pinocchios,Sarfaraz S. Vadsariya,1305\n56,Scared Shotless,hassan kirmani,1292\n57,Prosperous Legends ,Affan Nadir,1279\n58,Lion xl,Shafeen Aslam,1276\n59,Aahil\'s XI,Aahil Aziz,1271\n60,Balig Gladiators ,Balig Barkat Ali,1264\n61,Dororo11,Aly Shah Nizar,1259\n62,Rameez_raja11,Mirsab Malik,1254\n63,Ali 11,Ali Muhammad Murad,1194\n64,Sami falcons ,Sameer Noorddin,1177\n65,GOALDIGGERS 11,Ali Shah Kamruddin,1127\n66,Maxi 11,Azim Ali,1087\n67,The Elites,Navroz Vadsaria,1085\n68,AJ XI,Ammad Jamil,1069\n69,Mighty lions,Ali nawaz,970\n70,Shaheens X1,Haris Hanif Dinani,704'
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

