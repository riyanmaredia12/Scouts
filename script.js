function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,SMS legends,Salman Mukhtiar,4463\n2,Hayat,Moiz Hayat,4216\n3,Armaan XI,Armaan Punjwani,4204\n4,Noble Rajans,Muneer Didarali Rajan,4186\n5,Star boys ,shaayaan shmasuddin,4011\n6,W-11,Ubaid Ali,4001\n7,Super xl,Shafeen,3999\n8,Meerayy Underdogs,Sameer Vadsariya,3967\n9,444,Shazeen Sherzad,3897\n10,World 11,Ali Mohammed,3879\n11,The Winning Team,Sarim Ali Meghani,3862\n12,Balig Xl,Balig Barkat Ali,3843\n13,Jetha kay jhabaz,Aadil nasir,3803\n14,Velocity XI,Sahil Naseer,3767\n15,Wizards Of Wickets ,Raheen Ikram shah,3760\n16,SVxKaku11,Karim Ismail,3742\n17,Elegant Eleven ,Saima Nadir,3735\n18,The Thundering Titans,Arsh Maknojia,3723\n19,All around the world 11,Ayaan kashif,3692\n20,Trend Changers,Shahnil Iqbal,3676\n21,Best eleven xl,Shafeen Aslam,3661\n22,World best xl,Shafeen Aslam,3646\n22,Hit and Run XI,Shahzad Vadsariya,3646\n24,Royal Rajans,Imaad Amyn Rajan,3645\n25,Liverpool,Ezaan Sikander,3644\n26,KhowajaX11,Alnoor nizar,3638\n27,Elite Warriors ,Asad,3569\n28,4 cut Atmaram,Riyan maredia,3567\n29,ALLIES,Nausher Rahim,3523\n30,Dream 11,Shaheer Ahmed,3517\n31,All Stars,Aashir Rahim,3480\n32,Azzy 11,Azim Ali,3451\n33,Ayyan fighters,Ayyan Noushad Solanki,3431\n34,Panda Warriors,Shahnil Iqbal,3429\n35,The real OG,Sahra Iqbal,3367\n36,Maaz 11,Maaz Khalid,3341\n37,CA Ke Balley,Noman Vadsariya,3321\n38,The Pi - Guys,Moiz Ali,3298\n39, Fierce Fighters,Navroz Vadsaria,3293\n40,The Elites,Navroz Vadsaria,3272\n41,Team Darky,Sharoon Sherzad,3256\n42,Dororo11,Aly Shah Nizar,3253\n43,Gaitonde 11,Maisum,3249\n44,Koko x1,Shafeen aslam,3242\n45,Wolf XI,Sarfaraz S. Vadsariya,3167\n46,Amnn Shaheens,Amnn Ajaz,3166\n47,UK X1,Nadeem,3147\n48,Scared Shotless,hassan kirmani,3136\n49,xD XI,Naveed Hakim,3125\n50,Ali 11,Ali Muhammad Murad,3124\n50,SAROSH XI,Sarosh Sher Ali,3124\n52,Rameez_raja11,Mirsab Malik,3119\n53,321 pillay,Aariz Aziz,3095\n54,Lion xl,Shafeen Aslam,3037\n55,Mighty lions,Ali nawaz,2982\n56,Balig Gladiators ,Balig Barkat Ali,2936\n57,CricFlicks XI,Aman Hassan Vadsariya,2874\n58,Marco polo culb,Hubb-i-Ali,2872\n59,Sami falcons ,Sameer Noorddin,2853\n60,Prosperous Legends ,Affan Nadir,2844\n61,Chilka11 ,Karim Mehboob,2791\n62,Pana Tipu,Riyan maredia,2766\n63,Pinocchios,Sarfaraz S. Vadsariya,2754\n64,Maxi 11,Azim Ali,2665\n65,Aahil\'s XI,Aahil Aziz,2621\n66,Titans xl,Shafeen Aslam,2585\n67,hyakkimaru11,Aly Shah Nizar,2523\n68,GOALDIGGERS 11,Ali Shah Kamruddin,2338\n69,Shaheens X1,Haris Hanif Dinani,2165\n70,AJ XI,Ammad Jamil,2069'
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

