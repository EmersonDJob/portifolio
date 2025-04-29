import React from 'react'

const education = [
  {
    degree: "Engenharia de Software",
    institution: "Gran Centro Universitário",
    year: "2024 - presente",
    description: "Formação em Engenharia de Software com foco em desenvolvimento backend e frontend, arquitetura de sistemas, testes e metodologias ágeis. Conhecimentos sólidos em programação, estruturas de dados, banco de dados e ciclo completo de desenvolvimento de software.",
    icon: "🎓",
  },
  {
    degree: "Análise e Desenvolvimento de Sistemas ",
    institution: "Faculdade Estácio de Sá",
    year: "2020 - 2022",
    description: "Com foco prático em programação, modelagem de dados, desenvolvimento web e integração com APIs. Formação orientada ao mercado com ênfase em lógica de programação, banco de dados e ciclos ágeis de software.",
    icon: "🎓",
  },
  {
    degree: "Curso Técnico - Técnico em Informática para Internet",
    institution: "Senac MS",
    year: "2018-2019",
    description: "desenvolvimento web, criação de sites responsivos, banco de dados e integração com servidores. Formação prática em HTML, CSS, JavaScript, ferramentas de publicação de aplicações online.",
    icon: "🎓",
  },
];

const experience = [
  {
    role: "Founder & Developer",
    company: "Webelite Builders",
    year: "2024 - Present",
    description: "Atuei como desenvolvedor frontend júnior utilizando Vue.js e AngularJS na construção de interfaces responsivas e dinâmicas, com foco em performance e usabilidade. Participei da manutenção de componentes reutilizáveis, integração com APIs e versionamento via Git",
    icon: "💼",
  },
  {
    role: "Desenvolvedor JR - Backend C# ",
    company: "Bitzen Tecnologia - PR",
    year: "2021",
    description: "Atuei como desenvolvedor backend com foco em APIs REST usando ASP.NET Core e SQL Server, contribuindo para otimizações, correções e documentação técnica. Experiência com Git, metodologias ágeis e boas práticas de arquitetura e segurança em .NET.",
    icon: "💻",
  },
  {
    role: "Desenvolvedor JR",
    company: "SGI - Superintendência de Gestão da Informação - MS",
    year: "2019 - 2020",
    description: "Atuei como desenvolvedor frontend júnior utilizando Vue.js e AngularJS na construção de interfaces responsivas e dinâmicas, com foco em performance e usabilidade. Participei da manutenção de componentes reutilizáveis, integração com APIs e versionamento via Git",
    icon: "💼",
  },
];




const Education = () => {

  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Educação e Experiências</h2>
        <div className='grid md:grid-cols-2 gap-12'>
           {/* Education Section */}
           <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Educação</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
           {/* Experience Section */}
           <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experiências</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                            <p className='text-gray-300'>{exp.company}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                            <p className='text-gray-300 mt-2'>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

    </section>
  )
}

export default Education