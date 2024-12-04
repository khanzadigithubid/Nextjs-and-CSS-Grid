import Image from "next/image";
import image from "../../public/image/image.jpg";

export default function Home() {
  return (
    <div className="main">
      <div className="header">Generative AI</div>
      <div className="sidebar">
        <Image 
          src={image} 
          alt="Sidebar Image" 
          layout="intrinsic" 
          width={500} 
          height={600} 
          className="sidebar-image"
        />
      </div>
      <div className="content1">
  <h1>What is Generative AI?</h1>
  <p>Generative AI is a type of artificial intelligence that generates new and original data, such as images, videos, text, and audio, using machine learning and deep learning principles. This technology has the ability to create content that is similar to what humans would produce, but with its own unique characteristics.</p>
</div>

<div className="content2">
  <h1>Applications of Generative AI</h1>
  <p>1. <strong>Art and Design:</strong> Generative AI can be used in art, music, and design to generate new and innovative concepts.</p>
  <p>2. <strong>Entertainment:</strong> Generative AI can be used in films, TV shows, and video games to generate new and original characters, scenes, and stories.</p>
  <p>3. <strong>Education:</strong> Generative AI can be used in education to generate new and personalized educational materials.</p>
</div>

<div className="content3">
  <h1>Benefits of Generative AI</h1>
  <p>1. <strong>Increased Creativity:</strong> Generative AI can generate new and innovative ideas, boosting creativity.</p>
  <p>2. <strong>Time Savings:</strong> Generative AI can save time by generating data quickly, increasing productivity.</p>
  <p>3. <strong>New Opportunities:</strong> Generative AI can create new and original opportunities, enabling new business models and industries.</p>
</div>

      <div className="footer">© 2024 Generative AI. All rights reserved.</div>
    </div>
  );
}
