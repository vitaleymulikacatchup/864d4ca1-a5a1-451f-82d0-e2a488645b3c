"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Hotel, Star, Waves, Heart, UtensilsCrossed, Dumbbell, Briefcase, Phone, DoorOpen, ThumbsUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="fluid"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Luxe Hotel"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889436034-cvttjjgn.jpg"
          logoAlt="Luxe Hotel Logo"
          button={{
            text: "Book Now",
            href: "#rooms"
          }}
          className="backdrop-blur-md"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Experience Luxury & Comfort"
          description="Discover an unforgettable stay at our premium hotel with world-class amenities, exceptional service, and breathtaking views"
          tag="Welcome to Paradise"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889436838-2twzhkwj.jpg",
              imageAlt: "Luxury hotel lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889437593-6ktor52d.jpg",
              imageAlt: "Hotel room suite"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889438293-13709aid.jpg",
              imageAlt: "Luxury bedroom"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889439380-s7djq2j1.jpg",
              imageAlt: "Hotel reception"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889440212-jnko0dgs.jpg",
              imageAlt: "Hotel exterior"
            }
          ]}
          buttons={[
            {
              text: "Book Your Stay",
              href: "#rooms"
            },
            {
              text: "Learn More",
              href: "#about"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          tagIcon={Hotel}
          title="Timeless Elegance Meets Modern Comfort"
          description="Since 1985, Luxe Hotel has been the preferred choice for discerning travelers seeking exceptional hospitality. Our commitment to excellence, personalized service, and attention to detail sets us apart. Every room is thoughtfully designed to provide the perfect blend of luxury and comfort."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889440984-aeidlwis.jpg",
            imageAlt: "Luxury room interior"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889441660-coqc206f.jpg",
            imageAlt: "Hotel room preview"
          }}
          buttons={[
            {
              text: "Explore Rooms",
              href: "#rooms"
            }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Everything you need for an unforgettable experience"
          tag="Amenities"
          tagIcon={Star}
          features={[
            {
              title: "Olympic Pool",
              description: "Relax and swim in our stunning temperature-controlled Olympic-sized pool with resort views",
              icon: Waves
            },
            {
              title: "Spa & Wellness",
              description: "Rejuvenate with our full-service spa offering massages, facials, and holistic wellness treatments",
              icon: Heart
            },
            {
              title: "Fine Dining",
              description: "Savor world-class cuisine at our award-winning restaurants and bars",
              icon: UtensilsCrossed
            },
            {
              title: "Fitness Center",
              description: "Stay active with state-of-the-art equipment and personal training services available",
              icon: Dumbbell
            },
            {
              title: "Business Center",
              description: "Fully equipped meeting rooms and high-speed internet for your business needs",
              icon: Briefcase
            },
            {
              title: "Concierge Service",
              description: "Our dedicated team is available 24/7 to assist with any requests or arrangements",
              icon: Phone
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardThree
          title="Choose Your Room"
          description="Select from our luxurious collection of thoughtfully designed accommodations"
          tag="Room Types"
          tagIcon={DoorOpen}
          products={[
            {
              id: "standard",
              name: "Standard Room",
              price: "$189/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889450113-knqjac3u.jpg",
              imageAlt: "Standard hotel room",
              initialQuantity: 1
            },
            {
              id: "deluxe",
              name: "Deluxe Suite",
              price: "$299/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889448517-9kmmptkv.jpg",
              imageAlt: "Deluxe suite with king bed",
              initialQuantity: 1
            },
            {
              id: "premium",
              name: "Premium Suite",
              price: "$449/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889449227-vs6sa90s.jpg",
              imageAlt: "Premium suite with living area",
              initialQuantity: 1
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Reviews"
          description="Read what our satisfied guests have to say about their experience"
          tag="Testimonials"
          tagIcon={ThumbsUp}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Traveler",
              company: "Tech Executive",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889443873-iasdz3qk.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Couple",
              company: "Honeymoon Guest",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889444609-1ntkf47u.jpg",
              imageAlt: "James Rodriguez"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Family Vacation",
              company: "Frequent Guest",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889445312-gh44ehvh.jpg",
              imageAlt: "Emma Thompson"
            },
            {
              id: "4",
              name: "Michael Chen",
              role: "Conference Attendee",
              company: "Corporate Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889445799-gdkw2qq3.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "5",
              name: "Victoria Santos",
              role: "Leisure Guest",
              company: "Return Visitor",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889446589-2tnf4xll.jpg",
              imageAlt: "Victoria Santos"
            },
            {
              id: "6",
              name: "David Johnson",
              role: "Wedding Guest",
              company: "Special Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889447270-f21g86hy.jpg",
              imageAlt: "David Johnson"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          tag="Help & Support"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our hotel, rooms, and services"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889447865-pe5mz8ap.jpg"
          imageAlt="Hotel concierge assisting guest"
          mediaPosition="right"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your check-in and check-out time?",
              content: "Check-in is available from 3:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be available upon request, subject to room availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for all guests. Please notify us of your arrival details at least 24 hours in advance."
            },
            {
              id: "3",
              title: "What amenities are included with my room?",
              content: "All rooms include complimentary Wi-Fi, daily housekeeping, premium toiletries, access to our fitness center, and use of the pool and spa facilities."
            },
            {
              id: "4",
              title: "Is parking available at the hotel?",
              content: "Yes, we offer both valet and self-parking options. Guests receive complimentary parking during their stay."
            },
            {
              id: "5",
              title: "Can I make special requests for my room?",
              content: "Absolutely! Our concierge team is available 24/7 to accommodate special requests such as room preferences, turndown service, and arrangements for celebrations."
            },
            {
              id: "6",
              title: "What is your cancellation policy?",
              content: "Cancellations must be made 7 days prior to arrival for a full refund. Cancellations within 7 days of arrival will incur a one-night room charge."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Newsletter"
          description="Subscribe to receive exclusive offers, travel tips, and early access to special promotions. Be the first to know about our latest events and seasonal packages."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763889450931-r38ixmmr.jpg"
          imageAlt="Hotel resort aerial view"
          mediaPosition="left"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time from promotional emails."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Luxe Hotel"
          copyrightText="© 2025 Luxe Hotel. All rights reserved."
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "features"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Guest Services",
              items: [
                {
                  label: "Booking",
                  href: "rooms"
                },
                {
                  label: "FAQs",
                  href: "faq"
                },
                {
                  label: "Cancellation Policy",
                  href: "faq"
                },
                {
                  label: "Special Requests",
                  href: "contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Terms of Service",
                  href: "#terms"
                },
                {
                  label: "Privacy Policy",
                  href: "#privacy"
                },
                {
                  label: "Cookie Policy",
                  href: "#cookies"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}