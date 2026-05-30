"use client";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Designer Suits", "Lehenga Choli", "Anarkali", "Designer Saree"];

const CATEGORIES = [
  {
    name: "Designer Suits",
    subtitle: "Crafted for the Modern Maharani",
    count: "120+ Pieces",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=90",
  },
  {
    name: "Lehenga Choli",
    subtitle: "Bridal Splendour, Reimagined",
    count: "85+ Pieces",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=90",
  },
  {
    name: "Anarkali",
    subtitle: "Grace that Commands Attention",
    count: "95+ Pieces",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=90",
  },
  {
    name: "Designer Saree",
    subtitle: "Six Yards of Pure Luxury",
    count: "110+ Pieces",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=90",
  },
];

const PRODUCTS = [
  {
    name: "Zardozi Bridal Lehenga",
    price: "₹14,999",
    original: "₹22,000",
    discount: "32% OFF",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=90",
    tag: "BESTSELLER",
    category: "Lehenga Choli",
    rating: "4.9",
    reviews: "248",
  },
  {
    name: "Silk Banarasi Saree",
    price: "₹8,999",
    original: "₹13,500",
    discount: "33% OFF",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=90",
    tag: "NEW ARRIVAL",
    category: "Designer Saree",
    rating: "4.8",
    reviews: "184",
  },
  {
    name: "Embroidered Anarkali",
    price: "₹6,499",
    original: "₹9,500",
    discount: "32% OFF",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=90",
    tag: "TRENDING",
    category: "Anarkali",
    rating: "4.7",
    reviews: "312",
  },
  {
    name: "Chanderi Designer Suit",
    price: "₹4,799",
    original: "₹7,200",
    discount: "33% OFF",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=90",
    tag: "SALE",
    category: "Designer Suits",
    rating: "4.8",
    reviews: "156",
  },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", city: "Mumbai", text: "The lehenga was absolutely stunning. Got so many compliments at my sister's wedding!", stars: 5 },
  { name: "Aisha Khan", city: "Delhi", text: "Quality is exceptional. The embroidery work is so intricate and beautiful.", stars: 5 },
  { name: "Meera Patel", city: "Surat", text: "Fast delivery, perfect fitting, gorgeous fabric. Will definitely order again!", stars: 5 },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const WA = "https://wa.me/919860257806?text=Hello%20EinayaCollection!%20I%20am%20interested%20in%20your%20collection.";

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleWishlist = (i: number) => {
    setWishlist((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", backgroundColor: "#0c0806", color: "#e8d5b7", minHeight: "100vh", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0c0806; }
        ::-webkit-scrollbar-thumb { background: #c9a96e; }
        .nav-link { font-family: 'Montserrat', sans-serif; font-size: 11px; letter-spacing: 3px; color: #e8d5b7; text-decoration: none; text-transform: uppercase; transition: color 0.3s; position: relative; padding-bottom: 4px; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #c9a96e; transition: width 0.3s; }
        .nav-link:hover { color: #c9a96e; }
        .nav-link:hover::after { width: 100%; }
        .cat-card { position: relative; overflow: hidden; cursor: pointer; }
        .cat-card img { transition: transform 0.8s ease; }
        .cat-card:hover img { transform: scale(1.08); }
        .cat-card .overlay { background: linear-gradient(to top, rgba(12,8,6,0.95) 0%, rgba(12,8,6,0.3) 60%, transparent 100%); position: absolute; inset: 0; transition: background 0.4s; }
        .cat-card:hover .overlay { background: linear-gradient(to top, rgba(12,8,6,0.98) 0%, rgba(12,8,6,0.5) 60%, transparent 100%); }
        .cat-btn { display: inline-block; margin-top: 12px; font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 3px; color: #c9a96e; border-bottom: 1px solid #c9a96e; padding-bottom: 2px; transform: translateY(10px); opacity: 0; transition: all 0.4s; }
        .cat-card:hover .cat-btn { transform: translateY(0); opacity: 1; }
        .prod-card { background: #13100d; border: 1px solid #2a2018; transition: all 0.4s; cursor: pointer; }
        .prod-card:hover { border-color: #c9a96e; transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.6); }
        .prod-img { overflow: hidden; }
        .prod-img img { transition: transform 0.6s ease; }
        .prod-card:hover .prod-img img { transform: scale(1.05); }
        .btn-gold { background: #c9a96e; color: #0c0806; font-family: 'Montserrat', sans-serif; font-size: 11px; letter-spacing: 2px; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s; }
        .btn-gold:hover { background: #e8c98a; transform: translateY(-1px); }
        .btn-outline { background: transparent; color: #c9a96e; font-family: 'Montserrat', sans-serif; font-size: 11px; letter-spacing: 2px; font-weight: 600; border: 1px solid #c9a96e; cursor: pointer; transition: all 0.3s; }
        .btn-outline:hover { background: #c9a96e; color: #0c0806; }
        .hero-animate { opacity: 0; transform: translateY(30px); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .hero-animate.visible { opacity: 1; transform: translateY(0); }
        .divider-line { width: 1px; height: 60px; background: linear-gradient(to bottom, transparent, #c9a96e, transparent); margin: 0 auto; }
        .gold-line { width: 40px; height: 1px; background: #c9a96e; display: inline-block; vertical-align: middle; margin: 0 16px; }
        .mobile-menu { position: fixed; inset: 0; background: #0c0806; z-index: 200; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px; transform: translateX(100%); transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-nav-link { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 300; color: #e8d5b7; text-decoration: none; letter-spacing: 2px; transition: color 0.3s; }
        .mobile-nav-link:hover { color: #c9a96e; }
        .star { color: #c9a96e; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hero-title { font-size: 48px !important; }
          .features-bar { flex-direction: column !important; gap: 16px !important; }
          .cat-grid { grid-template-columns: 1fr 1fr !important; }
          .prod-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .cat-grid { grid-template-columns: 1fr !important; }
          .prod-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 36px !important; }
        }
      `}</style>

      {/* ANNOUNCEMENT BAR */}
      <div style={{ background: "#c9a96e", color: "#0c0806", textAlign: "center", padding: "10px 24px", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "3px", fontWeight: 600 }}>
        ✦ FREE SHIPPING ABOVE ₹2999 &nbsp;·&nbsp; COD AVAILABLE &nbsp;·&nbsp; EASY RETURNS ✦
      </div>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        backgroundColor: scrolled ? "rgba(12,8,6,0.97)" : "#0c0806",
        borderBottom: `1px solid ${scrolled ? "#2a2018" : "#1a1510"}`,
        padding: "0 48px", height: "80px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.4s", backdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.8)" : "none"
      }}>
        {/* LOGO */}
        <div style={{ cursor: "pointer" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c9a96e", fontSize: "28px", fontWeight: 300, letterSpacing: "8px", lineHeight: 1 }}>EINAYA</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", color: "#8a7055", fontSize: "9px", letterSpacing: "6px", marginTop: "2px" }}>COLLECTION</div>
        </div>

        {/* DESKTOP NAV */}
        <div className="desktop-nav" style={{ display: "flex", gap: "40px" }}>
          {NAV_LINKS.map((l) => <a key={l} href="#" className="nav-link">{l}</a>)}
        </div>

        {/* ICONS */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href={WA} target="_blank" rel="noreferrer" style={{ color: "#25D366", fontSize: "20px", textDecoration: "none", transition: "transform 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>💬</a>
          <div style={{ position: "relative", cursor: "pointer" }}>
            <span style={{ fontSize: "20px" }}>🛍️</span>
            {cartCount > 0 && <span style={{ position: "absolute", top: "-8px", right: "-8px", background: "#c9a96e", color: "#0c0806", borderRadius: "50%", width: "18px", height: "18px", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{cartCount}</span>}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#e8d5b7", cursor: "pointer", fontSize: "20px", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}>
            <span style={{ display: "block", width: "22px", height: "1px", background: "#c9a96e", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ display: "block", width: "14px", height: "1px", background: "#c9a96e", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
            <span style={{ display: "block", width: "22px", height: "1px", background: "#c9a96e", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: "30px", right: "30px", background: "none", border: "none", color: "#c9a96e", fontSize: "28px", cursor: "pointer" }}>✕</button>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c9a96e", fontSize: "40px", fontWeight: 300, letterSpacing: "8px", marginBottom: "20px" }}>EINAYA</div>
        {NAV_LINKS.map((l) => <a key={l} href="#" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l}</a>)}
        <a href={WA} target="_blank" rel="noreferrer" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", letterSpacing: "3px", color: "#25D366", textDecoration: "none", marginTop: "20px" }}>💬 WHATSAPP US</a>
      </div>

      {/* HERO */}
      <div ref={heroRef} style={{ position: "relative", minHeight: "95vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "linear-gradient(135deg, #0c0806 0%, #1a1208 40%, #0c0806 100%)" }}>
        {/* Background pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(201,169,110,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,169,110,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
        {/* Vertical lines */}
        <div style={{ position: "absolute", left: "10%", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.15), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "10%", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.15), transparent)", pointerEvents: "none" }} />

        <div style={{ textAlign: "center", padding: "60px 24px", maxWidth: "900px", position: "relative", zIndex: 1 }}>
          <div className={`hero-animate ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "0.1s", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "6px", color: "#c9a96e", marginBottom: "28px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <span className="gold-line" />
            THE HOUSE OF ETHNIC LUXURY
            <span className="gold-line" />
          </div>

          <h1 className={`hero-animate ${heroVisible ? "visible" : ""} hero-title`} style={{ transitionDelay: "0.3s", fontFamily: "'Cormorant Garamond', serif", fontSize: "80px", fontWeight: 300, lineHeight: 1.1, color: "#e8d5b7", marginBottom: "8px", letterSpacing: "2px" }}>
            Where Every Thread
          </h1>
          <h1 className={`hero-animate ${heroVisible ? "visible" : ""} hero-title`} style={{ transitionDelay: "0.5s", fontFamily: "'Cormorant Garamond', serif", fontSize: "80px", fontWeight: 300, lineHeight: 1.1, color: "#c9a96e", marginBottom: "32px", letterSpacing: "2px", fontStyle: "italic" }}>
            Tells a Story
          </h1>

          <p className={`hero-animate ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "0.7s", fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 300, color: "#8a7055", lineHeight: "1.8", marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
            Handcrafted ethnic couture for the modern Indian woman — where tradition breathes in every stitch and luxury lives in every fold.
          </p>

          <div className={`hero-animate ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "0.9s", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#categories" className="btn-gold" style={{ padding: "16px 48px", display: "inline-block", textDecoration: "none", letterSpacing: "3px", fontSize: "11px" }}>
              EXPLORE COLLECTIONS
            </a>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: "16px 48px", display: "inline-block", textDecoration: "none", letterSpacing: "3px", fontSize: "11px" }}>
              💬 CONSULT US
            </a>
          </div>

          <div className={`hero-animate ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "1.1s", marginTop: "60px" }}>
            <div className="divider-line" />
          </div>

          {/* Stats */}
          <div className={`hero-animate ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "1.3s", display: "flex", gap: "48px", justifyContent: "center", marginTop: "40px", flexWrap: "wrap" }}>
            {[["5000+", "Happy Customers"], ["410+", "Designs"], ["4.9★", "Avg Rating"], ["100%", "Authentic"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 600, color: "#c9a96e" }}>{num}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "3px", color: "#5a4a35", marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div style={{ backgroundColor: "#c9a96e", padding: "14px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-block", animation: "marquee 20s linear infinite", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#0c0806", fontWeight: 600 }}>
          {Array(6).fill("✦ DESIGNER SUITS  ✦ LEHENGA CHOLI  ✦ ANARKALI  ✦ DESIGNER SAREE  ✦ FREE SHIPPING  ✦ COD AVAILABLE  ").join("")}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* CATEGORIES */}
      <div id="categories" style={{ padding: "120px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "6px", color: "#c9a96e", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <span className="gold-line" />OUR COLLECTIONS<span className="gold-line" />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "54px", fontWeight: 300, color: "#e8d5b7", letterSpacing: "2px" }}>
            Shop by Collection
          </h2>
        </div>

        <div className="cat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="cat-card" style={{ height: "580px" }}>
              <img src={cat.image} alt={cat.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div className="overlay" />
              <div style={{ position: "absolute", bottom: "36px", left: "28px", right: "28px" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "4px", color: "#c9a96e", marginBottom: "8px" }}>{cat.count}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 400, color: "#e8d5b7", lineHeight: 1.2, marginBottom: "6px" }}>{cat.name}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px", fontStyle: "italic", color: "#8a7055" }}>{cat.subtitle}</p>
                <span className="cat-btn">EXPLORE →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div style={{ background: "#0f0b09", padding: "120px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "6px", color: "#c9a96e", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <span className="gold-line" />HANDPICKED JUST FOR YOU<span className="gold-line" />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "54px", fontWeight: 300, color: "#e8d5b7", letterSpacing: "2px" }}>
              Featured Pieces
            </h2>
          </div>

          <div className="prod-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {PRODUCTS.map((p, i) => (
              <div key={i} className="prod-card" style={{ borderRadius: "2px" }}>
                <div className="prod-img" style={{ position: "relative", height: "380px" }}>
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", top: "16px", left: "16px", background: "#c9a96e", color: "#0c0806", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "2px", fontWeight: 700, padding: "5px 12px" }}>
                    {p.tag}
                  </div>
                  <button onClick={() => toggleWishlist(i)} style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(12,8,6,0.7)", border: "1px solid #2a2018", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", backdropFilter: "blur(10px)" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "#c9a96e"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2018"}>
                    {wishlist.includes(i) ? "❤️" : "🤍"}
                  </button>
                  <div style={{ position: "absolute", bottom: "16px", right: "16px", background: "#8B1A1A", color: "#f5e6c8", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "1px", fontWeight: 700, padding: "4px 10px" }}>
                    {p.discount}
                  </div>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "3px", color: "#5a4a35", marginBottom: "8px" }}>{p.category}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 500, color: "#e8d5b7", marginBottom: "8px", lineHeight: 1.3 }}>{p.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
                    <span className="star">{"★".repeat(5)}</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "#5a4a35" }}>({p.reviews})</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 600, color: "#c9a96e" }}>{p.price}</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "#3a2a1a", textDecoration: "line-through" }}>{p.original}</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button className="btn-gold" style={{ flex: 1, padding: "12px 8px" }} onClick={() => setCartCount(c => c + 1)}>
                      ADD TO CART
                    </button>
                    <a href={WA} target="_blank" rel="noreferrer" style={{ background: "#1a2e1a", border: "1px solid #25D366", color: "#25D366", width: "44px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "18px", borderRadius: "2px", transition: "all 0.3s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#25D366"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#1a2e1a"; (e.currentTarget as HTMLElement).style.color = "#25D366"; }}>
                      💬
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <a href="#" className="btn-outline" style={{ padding: "16px 60px", display: "inline-block", textDecoration: "none", letterSpacing: "3px", fontSize: "11px" }}>
              VIEW ALL PRODUCTS
            </a>
          </div>
        </div>
      </div>

      {/* BRAND STORY */}
      <div style={{ padding: "120px 48px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "6px", color: "#c9a96e", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <span className="gold-line" />OUR STORY<span className="gold-line" />
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "54px", fontWeight: 300, color: "#e8d5b7", lineHeight: 1.2, marginBottom: "28px" }}>
          Rooted in Tradition,<br /><span style={{ fontStyle: "italic", color: "#c9a96e" }}>Crafted for Today</span>
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 300, color: "#6a5a45", lineHeight: "2", marginBottom: "48px" }}>
          At EinayaCollection, we believe that ethnic fashion is not just clothing — it is a celebration of identity, heritage, and femininity. Every piece we curate is handcrafted by master artisans, ensuring that you wear not just a garment, but a legacy.
        </p>
        <a href={WA} target="_blank" rel="noreferrer" className="btn-gold" style={{ padding: "16px 48px", display: "inline-block", textDecoration: "none", letterSpacing: "3px", fontSize: "11px" }}>
          DISCOVER OUR STORY
        </a>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ background: "#0f0b09", padding: "120px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "6px", color: "#c9a96e", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <span className="gold-line" />LOVE FROM OUR CUSTOMERS<span className="gold-line" />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "54px", fontWeight: 300, color: "#e8d5b7" }}>
              What They Say
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ border: "1px solid #2a2018", padding: "40px", position: "relative" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "60px", color: "#c9a96e", lineHeight: 0.8, marginBottom: "20px", opacity: 0.4 }}>"</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "#8a7055", lineHeight: "1.8", marginBottom: "24px" }}>{t.text}</p>
                <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
                  {"★★★★★".split("").map((s, j) => <span key={j} className="star" style={{ fontSize: "14px" }}>{s}</span>)}
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", color: "#c9a96e" }}>{t.name}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "#3a2a1a", marginTop: "4px", letterSpacing: "1px" }}>{t.city}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHATSAPP CTA */}
      <div style={{ background: "linear-gradient(135deg, #0d1a0d, #1a2e1a)", padding: "100px 48px", textAlign: "center", borderTop: "1px solid #1a2e1a", borderBottom: "1px solid #1a2e1a" }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "6px", color: "#25D366", marginBottom: "20px" }}>✦ PERSONAL STYLING</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "48px", fontWeight: 300, color: "#e8d5b7", marginBottom: "16px" }}>
          Need Expert Guidance?
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontStyle: "italic", color: "#4a6a4a", marginBottom: "40px" }}>
          Our styling experts are ready to help you find your perfect look
        </p>
        <a href={WA} target="_blank" rel="noreferrer" style={{ background: "#25D366", color: "white", padding: "18px 56px", display: "inline-block", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", letterSpacing: "3px", fontWeight: 600, borderRadius: "2px", transition: "all 0.3s", boxShadow: "0 8px 32px rgba(37,211,102,0.3)" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(37,211,102,0.5)"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.3)"}>
          💬 CHAT ON WHATSAPP
        </a>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", color: "#2a4a2a", marginTop: "20px" }}>+91-9860257806</div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#080503", padding: "80px 48px 40px", borderTop: "1px solid #1a1510" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "60px", marginBottom: "60px" }}>
            {/* Brand */}
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c9a96e", fontSize: "32px", fontWeight: 300, letterSpacing: "8px", marginBottom: "4px" }}>EINAYA</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", color: "#5a4a35", fontSize: "9px", letterSpacing: "6px", marginBottom: "24px" }}>COLLECTION</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "#4a3a28", lineHeight: "2", maxWidth: "280px" }}>
                Celebrating Indian heritage through exquisite ethnic fashion. Where every thread tells a story of artistry and grace.
              </p>
              <div style={{ marginTop: "28px", display: "flex", gap: "12px" }}>
                {["📘", "📸", "▶️"].map((icon, i) => (
                  <div key={i} style={{ width: "40px", height: "40px", border: "1px solid #2a2018", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s", fontSize: "16px" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#c9a96e"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#2a2018"}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Collections */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "4px", color: "#c9a96e", marginBottom: "24px" }}>COLLECTIONS</h4>
              {NAV_LINKS.map((l) => (
                <div key={l} style={{ marginBottom: "14px" }}>
                  <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "#4a3a28", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#c9a96e"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4a3a28"}>
                    {l}
                  </a>
                </div>
              ))}
            </div>

            {/* Help */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "4px", color: "#c9a96e", marginBottom: "24px" }}>SUPPORT</h4>
              {["Size Guide", "Shipping Policy", "Return Policy", "Track Order", "FAQ"].map((l) => (
                <div key={l} style={{ marginBottom: "14px" }}>
                  <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "#4a3a28", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#c9a96e"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4a3a28"}>
                    {l}
                  </a>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "4px", color: "#c9a96e", marginBottom: "24px" }}>CONTACT</h4>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "#4a3a28", lineHeight: "2.5" }}>
                <div>📱 +91-9860257806</div>
                <div>💬 WhatsApp Available</div>
                <div>🕐 Mon–Sat: 10AM–7PM</div>
              </div>
              <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: "24px", background: "#25D366", color: "white", padding: "12px 24px", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "2px", fontWeight: 600, textDecoration: "none", borderRadius: "2px" }}>
                💬 WHATSAPP NOW
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div style={{ borderTop: "1px solid #1a1510", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "#2a1a0a" }}>
              © 2026 EINAYACOLLECTION. ALL RIGHTS RESERVED.
            </div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "#2a1a0a" }}>
              MADE WITH ❤️ IN INDIA
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}