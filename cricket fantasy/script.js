function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Best eleven xl,Shafeen Aslam,2264\n2,Trend Changers,Shahnil Iqbal,2094\n3,Noble Rajans,Muneer Didarali Rajan,1957\n4,Wizards Of Wickets ,Raheen Ikram shah,1943\n5,Meerayy Underdogs,Sameer Vadsariya,1921\n6,Super xl,Shafeen,1859\n7,444,Shazeen Sherzad,1823\n8,Chilka11 ,Karim Mehboob,1798\n8,World best xl,Shafeen Aslam,1798\n10,Liverpool,Ezaan Sikander,1792\n11,Royal Rajans,Imaad Amyn Rajan,1768\n12,The Winning Team,Sarim Ali Meghani,1752\n13,Velocity XI,Sahil Naseer,1751\n14,Armaan XI,Armaan Punjwani,1742\n15,Elegant Eleven ,Saima Nadir,1703\n16,Star boys ,shaayaan shmasuddin,1689\n17,Dream 11,Shaheer Ahmed,1672\n18,Elite Warriors ,Asad,1658\n19,Azzy 11,Azim Ali,1644\n20,Jetha kay jhabaz,Aadil nasir,1634\n21,xD XI,Naveed Hakim,1631\n22,SMS legends,Salman Mukhtiar,1603\n23,UK X1,Nadeem,1591\n24,Balig Xl,Balig Barkat Ali,1584\n25,W-11,Ubaid Ali,1576\n26,CA Ke Balley,Noman Vadsariya,1551\n27,All Stars,Aashir Rahim,1549\n28, Fierce Fighters,Navroz Vadsaria,1547\n29,ALLIES,Nausher Rahim,1537\n30,All around the world 11,Ayaan kashif,1512\n30,Hayat,Moiz Hayat,1512\n32,321 pillay,Aariz Aziz,1471\n33,KhowajaX11,Alnoor nizar,1449\n34,Koko x1,Shafeen aslam,1436\n35,Team Darky,Sharoon Sherzad,1434\n36,Titans xl,Shafeen Aslam,1425\n37,SVxKaku11,Karim Ismail,1423\n38,Wolf XI,Sarfaraz S. Vadsariya,1421\n39,The Thundering Titans,Arsh Maknojia,1419\n40,Gaitonde 11,Maisum,1417\n41,The real OG,Sahra Iqbal,1385\n42,Pana Tipu,Riyan maredia,1378\n43,Panda Warriors,Shahnil Iqbal,1347\n44,Ayyan fighters,Ayyan Noushad Solanki,1340\n45,Maaz 11,Maaz Khalid,1329\n46,Marco polo culb,Hubb-i-Ali,1327\n47,4 cut Atmaram,Riyan maredia,1312\n47,Hit and Run XI,Shahzad Vadsariya,1312\n49,Pinocchios,Sarfaraz S. Vadsariya,1306\n49,SAROSH XI,Sarosh Sher Ali,1306\n51,Prosperous Legends ,Affan Nadir,1283\n52,Scared Shotless,hassan kirmani,1280\n53,CricFlicks XI,Aman Hassan Vadsariya,1279\n54,Lion xl,Shafeen Aslam,1277\n55,Aahil\'s XI,Aahil Aziz,1271\n56,Rameez_raja11,Mirsab Malik,1254\n57,hyakkimaru11,Aly Shah Nizar,1249\n58,World 11,Ali Mohammed,1224\n59,Amnn Shaheens,Amnn Ajaz,1207\n60,Balig Gladiators ,Balig Barkat Ali,1204\n61,The Pi - Guys,Moiz Ali,1195\n62,Ali 11,Ali Muhammad Murad,1194\n63,Dororo11,Aly Shah Nizar,1181\n64,Sami falcons ,Sameer Noorddin,1177\n65,Maxi 11,Azim Ali,1087\n66,GOALDIGGERS 11,Ali Shah Kamruddin,1077\n67,The Elites,Navroz Vadsaria,1073\n68,AJ XI,Ammad Jamil,1057\n69,Mighty lions,Ali nawaz,970\n70,Shaheens X1,Haris Hanif Dinani,704'
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

