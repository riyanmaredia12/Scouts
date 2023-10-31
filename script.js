function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,SMS legends,Salman Mukhtiar,4393\n2,Hayat,Moiz Hayat,4177\n3,Armaan XI,Armaan Punjwani,4123\n4,Noble Rajans,Muneer Didarali Rajan,4102\n5,Meerayy Underdogs,Sameer Vadsariya,3928\n6,444,Shazeen Sherzad,3897\n7,Star boys ,shaayaan shmasuddin,3888\n8,W-11,Ubaid Ali,3886\n9,The Winning Team,Sarim Ali Meghani,3862\n10,Super xl,Shafeen,3831\n11,Jetha kay jhabaz,Aadil nasir,3803\n12,World 11,Ali Mohammed,3762\n13,Velocity XI,Sahil Naseer,3755\n14,Elegant Eleven ,Saima Nadir,3735\n15,Wizards Of Wickets ,Raheen Ikram shah,3729\n16,All around the world 11,Ayaan kashif,3692\n17,The Thundering Titans,Arsh Maknojia,3684\n18,Balig Xl,Balig Barkat Ali,3674\n19,KhowajaX11,Alnoor nizar,3638\n20,Best eleven xl,Shafeen Aslam,3633\n21,World best xl,Shafeen Aslam,3607\n22,SVxKaku11,Karim Ismail,3597\n23,Trend Changers,Shahnil Iqbal,3595\n24,Liverpool,Ezaan Sikander,3577\n25,Elite Warriors ,Asad,3569\n26,Royal Rajans,Imaad Amyn Rajan,3561\n27,Dream 11,Shaheer Ahmed,3517\n28,ALLIES,Nausher Rahim,3490\n29,Hit and Run XI,Shahzad Vadsariya,3478\n30,Azzy 11,Azim Ali,3454\n31,All Stars,Aashir Rahim,3441\n32,4 cut Atmaram,Riyan maredia,3398\n33,Ayyan fighters,Ayyan Noushad Solanki,3392\n34,Panda Warriors,Shahnil Iqbal,3381\n35,The real OG,Sahra Iqbal,3367\n36,Maaz 11,Maaz Khalid,3305\n37,Gaitonde 11,Maisum,3249\n38,Team Darky,Sharoon Sherzad,3248\n39,Koko x1,Shafeen aslam,3242\n40,The Elites,Navroz Vadsaria,3233\n41,The Pi - Guys,Moiz Ali,3175\n42,Wolf XI,Sarfaraz S. Vadsariya,3173\n43,CA Ke Balley,Noman Vadsariya,3153\n44,Amnn Shaheens,Amnn Ajaz,3127\n45,Ali 11,Ali Muhammad Murad,3124\n46,Rameez_raja11,Mirsab Malik,3119\n47,Scared Shotless,hassan kirmani,3097\n48,321 pillay,Aariz Aziz,3095\n49, Fierce Fighters,Navroz Vadsaria,3085\n50,SAROSH XI,Sarosh Sher Ali,3007\n51,Dororo11,Aly Shah Nizar,3006\n52,Mighty lions,Ali nawaz,2982\n53,UK X1,Nadeem,2981\n54,xD XI,Naveed Hakim,2956\n55,Balig Gladiators ,Balig Barkat Ali,2936\n56,Lion xl,Shafeen Aslam,2868\n57,Sami falcons ,Sameer Noorddin,2853\n58,Marco polo culb,Hubb-i-Ali,2833\n59,CricFlicks XI,Aman Hassan Vadsariya,2829\n60,Prosperous Legends ,Affan Nadir,2813\n61,Pana Tipu,Riyan maredia,2766\n62,Chilka11 ,Karim Mehboob,2752\n63,Maxi 11,Azim Ali,2665\n64,Aahil\'s XI,Aahil Aziz,2621\n65,Pinocchios,Sarfaraz S. Vadsariya,2573\n66,Titans xl,Shafeen Aslam,2543\n67,hyakkimaru11,Aly Shah Nizar,2446\n68,GOALDIGGERS 11,Ali Shah Kamruddin,2341\n69,Shaheens X1,Haris Hanif Dinani,2153\n70,AJ XI,Ammad Jamil,1982'
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

