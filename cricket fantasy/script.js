function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Jetha kay jhabaz,Aadil nasir,3147\n2,Noble Rajans,Muneer Didarali Rajan,3140\n3,Trend Changers,Shahnil Iqbal,3092\n4,Armaan XI,Armaan Punjwani,3072\n5,Star boys ,shaayaan shmasuddin,3054\n6,Elegant Eleven ,Saima Nadir,2969\n7,Meerayy Underdogs,Sameer Vadsariya,2880\n8,SMS legends,Salman Mukhtiar,2879\n9,444,Shazeen Sherzad,2863\n10,The Thundering Titans,Arsh Maknojia,2849\n11,Best eleven xl,Shafeen Aslam,2835\n12,Royal Rajans,Imaad Amyn Rajan,2817\n13,The Winning Team,Sarim Ali Meghani,2804\n14,Super xl,Shafeen,2799\n15,ALLIES,Nausher Rahim,2756\n16,Dream 11,Shaheer Ahmed,2731\n17,Hayat,Moiz Hayat,2718\n18,Velocity XI,Sahil Naseer,2713\n19,World 11,Ali Mohammed,2710\n20,W-11,Ubaid Ali,2684\n21,Wizards Of Wickets ,Raheen Ikram shah,2681\n22,KhowajaX11,Alnoor nizar,2654\n23,Koko x1,Shafeen aslam,2588\n24,All around the world 11,Ayaan kashif,2576\n25,Balig Xl,Balig Barkat Ali,2573\n26,All Stars,Aashir Rahim,2544\n27,CA Ke Balley,Noman Vadsariya,2536\n28,World best xl,Shafeen Aslam,2513\n29,Azzy 11,Azim Ali,2504\n30,Liverpool,Ezaan Sikander,2480\n31,Elite Warriors ,Asad,2471\n32,SVxKaku11,Karim Ismail,2465\n33,Hit and Run XI,Shahzad Vadsariya,2431\n34,Amnn Shaheens,Amnn Ajaz,2410\n35,xD XI,Naveed Hakim,2389\n36,Gaitonde 11,Maisum,2380\n37,UK X1,Nadeem,2376\n38,Dororo11,Aly Shah Nizar,2348\n39, Fierce Fighters,Navroz Vadsaria,2329\n40,Balig Gladiators ,Balig Barkat Ali,2324\n41,Scared Shotless,hassan kirmani,2293\n41,Chilka11 ,Karim Mehboob,2293\n43,Wolf XI,Sarfaraz S. Vadsariya,2267\n44,4 cut Atmaram,Riyan maredia,2234\n45,Ayyan fighters,Ayyan Noushad Solanki,2231\n46,The Elites,Navroz Vadsaria,2214\n47,The Pi - Guys,Moiz Ali,2213\n48,The real OG,Sahra Iqbal,2203\n49,Maaz 11,Maaz Khalid,2179\n50,SAROSH XI,Sarosh Sher Ali,2176\n51,Rameez_raja11,Mirsab Malik,2170\n52,321 pillay,Aariz Aziz,2159\n52,Team Darky,Sharoon Sherzad,2159\n54,Marco polo culb,Hubb-i-Ali,2157\n55,Panda Warriors,Shahnil Iqbal,2152\n56,Ali 11,Ali Muhammad Murad,2017\n57,Lion xl,Shafeen Aslam,2003\n58,Pana Tipu,Riyan maredia,1976\n59,Pinocchios,Sarfaraz S. Vadsariya,1967\n60,CricFlicks XI,Aman Hassan Vadsariya,1942\n61,Mighty lions,Ali nawaz,1934\n62,Titans xl,Shafeen Aslam,1919\n63,Sami falcons ,Sameer Noorddin,1904\n64,Aahil\'s XI,Aahil Aziz,1897\n65,Prosperous Legends ,Affan Nadir,1889\n66,Maxi 11,Azim Ali,1885\n67,hyakkimaru11,Aly Shah Nizar,1808\n68,GOALDIGGERS 11,Ali Shah Kamruddin,1720\n69,AJ XI,Ammad Jamil,1594\n70,Shaheens X1,Haris Hanif Dinani,1370'
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

