function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Armaan XI,Armaan Punjwani,3385\n2,SMS legends,Salman Mukhtiar,3364\n3,Noble Rajans,Muneer Didarali Rajan,3282\n4,Star boys ,shaayaan shmasuddin,3218\n5,Jetha kay jhabaz,Aadil nasir,3208\n6,Trend Changers,Shahnil Iqbal,3133\n7,Super xl,Shafeen,3124\n8,The Winning Team,Sarim Ali Meghani,3121\n9,Meerayy Underdogs,Sameer Vadsariya,3044\n10,444,Shazeen Sherzad,3038\n11,Elegant Eleven ,Saima Nadir,3022\n12,The Thundering Titans,Arsh Maknojia,3013\n12,Hayat,Moiz Hayat,3013\n14,Balig Xl,Balig Barkat Ali,3010\n15,Best eleven xl,Shafeen Aslam,2939\n16,Dream 11,Shaheer Ahmed,2917\n17,Velocity XI,Sahil Naseer,2877\n18,W-11,Ubaid Ali,2855\n19,ALLIES,Nausher Rahim,2842\n20,Royal Rajans,Imaad Amyn Rajan,2839\n21,Azzy 11,Azim Ali,2821\n22,Wizards Of Wickets ,Raheen Ikram shah,2818\n23,Hit and Run XI,Shahzad Vadsariya,2810\n24,Koko x1,Shafeen aslam,2791\n25,SVxKaku11,Karim Ismail,2789\n26,Liverpool,Ezaan Sikander,2748\n27,All around the world 11,Ayaan kashif,2729\n28,World 11,Ali Mohammed,2710\n29,All Stars,Aashir Rahim,2708\n30,CA Ke Balley,Noman Vadsariya,2680\n31,KhowajaX11,Alnoor nizar,2654\n32,Elite Warriors ,Asad,2635\n33,Panda Warriors,Shahnil Iqbal,2622\n34,Dororo11,Aly Shah Nizar,2612\n35,World best xl,Shafeen Aslam,2595\n36,UK X1,Nadeem,2580\n37,4 cut Atmaram,Riyan maredia,2578\n38,Ayyan fighters,Ayyan Noushad Solanki,2548\n39,Gaitonde 11,Maisum,2544\n40,Maaz 11,Maaz Khalid,2508\n41,Wolf XI,Sarfaraz S. Vadsariya,2470\n42,Scared Shotless,hassan kirmani,2457\n43,xD XI,Naveed Hakim,2438\n44,Team Darky,Sharoon Sherzad,2425\n45,Amnn Shaheens,Amnn Ajaz,2410\n46,SAROSH XI,Sarosh Sher Ali,2390\n47,Chilka11 ,Karim Mehboob,2375\n48,The Pi - Guys,Moiz Ali,2366\n49,321 pillay,Aariz Aziz,2361\n50, Fierce Fighters,Navroz Vadsaria,2359\n51,The real OG,Sahra Iqbal,2356\n52,Balig Gladiators ,Balig Barkat Ali,2346\n53,Rameez_raja11,Mirsab Malik,2345\n54,Ali 11,Ali Muhammad Murad,2312\n55,Marco polo culb,Hubb-i-Ali,2294\n56,The Elites,Navroz Vadsaria,2263\n57,Sami falcons ,Sameer Noorddin,2248\n58,Lion xl,Shafeen Aslam,2134\n59,Pana Tipu,Riyan maredia,2129\n60,CricFlicks XI,Aman Hassan Vadsariya,2117\n61,Mighty lions,Ali nawaz,2098\n62,Maxi 11,Azim Ali,2079\n63,Prosperous Legends ,Affan Nadir,2042\n64,Titans xl,Shafeen Aslam,2029\n65,Pinocchios,Sarfaraz S. Vadsariya,1989\n66,Aahil\'s XI,Aahil Aziz,1979\n67,hyakkimaru11,Aly Shah Nizar,1961\n68,GOALDIGGERS 11,Ali Shah Kamruddin,1862\n69,AJ XI,Ammad Jamil,1594\n70,Shaheens X1,Haris Hanif Dinani,1512'
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

