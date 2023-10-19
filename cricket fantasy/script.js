function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Trend Changers,Shahnil Iqbal,2353\n2,Best eleven xl,Shafeen Aslam,2319\n3,444,Shazeen Sherzad,2229\n4,Noble Rajans,Muneer Didarali Rajan,2205\n5,Elegant Eleven ,Saima Nadir,2134\n6,Meerayy Underdogs,Sameer Vadsariya,2127\n7,Star boys ,shaayaan shmasuddin,2122\n8,The Winning Team,Sarim Ali Meghani,2084\n9,Super xl,Shafeen,2067\n10,Jetha kay jhabaz,Aadil nasir,2052\n11,Wizards Of Wickets ,Raheen Ikram shah,2049\n12,World best xl,Shafeen Aslam,2040\n13,Royal Rajans,Imaad Amyn Rajan,2020\n14,Chilka11 ,Karim Mehboob,2002\n15,Dream 11,Shaheer Ahmed,1989\n16,Armaan XI,Armaan Punjwani,1969\n17,All around the world 11,Ayaan kashif,1913\n18,Liverpool,Ezaan Sikander,1908\n19,ALLIES,Nausher Rahim,1890\n20,xD XI,Naveed Hakim,1860\n21,W-11,Ubaid Ali,1846\n22,The Thundering Titans,Arsh Maknojia,1833\n23,SMS legends,Salman Mukhtiar,1825\n24,Azzy 11,Azim Ali,1821\n25,Velocity XI,Sahil Naseer,1819\n26,All Stars,Aashir Rahim,1807\n27,CA Ke Balley,Noman Vadsariya,1796\n28, Fierce Fighters,Navroz Vadsaria,1774\n29,Balig Xl,Balig Barkat Ali,1769\n30,Hayat,Moiz Hayat,1729\n31,Koko x1,Shafeen aslam,1709\n32,Elite Warriors ,Asad,1704\n33,KhowajaX11,Alnoor nizar,1702\n34,UK X1,Nadeem,1695\n35,321 pillay,Aariz Aziz,1672\n36,Wolf XI,Sarfaraz S. Vadsariya,1636\n37,Team Darky,Sharoon Sherzad,1620\n38,Marco polo culb,Hubb-i-Ali,1597\n39,Pana Tipu,Riyan maredia,1579\n40,Hit and Run XI,Shahzad Vadsariya,1561\n41,Titans xl,Shafeen Aslam,1556\n41,Maaz 11,Maaz Khalid,1556\n43,Panda Warriors,Shahnil Iqbal,1527\n44,Rameez_raja11,Mirsab Malik,1525\n45,The real OG,Sahra Iqbal,1512\n46,Ayyan fighters,Ayyan Noushad Solanki,1506\n47,The Pi - Guys,Moiz Ali,1504\n48,SAROSH XI,Sarosh Sher Ali,1490\n48,4 cut Atmaram,Riyan maredia,1490\n50,Gaitonde 11,Maisum,1489\n51,Aahil\'s XI,Aahil Aziz,1482\n52,Scared Shotless,hassan kirmani,1471\n53,SVxKaku11,Karim Ismail,1469\n53,Ali 11,Ali Muhammad Murad,1469\n55,hyakkimaru11,Aly Shah Nizar,1462\n55,World 11,Ali Mohammed,1462\n57,Balig Gladiators ,Balig Barkat Ali,1453\n58,Prosperous Legends ,Affan Nadir,1449\n59,CricFlicks XI,Aman Hassan Vadsariya,1447\n60,Amnn Shaheens,Amnn Ajaz,1444\n61,Lion xl,Shafeen Aslam,1416\n62,Sami falcons ,Sameer Noorddin,1311\n63,Dororo11,Aly Shah Nizar,1304\n64,Pinocchios,Sarfaraz S. Vadsariya,1300\n65,GOALDIGGERS 11,Ali Shah Kamruddin,1276\n66,The Elites,Navroz Vadsaria,1239\n67,Maxi 11,Azim Ali,1194\n68,AJ XI,Ammad Jamil,1149\n69,Mighty lions,Ali nawaz,973\n70,Shaheens X1,Haris Hanif Dinani,776'
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

