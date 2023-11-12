function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Jetha kay jhabaz,Aadil nasir,6647\n2,444,Shazeen Sherzad,6631\n3,SMS legends,Salman Mukhtiar,6122\n4,Hayat,Moiz Hayat,6061\n5,Noble Rajans,Muneer Didarali Rajan,6020\n6,All around the world 11,Ayaan kashif,5954\n7,Armaan XI,Armaan Punjwani,5919\n8,The Thundering Titans,Arsh Maknojia,5912\n9,Rameez_raja11,Mirsab Malik,5858\n10,Star boys ,shaayaan shmasuddin,5841\n11,The Winning Team,Sarim Ali Meghani,5775\n12,W-11,Ubaid Ali,5717\n13,Royal Rajans,Imaad Amyn Rajan,5628\n14,Elegant Eleven ,Saima Nadir,5614\n15,Team Darky,Sharoon Sherzad,5598\n16,KhowajaX11,Alnoor nizar,5558\n17,The Elites,Navroz Vadsaria,5534\n18,Azzy 11,Azim Ali,5442\n19,Balig Xl,Balig Barkat Ali,5437\n20,The real OG,Sahra Iqbal,5434\n21,Liverpool,Ezaan Sikander,5420\n22,Maaz 11,Maaz Khalid,5407\n23,Dream 11,Shaheer Ahmed,5400\n24,Ayyan fighters,Ayyan Noushad Solanki,5390\n25,Super xl,Shafeen,5379\n26,World 11,Ali Mohammed,5378\n27,4 cut Atmaram,Riyan maredia,5371\n28,321 pillay,Aariz Aziz,5236\n29,Lion xl,Shafeen Aslam,5183\n30,All Stars,Aashir Rahim,5181\n31,Panda Warriors,Shahnil Iqbal,5172\n32,Meerayy Underdogs,Sameer Vadsariya,5156\n33,Wolf XI,Sarfaraz S. Vadsariya,5151\n34,Hit and Run XI,Shahzad Vadsariya,5146\n35,UK X1,Nadeem,5135\n36,Koko x1,Shafeen aslam,5130\n37,Marco polo culb,Hubb-i-Ali,5127\n38,Gaitonde 11,Maisum,5121\n39,SAROSH XI,Sarosh Sher Ali,5109\n40,Velocity XI,Sahil Naseer,5108\n41,Trend Changers,Shahnil Iqbal,5094\n42,Dororo11,Aly Shah Nizar,5061\n43,ALLIES,Nausher Rahim,5042\n44,Prosperous Legends ,Affan Nadir,5040\n45,CA Ke Balley,Noman Vadsariya,5001\n46,Elite Warriors ,Asad,4992\n47,Ali 11,Ali Muhammad Murad,4989\n48,Best eleven xl,Shafeen Aslam,4987\n49, Fierce Fighters,Navroz Vadsaria,4934\n50,Amnn Shaheens,Amnn Ajaz,4901\n51,Scared Shotless,hassan kirmani,4856\n52,The Pi - Guys,Moiz Ali,4854\n53,Sami falcons ,Sameer Noorddin,4851\n54,CricFlicks XI,Aman Hassan Vadsariya,4844\n55,World best xl,Shafeen Aslam,4803\n56,xD XI,Naveed Hakim,4739\n57,Wizards Of Wickets ,Raheen Ikram shah,4723\n58,Mighty lions,Ali nawaz,4688\n59,Maxi 11,Azim Ali,4634\n60,SVxKaku11,Karim Ismail,4525\n61,Balig Gladiators ,Balig Barkat Ali,4459\n62,Pana Tipu,Riyan maredia,4314\n63,Aahil\'s XI,Aahil Aziz,4252\n64,Titans xl,Shafeen Aslam,4229\n65,Chilka11 ,Karim Mehboob,4174\n66,AJ XI,Ammad Jamil,4121\n67,GOALDIGGERS 11,Ali Shah Kamruddin,3918\n68,Shaheens X1,Haris Hanif Dinani,3746\n69,hyakkimaru11,Aly Shah Nizar,3656\n70,Pinocchios,Sarfaraz S. Vadsariya,3652'
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

