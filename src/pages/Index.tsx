import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMAGE = 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif';

const TOP_GAMES = [
  { rank: 1, title: 'Dota 2', genre: 'MOBA', score: 98, players: '12.4M', trend: '+5%', color: '#00f5ff' },
  { rank: 2, title: 'Counter-Strike 2', genre: 'FPS', score: 97, players: '11.1M', trend: '+2%', color: '#00f5ff' },
  { rank: 3, title: 'League of Legends', genre: 'MOBA', score: 95, players: '9.8M', trend: '-1%', color: '#ff00ff' },
];

const TOURNAMENTS = [
  {
    id: 1,
    name: 'THE INTERNATIONAL 2024',
    game: 'Dota 2',
    prize: '$40,000,000',
    date: '15–25 Октября 2024',
    location: '🇩🇪 Берлин, Германия',
    status: 'LIVE',
    teams: 18,
    viewers: '2.4M',
    color: '#00f5ff',
  },
  {
    id: 2,
    name: 'CS2 MAJOR COPENHAGEN',
    game: 'Counter-Strike 2',
    prize: '$1,250,000',
    date: '21–31 Марта 2025',
    location: '🇩🇰 Копенгаген, Дания',
    status: 'UPCOMING',
    teams: 24,
    viewers: '1.8M',
    color: '#00f5ff',
  },
  {
    id: 3,
    name: 'LEAGUE WORLDS 2024',
    game: 'League of Legends',
    prize: '$2,500,000',
    date: '2–19 Ноября 2024',
    location: '🇰🇷 Сеул, Корея',
    status: 'FINISHED',
    teams: 22,
    viewers: '3.1M',
    color: '#ff00ff',
  },
];

const Particle = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute rounded-full"
    style={{ animation: 'particle-float linear infinite', ...style }}
  />
);

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const fullText = 'ДОБРО ПОЖАЛОВАТЬ В МИР КИБЕРСПОРТА';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getStatusStyle = (status: string) => {
    if (status === 'LIVE') return { color: '#00ff88', border: '1px solid #00ff88', bg: 'rgba(0,255,136,0.1)' };
    if (status === 'UPCOMING') return { color: '#00f5ff', border: '1px solid #00f5ff', bg: 'rgba(0,245,255,0.1)' };
    return { color: '#666', border: '1px solid #444', bg: 'rgba(100,100,100,0.1)' };
  };

  const getStatusLabel = (status: string) => {
    if (status === 'LIVE') return '● LIVE';
    if (status === 'UPCOMING') return '◆ СКОРО';
    return '✓ ЗАВЕРШЁН';
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-dark)', color: '#e0f0ff' }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ background: 'rgba(8,8,16,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,245,255,0.15)' }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center"
            style={{ border: '1px solid #00f5ff', boxShadow: '0 0 10px rgba(0,245,255,0.4)' }}>
            <Icon name="Zap" size={16} style={{ color: '#00f5ff' }} />
          </div>
          <span className="font-orbitron font-bold text-lg tracking-wider" style={{ color: '#00f5ff' }}>
            NEXUS<span style={{ color: '#ff00ff' }}>GG</span>
          </span>
        </div>

        <div className="flex gap-1">
          {[
            { id: 'home', label: 'ГЛАВНАЯ' },
            { id: 'ratings', label: 'РЕЙТИНГИ' },
            { id: 'tournaments', label: 'ТУРНИРЫ' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-orbitron text-xs tracking-widest px-5 py-2 transition-all duration-300"
              style={{
                color: activeSection === item.id ? '#00f5ff' : '#6080a0',
                background: activeSection === item.id ? 'rgba(0,245,255,0.08)' : 'transparent',
                border: activeSection === item.id ? '1px solid rgba(0,245,255,0.3)' : '1px solid transparent',
                boxShadow: activeSection === item.id ? '0 0 10px rgba(0,245,255,0.15)' : 'none',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00ff88', boxShadow: '0 0 6px #00ff88', animation: 'blink 2s infinite' }} />
          <span className="font-orbitron text-xs" style={{ color: '#00ff88' }}>ONLINE</span>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
        <div className="absolute inset-0 cyber-grid" style={{ opacity: 0.6 }} />
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(0,245,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(255,0,255,0.08) 0%, transparent 60%)',
          }}
        />

        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            style={{
              left: `${5 + (i * 4.7) % 90}%`,
              bottom: `${5 + (i * 3.1) % 25}%`,
              animationDuration: `${8 + (i * 1.3) % 12}s`,
              animationDelay: `${(i * 0.4) % 8}s`,
              width: `${1 + (i % 2)}px`,
              height: `${1 + (i % 2)}px`,
              backgroundColor: i % 2 === 0 ? '#00f5ff' : '#ff00ff',
              boxShadow: `0 0 4px ${i % 2 === 0 ? '#00f5ff' : '#ff00ff'}`,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-3 px-4 py-2"
            style={{ border: '1px solid rgba(0,245,255,0.3)', background: 'rgba(0,245,255,0.05)' }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00ff88', boxShadow: '0 0 6px #00ff88' }} />
            <span className="font-orbitron text-xs tracking-[0.3em]" style={{ color: '#00ff88' }}>КИБЕРСПОРТ ПОРТАЛ</span>
          </div>

          <h1 className="font-orbitron font-black mb-4 leading-none glitch-text"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: '#00f5ff', letterSpacing: '-0.02em' }}>
            NEXUS<span style={{ color: '#ff00ff' }}>GG</span>
          </h1>

          <div className="font-orbitron text-sm tracking-[0.15em] mb-8 h-8 flex items-center justify-center" style={{ color: '#6080a0' }}>
            {typedText}<span className="cursor-blink ml-1" style={{ color: '#00f5ff' }}>|</span>
          </div>

          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#8090b0', fontFamily: 'Rajdhani', fontWeight: 400, lineHeight: 1.7 }}>
            Рейтинги лучших игр планеты. Расписание крупнейших киберспортивных турниров.
            Всё что нужно настоящему геймеру — в одном месте.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollTo('ratings')}
              className="font-orbitron text-sm tracking-widest px-8 py-3 transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(0,245,255,0.05))',
                border: '1px solid #00f5ff',
                color: '#00f5ff',
                boxShadow: '0 0 20px rgba(0,245,255,0.3)',
              }}
            >
              РЕЙТИНГИ ИГР
            </button>
            <button
              onClick={() => scrollTo('tournaments')}
              className="font-orbitron text-sm tracking-widest px-8 py-3 transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(255,0,255,0.2), rgba(255,0,255,0.05))',
                border: '1px solid #ff00ff',
                color: '#ff00ff',
                boxShadow: '0 0 20px rgba(255,0,255,0.3)',
              }}
            >
              ТУРНИРЫ
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-0 max-w-lg mx-auto"
            style={{ border: '1px solid rgba(0,245,255,0.2)', background: 'rgba(0,245,255,0.03)' }}>
            {[
              { value: '500+', label: 'ИГР В БАЗЕ' },
              { value: '120+', label: 'ТУРНИРОВ' },
              { value: '24/7', label: 'ОБНОВЛЕНИЯ' },
            ].map((stat, i) => (
              <div key={i} className="py-4 px-6 text-center"
                style={{ borderRight: i < 2 ? '1px solid rgba(0,245,255,0.2)' : 'none' }}>
                <div className="font-orbitron font-bold text-2xl" style={{ color: '#00f5ff' }}>{stat.value}</div>
                <div className="text-xs tracking-widest mt-1" style={{ color: '#4060a0', fontFamily: 'Orbitron' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, var(--bg-dark), transparent)' }} />
      </section>

      {/* RATINGS */}
      <section id="ratings" className="py-24 px-8 relative">
        <div className="absolute inset-0 cyber-grid" style={{ opacity: 0.3 }} />
        <div className="max-w-5xl mx-auto relative z-10">

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #00f5ff)' }} />
              <span className="font-orbitron text-xs tracking-[0.4em]" style={{ color: '#00f5ff' }}>ТОП СПИСОК</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #00f5ff)' }} />
            </div>
            <h2 className="font-orbitron font-black text-center mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#e0f0ff', letterSpacing: '-0.02em' }}>
              РЕЙТИНГ <span className="neon-cyan">ИГР</span>
            </h2>
            <p className="text-center" style={{ color: '#4060a0', fontFamily: 'Rajdhani', fontSize: '1.1rem' }}>
              Актуальный топ по онлайну, оценкам и активности сообщества
            </p>
          </div>

          <div className="flex gap-2 mb-8 flex-wrap justify-center">
            {['ВСЕ', 'FPS', 'MOBA', 'BATTLE ROYALE', 'RTS'].map((genre) => (
              <button
                key={genre}
                className="font-orbitron text-xs px-4 py-2 tracking-wider transition-all duration-200"
                style={{
                  border: genre === 'ВСЕ' ? '1px solid #00f5ff' : '1px solid rgba(0,245,255,0.2)',
                  color: genre === 'ВСЕ' ? '#00f5ff' : '#4060a0',
                  background: genre === 'ВСЕ' ? 'rgba(0,245,255,0.08)' : 'transparent',
                }}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            {TOP_GAMES.map((game, idx) => (
              <div
                key={game.rank}
                className="game-card flex items-center gap-4 p-4"
                style={{
                  background: 'rgba(15,15,26,0.8)',
                  border: '1px solid rgba(0,245,255,0.1)',
                }}
              >
                <div className="font-orbitron font-black text-2xl w-12 text-center flex-shrink-0"
                  style={{
                    color: game.rank <= 3 ? game.color : '#2a3050',
                    textShadow: game.rank <= 3 ? `0 0 10px ${game.color}` : 'none',
                  }}>
                  {game.rank <= 3 ? `#${game.rank}` : game.rank}
                </div>

                <div className="w-1 h-12 flex-shrink-0 rounded-full"
                  style={{ background: game.color, boxShadow: `0 0 8px ${game.color}` }} />

                <div className="flex-1 min-w-0">
                  <div className="font-orbitron font-bold text-lg leading-tight" style={{ color: '#e0f0ff' }}>
                    {game.title}
                  </div>
                  <div className="text-xs tracking-wider mt-1" style={{ color: '#4060a0', fontFamily: 'Orbitron' }}>
                    {game.genre}
                  </div>
                </div>

                <div className="flex-1 max-w-32 hidden sm:block">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-orbitron" style={{ color: '#4060a0' }}>РЕЙТИНГ</span>
                    <span className="text-xs font-orbitron" style={{ color: '#00f5ff' }}>{game.score}</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ background: 'rgba(0,245,255,0.1)' }}>
                    <div className="h-full rounded-full neon-progress" style={{ width: `${game.score}%` }} />
                  </div>
                </div>

                <div className="text-center hidden md:block w-24">
                  <div className="font-orbitron font-bold" style={{ color: '#00f5ff', fontSize: '1.1rem' }}>
                    {game.players}
                  </div>
                  <div className="text-xs" style={{ color: '#4060a0', fontFamily: 'Orbitron' }}>ИГРОКОВ</div>
                </div>

                <div className="w-16 text-right flex-shrink-0">
                  <span className="font-orbitron text-sm font-bold"
                    style={{ color: game.trend.startsWith('+') ? '#00ff88' : game.trend === '0%' ? '#4060a0' : '#ff4466' }}>
                    {game.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section id="tournaments" className="py-24 px-8 relative">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,0,255,0.06) 0%, transparent 60%)' }}
        />
        <div className="max-w-5xl mx-auto relative z-10">

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #ff00ff)' }} />
              <span className="font-orbitron text-xs tracking-[0.4em]" style={{ color: '#ff00ff' }}>СОБЫТИЯ</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #ff00ff)' }} />
            </div>
            <h2 className="font-orbitron font-black text-center mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#e0f0ff' }}>
              КИБЕРСПОРТИВНЫЕ <span className="neon-magenta">ТУРНИРЫ</span>
            </h2>
            <p className="text-center" style={{ color: '#4060a0', fontFamily: 'Rajdhani', fontSize: '1.1rem' }}>
              Крупнейшие международные соревнования — расписание и призовые фонды
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TOURNAMENTS.map((t) => {
              const statusStyle = getStatusStyle(t.status);
              const rgbMap: Record<string, string> = {
                '#00f5ff': '0,245,255',
                '#ff00ff': '255,0,255',
                '#00ff88': '0,255,136',
                '#ff9900': '255,153,0',
              };
              const rgb = rgbMap[t.color] || '0,245,255';
              return (
                <div
                  key={t.id}
                  className="game-card p-5 relative overflow-hidden"
                  style={{
                    background: 'rgba(15,15,26,0.9)',
                    border: `1px solid rgba(${rgb},0.2)`,
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(to right, transparent, ${t.color}, transparent)`, boxShadow: `0 0 8px ${t.color}` }} />

                  <div className="flex items-start justify-between mb-4">
                    <span className="font-orbitron text-xs px-3 py-1 tracking-wider"
                      style={{ color: statusStyle.color, border: statusStyle.border, background: statusStyle.bg }}>
                      {getStatusLabel(t.status)}
                    </span>
                    <span className="font-orbitron text-xs" style={{ color: '#4060a0' }}>{t.game}</span>
                  </div>

                  <h3 className="font-orbitron font-bold mb-3 leading-tight"
                    style={{ fontSize: '1rem', color: '#e0f0ff', letterSpacing: '0.05em' }}>
                    {t.name}
                  </h3>

                  <div className="font-orbitron font-black mb-4"
                    style={{ fontSize: '1.6rem', color: t.color, textShadow: `0 0 15px ${t.color}80` }}>
                    {t.prize}
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={14} style={{ color: '#4060a0' }} />
                      <span style={{ color: '#8090b0', fontFamily: 'Rajdhani' }}>{t.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={14} style={{ color: '#4060a0' }} />
                      <span style={{ color: '#8090b0', fontFamily: 'Rajdhani' }}>{t.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={14} style={{ color: '#4060a0' }} />
                      <span style={{ color: '#8090b0', fontFamily: 'Rajdhani' }}>{t.teams} команд</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Eye" size={14} style={{ color: '#4060a0' }} />
                      <span style={{ color: '#8090b0', fontFamily: 'Rajdhani' }}>{t.viewers} зрителей</span>
                    </div>
                  </div>

                  <button
                    className="mt-4 w-full font-orbitron text-xs tracking-widest py-2 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      border: `1px solid ${t.color}40`,
                      color: t.color,
                      background: `${t.color}08`,
                    }}
                  >
                    ПОДРОБНЕЕ →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-8 text-center"
        style={{ borderTop: '1px solid rgba(0,245,255,0.1)', background: 'rgba(0,0,0,0.5)' }}>
        <div className="font-orbitron font-bold text-xl mb-2" style={{ color: '#00f5ff' }}>
          NEXUS<span style={{ color: '#ff00ff' }}>GG</span>
        </div>
        <p className="text-sm" style={{ color: '#2a3050', fontFamily: 'Rajdhani' }}>
          © 2025 NEXUSGG — Киберспортивный портал
        </p>
        <div className="mt-4 flex justify-center gap-4">
          {['Telegram', 'Discord', 'Twitter', 'YouTube'].map((link) => (
            <button key={link} className="font-orbitron text-xs tracking-wider transition-colors duration-200"
              style={{ color: '#2a3050' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f5ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2a3050')}>
              {link}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}