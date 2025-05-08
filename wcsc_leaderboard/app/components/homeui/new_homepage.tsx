"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

// Import all the components we extracted
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { TeamSection } from "./TeamSection";
import { BlogSection } from "./BlogSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { TeamMemberProps } from "./TeamMember";

export default function Homepage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const teamMembers: TeamMemberProps[] = [
    {
      name: "Kasun Sandaruwan",
      role: "Lead Developer",
      bio: "Full-stack developer with 3+ years experience in building scalable web applications",
      image:
        "https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/491936751_1688857228424262_8863284874586769546_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH08RA8bAL9BmYk-RJOfa-aCewYVuQM3vgJ7BhW5Aze-DrP0tVNHi81KgtD_3Ch7dOp_f1qAITB-eNJPgyNtvl1&_nc_ohc=3mWpq1o-mn4Q7kNvwGKJRQg&_nc_oc=AdlCyLilph6T7OWdPIlOtNzZeXgO95_2tvPuGxZa-RGcwkBL3D224vG_4dacU5qjQu8&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=BlNcLqRzK0NUm92EE346TQ&oh=00_AfJNHyzXjTVV-90QZWjz_wYH_29K7oYa7jzsD443xDXV5A&oe=681F1C85",
    },
    {
      name: "Amila Sampath",
      role: "Lead Developer",
      bio: "Full-stack developer with 5+ years experience in building scalable web applications",
      image:
        "https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/495197900_674123681902016_3910290089795717389_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGyyhRQwvH6TnG4QCxtL7EbGk30DTEiPvEaTfQNMSI-8frW4a5fQmzpIdicQ7Mb90Nue2afXDoeeDF4mJOUiV8g&_nc_ohc=lbdRBpyjWhIQ7kNvwFG4xd7&_nc_oc=AdkyK-JkLf4xn9F1eg6dP_0WgyMgnk8azXzK2qpDjqblMOeoLvX_KbTSIF3xBi45e34&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=mUWdnzZHE9-YqmWfKgs64g&oh=00_AfIwrYQXtgn32sD61HCrGa3CW2EWreQjZ1xV8Bjp9T04Fg&oe=681F2440",
    },
    {
      name: "Navidu dayarathna",
      role: "front-end Developer",
      bio: "Full-stack developer with 8+ years experience in building scalable web applications",
      image:
        "https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/486526625_656413577086709_2557244552253608537_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFL5IisbHb723JuyuS5-irbjLxovNxxCmqMvGi83HEKaplGVp4nQMjitw8ZsYfegKNRlINdpmcDS0lcYw5l5Atz&_nc_ohc=XjP5MPXbpZoQ7kNvwHkJW1a&_nc_oc=Adk8hrDqwQq6ehR9ByEJHlx94veyS78iUr3PMYDGTSM_dC4hhAEMub7m4Qvjvq8Xzz0&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=b4HuYdHlMkrzjde_R3gZNg&oh=00_AfKvw2PoVR84_fCZT8Xa0nMUzfieSbmqPTGCeI1vJKGy-w&oe=681F0603",
    },
    {
      name: "Semal Deemantha",
      role: "Lead Developer",
      bio: "Full-stack developer with 8+ years experience in building scalable web applications",
      image:
        "https://img.freepik.com/free-photo/thoughtful-handsome-guy-posing-against-white-wall_176420-32962.jpg?semt=ais_hybrid&amp;w=740",
    },
    {
      name: "Necto",
      role: "Lead Developer",
      bio: "Full-stack developer with 8+ years experience in building scalable web applications",
      image:
        "https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/490743479_1084116060419765_8370609069946754479_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEVgzsq95dNw2TDYagF6EWBgPN50df9-2-A83nR1_37b45KhNgf4NClAa-s6PRkpKW3SUTEKiIDvY8WgYzywTB2&_nc_ohc=CID8mrJZV4IQ7kNvwFiMK0d&_nc_oc=AdkugBmTQeHQDgeN-3wMF0-NTbuF26XM60xazKyIKJ4OEUJGVWkSf8pnRvrTJ0d6azQ&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=KFB8piHXWTJonfQyPiS_NA&oh=00_AfJWxBRXBYDSr-79gVtvm_wFJjrf3MEQaKk6nBt-4qy94Q&oe=681F0086",
    },
  ];

  //blog data
  const blogs = [
    {
      id: 1,
      title: "10 Tips to Win a Coding Competition",
      excerpt:
        "Boost your chances of success with these 10 expert strategies...",
      image:
        "https://techwize.com/assets/images/service/services-python-development.webp",
      date: "2024-05-01",
    },
    {
      id: 2,
      title: "Inside WCSC DEV: Meet the Team",
      excerpt:
        "We interviewed the minds behind the most exciting projects at WCSC DEV...",
      image:
        "https://techwize.com/assets/images/service/services-python-development.webp",
      date: "2024-05-04",
    },
    {
      id: 3,
      title: "The Future of AI and Student Innovation",
      excerpt:
        "Students at Wayamba University are leading the AI revolution...",
      image:
        "https://techwize.com/assets/images/service/services-python-development.webp",
      date: "2024-05-07",
    },
  ];

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute("href")?.replace("#", "");
      const element = document.getElementById(id || "");
      element?.scrollIntoView({ behavior: "smooth" });
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BlogSection blogs={blogs} />
      <TeamSection teamMembers={teamMembers} />
      <ContactSection />
      <Footer />
    </div>
  );
}
