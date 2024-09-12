
enum CertificatesCategory{
    AR_VR = "AR VR",
    DATA_SCIENCE = "Data Science",
    DEV_OPS = "DevOps",
    FULLSTACK = "FullStack",
    GIS = "GIS",
    IOS = "iOS",
    PROJECT_MANAGEMENT = "Project Management",
    WORDPRESS = "Wordpress"
}

interface CertificatesTypes{
    name:string
    category:CertificatesCategory
    skills:string[]
    verified:boolean
    verifiedBy:string[]
    verifyCode:string
    date:string
    month:string
    year:string
    url?:string
    image:string
    top: boolean
}

const Certificates:CertificatesTypes[] = [
    //VR AR
    {
        name: "AR Development Techniques 01: Basic Concepts",
        category: CertificatesCategory.AR_VR,
        skills: ["Unity", "Augmented Reality"],
        verified: true,
        verifiedBy: ["Linkedin"],
        verifyCode: "f3f8b72213533c4d9b98c4645205d0526fa162edfec91d3889eadef84c76c075",
        date: "16",
        month: "October",
        year: "2023",
        image: "/images/certificates/cert_foundation_mozilla.jpg",
        top: false
    },
    {
        name:"AR Development Techniques 02: Lighting and Physics",
        category:CertificatesCategory.AR_VR,
        skills:["Unity", "Augmented Reality"],
        verified:true,
        verifiedBy:["Linkedin"],
        verifyCode:"4b2f68459e2596f040b4ea9121745bb0b23c86474cb85d11e4de707cfc271165",
        date:"02",
        month:"November",
        year:"2023",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false
    },
    {
        name:"Virtual Reality Foundations",
        category:CertificatesCategory.AR_VR,
        skills:["Unity", "Augmented Reality"],
        verified:true,
        verifiedBy:["Linkedin"],
        verifyCode:"bc55507e1e784903ea612995204157442c8496f80911d992f51919448069f66b",
        date:"18",
        month:"July",
        year:"2023",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false
    },
    //Data Science
    {
        name:"Data Science Foundations: Python Scientific Stack",
        category:CertificatesCategory.DATA_SCIENCE,
        skills:["Python"],
        verified:true,
        verifiedBy:["Linkedin"],
        verifyCode:"f0acc5c61889f9574d590dbab366da6437ddbebdf70c1b8c6cc78c906872def6",
        date:"21",
        month:"July",
        year:"2023",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false
    },
    {
        name:"Deep Learning: Getting Started",
        category:CertificatesCategory.DATA_SCIENCE,
        skills:["Python", "Machine Learning", "Deep Learning"],
        verified:true,
        verifiedBy:["Linkedin"],
        verifyCode:"3e596553be417a852ad40dcc0ecf38087e54dadf7a9f188c556c40a7d7be21c6",
        date:"24",
        month:"July",
        year:"2023",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false
    },
    {
        name:"OpenCV for Python Developers",
        category:CertificatesCategory.DATA_SCIENCE,
        skills:["Python", "Computer Vision", "OpenCV"],
        verified:true,
        verifiedBy:["Linkedin"],
        verifyCode:"96569e1cc1214a9e8325aae7e5c86f74eafd3ca3fc6e84b8267d91370e5d7c8f",
        date:"12",
        month:"August",
        year:"2023",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false
    },
    {
        name:"Python for Data Science Essential Training Part 1",
        category:CertificatesCategory.DATA_SCIENCE,
        skills:["Python", "Data Science"],
        verified:true,
        verifiedBy:["Linkedin"],
        verifyCode:"96569e1cc1214a9e8325aae7e5c86f74eafd3ca3fc6e84b8267d91370e5d7c8f",
        date:"10",
        month:"July",
        year:"2023",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false
    },
    {
        name:"Python for Data Science Essential Training Part 2",
        category:CertificatesCategory.DATA_SCIENCE,
        skills:["Python", "Data Science"],
        verified:true,
        verifiedBy:["Linkedin"],
        verifyCode:"96569e1cc1214a9e8325aae7e5c86f74eafd3ca3fc6e84b8267d91370e5d7c8f",
        date:"19",
        month:"July",
        year:"2023",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false
    },
    {
        name:"Data Science Methodology",
        category:CertificatesCategory.DATA_SCIENCE,
        skills:["Python", "Data Science"],
        verified:true,
        verifiedBy:["Coursera", "IBM"],
        verifyCode:"6G4NMZ275RZK",
        date:"30",
        month:"January",
        year:"2021",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false,
        url: "https://coursera.org/verify/7JP2NYZ9ALZN"
    }, 
    {
        name:"Databases and SQL for Data Science with Python",
        category:CertificatesCategory.DATA_SCIENCE,
        skills:["Python", "Data Science"],
        verified:true,
        verifiedBy:["Coursera", "IBM"],
        verifyCode:"6G4NMZ275RZK",
        date:"8",
        month:"February",
        year:"2023",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false,
        url: "https://coursera.org/verify/6G4NMZ275RZK"
    },
    {
        name:"Introduction to Data Science in Python",
        category:CertificatesCategory.DATA_SCIENCE,
        skills:["Python", "Data Science"],
        verified:true,
        verifiedBy:["Coursera", "University for Michigan"],
        verifyCode:"TRWNHR5JQWKL",
        date:"13",
        month:"May",
        year:"2020",
        image:"/images/certificates/cert_foundation_mozilla.jpg",
        top: false,
        url: "https://coursera.org/verify/TRWNHR5JQWKL"
    },
]

