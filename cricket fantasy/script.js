function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Armaan XI,Armaan Punjwani,2874\n2,Trend Changers,Shahnil Iqbal,2816\n3,Noble Rajans,Muneer Didarali Rajan,2802\n4,Jetha kay jhabaz,Aadil nasir,2713\n5,Best eleven xl,Shafeen Aslam,2664\n6,Super xl,Shafeen,2647\n7,Star boys ,shaayaan shmasuddin,2640\n8,Velocity XI,Sahil Naseer,2553\n9,Meerayy Underdogs,Sameer Vadsariya,2498\n10,The Winning Team,Sarim Ali Meghani,2487\n11,SMS legends,Salman Mukhtiar,2483\n12,Wizards Of Wickets ,Raheen Ikram shah,2455\n13,444,Shazeen Sherzad,2446\n14,Royal Rajans,Imaad Amyn Rajan,2422\n15,W-11,Ubaid Ali,2419\n16,The Thundering Titans,Arsh Maknojia,2418\n17,Elegant Eleven ,Saima Nadir,2398\n18,Balig Xl,Balig Barkat Ali,2387\n19,Dream 11,Shaheer Ahmed,2381\n20,Azzy 11,Azim Ali,2380\n21,CA Ke Balley,Noman Vadsariya,2349\n22,All Stars,Aashir Rahim,2344\n23,Elite Warriors ,Asad,2315\n24,UK X1,Nadeem,2313\n25,Hayat,Moiz Hayat,2297\n26,Liverpool,Ezaan Sikander,2293\n27,World best xl,Shafeen Aslam,2291\n28,Hit and Run XI,Shahzad Vadsariya,2290\n29,ALLIES,Nausher Rahim,2206\n30,Koko x1,Shafeen aslam,2203\n31,xD XI,Naveed Hakim,2192\n32,Wolf XI,Sarfaraz S. Vadsariya,2165\n33, Fierce Fighters,Navroz Vadsaria,2119\n34,World 11,Ali Mohammed,2116\n35,Gaitonde 11,Maisum,2110\n36,Chilka11 ,Karim Mehboob,2105\n37,KhowajaX11,Alnoor nizar,2100\n37,SVxKaku11,Karim Ismail,2100\n39,All around the world 11,Ayaan kashif,2079\n40,4 cut Atmaram,Riyan maredia,2069\n41,Amnn Shaheens,Amnn Ajaz,2005\n42,Panda Warriors,Shahnil Iqbal,1996\n43,Team Darky,Sharoon Sherzad,1987\n44,Dororo11,Aly Shah Nizar,1974\n45,Marco polo culb,Hubb-i-Ali,1940\n46,Ayyan fighters,Ayyan Noushad Solanki,1933\n47,Maaz 11,Maaz Khalid,1895\n48,The real OG,Sahra Iqbal,1881\n49,Titans xl,Shafeen Aslam,1877\n50,321 pillay,Aariz Aziz,1872\n51,Scared Shotless,hassan kirmani,1867\n52,Rameez_raja11,Mirsab Malik,1865\n53,The Pi - Guys,Moiz Ali,1863\n54,SAROSH XI,Sarosh Sher Ali,1861\n55,Balig Gladiators ,Balig Barkat Ali,1831\n56,Ali 11,Ali Muhammad Murad,1807\n57,Lion xl,Shafeen Aslam,1759\n58,Pana Tipu,Riyan maredia,1738\n59,Maxi 11,Azim Ali,1724\n60,Sami falcons ,Sameer Noorddin,1716\n61,hyakkimaru11,Aly Shah Nizar,1701\n62,Prosperous Legends ,Affan Nadir,1689\n63,The Elites,Navroz Vadsaria,1681\n64,Pinocchios,Sarfaraz S. Vadsariya,1674\n65,Aahil\'s XI,Aahil Aziz,1667\n66,CricFlicks XI,Aman Hassan Vadsariya,1623\n67,Mighty lions,Ali nawaz,1548\n68,GOALDIGGERS 11,Ali Shah Kamruddin,1538\n69,AJ XI,Ammad Jamil,1281\n70,Shaheens X1,Haris Hanif Dinani,1243'
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

