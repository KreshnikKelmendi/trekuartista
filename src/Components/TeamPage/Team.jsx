import React from 'react';
import member1 from "../Assets/member1.png"
import member2 from "../Assets/janche.png"
import member3 from "../Assets/albaKrasniqi.png"
import member4 from "../Assets/jetlirKuleta.png"
import member5 from "../Assets/kestrina.png"
import member6 from "../Assets/fjolla.png"
import member7 from "../Assets/trina.png"
import member8 from "../Assets/gentriti.png"
import member9 from "../Assets/edmiri.png"
import member10 from "../Assets/eduarti.png"
import member11 from "../Assets/euroni.png"
import member12 from "../Assets/andena.png"
import member13 from "../Assets/enesi.png"
import member14 from "../Assets/endriti.png"
import member15 from "../Assets/kreshnik.png"
import member16 from "../Assets/valoni.png"
import member17 from "../Assets/mentori.png"

const Team = () => {
  // Define an array of team members with their information
  const teamMembers = [
    {
      id: 1,
      name: 'Bardh Krasniqi',
      position: 'CEO Founder',
      image: member1,
    },
    {
      id: 2,
      name: 'Arian Ahmeti',
      position: 'CEO Founder',
      image: member2,
    },
    {
      id: 3,
      name: 'Alba Krasniqi',
      position: 'Operation Manager',
      image: member3,
    },
    {
      id: 4,
      name: 'Jetlir Kuleta',
      position: 'Print Manager',
      image: member4,
    },{
      id: 5,
      name: 'Kestrina Hajrizi',
      position: 'Finance Manager',
      image: member5,
    },{
      id: 6,
      name: 'Fjolla Bislimi',
      position: 'Project Manager',
      image: member6,
    },{
      id: 7,
      name: 'Trinë Namani',
      position: 'Account Manager',
      image: member7,
    },{
      id: 8,
      name: 'Gentrit Mehmeti',
      position: 'Senior Graphic Designer',
      image: member8, 
    },{
      id: 9,
      name: 'Edmir Kuleta',
      position: 'Senior Graphic Designer',
      image: member9,
    },{
      id: 10,
      name: 'Eduart Demaj',
      position: 'Graphic Designer',
      image: member10,
    },{
      id: 11,
      name: 'Euron Nika',
      position: 'Graphic Designer',
      image: member11,
    },{
      id: 12,
      name: 'Andena Rexhepi',
      position: 'Junior Graphic Designer',
      image: member12,
    },{
      id: 13,
      name: 'Enes Ramaxhiku',
      position: 'Motion Designer',
      image: member13,
    },{
      id: 14,
      name: 'Endrit Morina',
      position: '3D Artist',
      image: member14,
    },{
      id: 15,
      name: 'Kreshnik Kelmendi',
      position: 'Web Developer',
      image: member15,
    },{
      id: 16,
      name: 'Valon Kuleta',
      position: 'Print Operator',
      image: member16,
    },{
      id: 17,
      name: 'Mentor Gashi',
      position: 'Print Operator',
      image: member17,
    },{
      id: 18,
      name: 'Albert Zeqiri',
      position: 'Print Operator',
      image: '',
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[20px] gap-y-4 lg:gap-y-[50px] lg:px-[60px] py-[39px]">
      {teamMembers.map((member) => (
        <div key={member.id} className="text-[#979797] justify-center p-2 lg:p-0">
          <img
            src={member.image}
            alt={member.name}
            className="w-auto h-auto object-cover"
          />
          <h2 className="text-lg font-custom1 font-semibold mt-2">{member.name}</h2>
          <p className="text-base font-custom1">{member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
