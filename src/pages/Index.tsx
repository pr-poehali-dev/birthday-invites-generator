import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import html2canvas from 'html2canvas';

interface InvitationData {
  name: string;
  date: string;
  time: string;
  place: string;
}

const Index = () => {
  const [invitationData, setInvitationData] = useState<InvitationData>({
    name: '',
    date: '',
    time: '',
    place: ''
  });
  
  const [showPreview, setShowPreview] = useState(false);
  const invitationRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: keyof InvitationData, value: string) => {
    setInvitationData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    if (invitationData.name && invitationData.date && invitationData.time && invitationData.place) {
      setShowPreview(true);
    }
  };

  const handleDownload = async () => {
    if (invitationRef.current) {
      const canvas = await html2canvas(invitationRef.current, {
        scale: 2,
        backgroundColor: null
      });
      const link = document.createElement('a');
      link.download = `invitation-${invitationData.name}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const galleryExamples = [
    { id: 1, theme: 'Космическая битва', color: 'from-purple-600 to-blue-600' },
    { id: 2, theme: 'Неоновый штурм', color: 'from-pink-600 to-yellow-500' },
    { id: 3, theme: 'Лазерный арсенал', color: 'from-red-600 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wLTJjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-yellow-400 to-transparent opacity-50 animate-laser-shoot"></div>
        <div className="absolute top-40 right-20 w-2 h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-50 animate-laser-shoot" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-32 bg-gradient-to-b from-red-400 to-transparent opacity-50 animate-laser-shoot" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 animate-float">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Icon name="Target" size={48} className="text-yellow-400 animate-neon-pulse" />
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 via-red-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              ЛАЗЕРТАГ ПАТИ
            </h1>
            <Icon name="Zap" size={48} className="text-cyan-400 animate-neon-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-cyan-300 font-bold tracking-wide">
            Создай крутые пригласительные за секунды! 🎯
          </p>
        </header>

        <Tabs defaultValue="generator" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800/80 backdrop-blur-md border-2 border-cyan-500/30 rounded-xl p-2">
            <TabsTrigger 
              value="generator" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-orange-500 data-[state=active]:text-slate-900 font-bold text-lg rounded-lg transition-all hover:scale-105"
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Генератор
            </TabsTrigger>
            <TabsTrigger 
              value="gallery"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-blue-500 data-[state=active]:text-slate-900 font-bold text-lg rounded-lg transition-all hover:scale-105"
            >
              <Icon name="Images" size={20} className="mr-2" />
              Галерея
            </TabsTrigger>
            <TabsTrigger 
              value="about"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-bold text-lg rounded-lg transition-all hover:scale-105"
            >
              <Icon name="Info" size={20} className="mr-2" />
              О нас
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generator">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-slate-800/60 backdrop-blur-md border-2 border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Gamepad2" size={32} className="text-yellow-400" />
                  <h2 className="text-3xl font-black text-yellow-400">Заполни данные</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-cyan-300 font-bold text-lg">
                      <Icon name="User" size={18} className="inline mr-2" />
                      Имя именинника
                    </Label>
                    <Input
                      id="name"
                      placeholder="Введи имя..."
                      value={invitationData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-slate-900/50 border-2 border-cyan-500/50 focus:border-cyan-400 text-white text-lg h-14 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-cyan-300 font-bold text-lg">
                      <Icon name="Calendar" size={18} className="inline mr-2" />
                      Дата праздника
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={invitationData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="bg-slate-900/50 border-2 border-cyan-500/50 focus:border-cyan-400 text-white text-lg h-14 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-cyan-300 font-bold text-lg">
                      <Icon name="Clock" size={18} className="inline mr-2" />
                      Время начала
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={invitationData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="bg-slate-900/50 border-2 border-cyan-500/50 focus:border-cyan-400 text-white text-lg h-14 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="place" className="text-cyan-300 font-bold text-lg">
                      <Icon name="MapPin" size={18} className="inline mr-2" />
                      Место проведения
                    </Label>
                    <Input
                      id="place"
                      placeholder="Адрес арены..."
                      value={invitationData.place}
                      onChange={(e) => handleInputChange('place', e.target.value)}
                      className="bg-slate-900/50 border-2 border-cyan-500/50 focus:border-cyan-400 text-white text-lg h-14 rounded-xl"
                    />
                  </div>

                  <Button 
                    onClick={handleGenerate}
                    className="w-full h-16 text-xl font-black bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-yellow-500 hover:via-red-600 hover:to-pink-600 text-slate-900 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Sparkles" size={24} className="mr-2" />
                    СОЗДАТЬ ПРИГЛАШЕНИЕ
                    <Icon name="Rocket" size={24} className="ml-2" />
                  </Button>
                </div>
              </Card>

              <div className="space-y-4">
                {showPreview && (
                  <>
                    <Card 
                      ref={invitationRef}
                      className="p-8 bg-gradient-to-br from-purple-900 via-slate-900 to-cyan-900 border-4 border-yellow-400 shadow-2xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/25e9299d-0962-497f-879c-97d33f4d39d2/files/2048809b-2d55-4e4b-962e-0cb91ccd102e.jpg')] opacity-20 bg-cover bg-center"></div>
                      
                      <div className="relative z-10">
                        <div className="text-center mb-6">
                          <Icon name="PartyPopper" size={64} className="mx-auto text-yellow-400 mb-4 animate-float" />
                          <h3 className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 drop-shadow-lg">
                            ДЕНЬ РОЖДЕНИЯ!
                          </h3>
                          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
                        </div>

                        <div className="space-y-4 text-center">
                          <div className="bg-slate-900/70 backdrop-blur-sm p-4 rounded-xl border-2 border-cyan-400/50">
                            <p className="text-cyan-300 text-sm font-bold mb-1">ИМЕНИННИК:</p>
                            <p className="text-3xl font-black text-white">{invitationData.name}</p>
                          </div>

                          <div className="bg-slate-900/70 backdrop-blur-sm p-4 rounded-xl border-2 border-red-400/50">
                            <p className="text-red-300 text-sm font-bold mb-1">ДАТА И ВРЕМЯ:</p>
                            <p className="text-xl font-bold text-white">
                              {new Date(invitationData.date).toLocaleDateString('ru-RU', { 
                                day: 'numeric', 
                                month: 'long', 
                                year: 'numeric' 
                              })}
                            </p>
                            <p className="text-2xl font-black text-yellow-400">{invitationData.time}</p>
                          </div>

                          <div className="bg-slate-900/70 backdrop-blur-sm p-4 rounded-xl border-2 border-purple-400/50">
                            <p className="text-purple-300 text-sm font-bold mb-1">МЕСТО:</p>
                            <p className="text-xl font-bold text-white">{invitationData.place}</p>
                          </div>
                        </div>

                        <div className="mt-6 text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Icon name="Target" size={24} className="text-cyan-400" />
                            <p className="text-2xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text">
                              ЛАЗЕРТАГ АРЕНА
                            </p>
                            <Icon name="Zap" size={24} className="text-yellow-400" />
                          </div>
                          <p className="text-cyan-300 font-bold">Будет круто! 🎯🎮🚀</p>
                        </div>
                      </div>
                    </Card>

                    <Button 
                      onClick={handleDownload}
                      className="w-full h-14 text-lg font-black bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      <Icon name="Download" size={20} className="mr-2" />
                      СКАЧАТЬ ПРИГЛАСИТЕЛЬНОЕ
                    </Button>
                  </>
                )}
                
                {!showPreview && (
                  <Card className="p-12 bg-slate-800/40 backdrop-blur-md border-2 border-dashed border-cyan-500/30 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="ImagePlus" size={80} className="mx-auto text-cyan-400/50 mb-4" />
                      <p className="text-cyan-300/70 text-xl font-bold">
                        Заполни форму, чтобы увидеть предпросмотр
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text mb-4">
                Примеры наших работ
              </h2>
              <p className="text-cyan-300 text-lg">Вдохновись и создай своё уникальное приглашение!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {galleryExamples.map((example) => (
                <Card 
                  key={example.id}
                  className={`p-8 bg-gradient-to-br ${example.color} border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                  <div className="relative z-10">
                    <Icon name="Star" size={48} className="mx-auto text-yellow-300 mb-4 group-hover:animate-spin" />
                    <h3 className="text-2xl font-black text-white text-center mb-2">{example.theme}</h3>
                    <p className="text-white/80 text-center">Пример #{example.id}</p>
                    <div className="mt-4 flex justify-center">
                      <Icon name="Trophy" size={32} className="text-yellow-300" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-8 bg-slate-800/60 backdrop-blur-md border-2 border-purple-500/30 text-center">
              <Icon name="Palette" size={48} className="mx-auto text-purple-400 mb-4" />
              <h3 className="text-2xl font-black text-purple-400 mb-2">Хочешь уникальный дизайн?</h3>
              <p className="text-cyan-300 text-lg mb-4">Мы создадим индивидуальное приглашение специально для тебя!</p>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-xl">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="p-8 bg-gradient-to-br from-slate-800/80 to-purple-900/50 backdrop-blur-md border-2 border-cyan-500/30 shadow-2xl">
                <div className="text-center mb-8">
                  <Icon name="Rocket" size={64} className="mx-auto text-yellow-400 mb-4 animate-float" />
                  <h2 className="text-4xl font-black text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-cyan-400 bg-clip-text mb-4">
                    О нашем сервисе
                  </h2>
                  <div className="h-1 w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
                </div>

                <div className="space-y-6 text-lg text-cyan-100">
                  <p className="leading-relaxed">
                    <span className="font-bold text-yellow-400">ЛАЗЕРТАГ ПАТИ</span> — это твой личный генератор крутых пригласительных на день рождения! 🎯
                  </p>
                  <p className="leading-relaxed">
                    Мы знаем, как важен каждый праздник, и создали этот сервис, чтобы ты мог за пару минут сделать яркие, стильные приглашения в тематике лазертага и космических приключений.
                  </p>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-slate-800/60 backdrop-blur-md border-2 border-yellow-500/30 hover:border-yellow-400 transition-all hover:scale-105">
                  <Icon name="Zap" size={40} className="text-yellow-400 mb-4" />
                  <h3 className="text-2xl font-black text-yellow-400 mb-3">Быстро</h3>
                  <p className="text-cyan-100">Создай приглашение за 2 минуты! Никаких сложных программ и редакторов.</p>
                </Card>

                <Card className="p-6 bg-slate-800/60 backdrop-blur-md border-2 border-red-500/30 hover:border-red-400 transition-all hover:scale-105">
                  <Icon name="Sparkles" size={40} className="text-red-400 mb-4" />
                  <h3 className="text-2xl font-black text-red-400 mb-3">Стильно</h3>
                  <p className="text-cyan-100">Яркий дизайн в стиле лазертаг-арены с неоновыми эффектами.</p>
                </Card>

                <Card className="p-6 bg-slate-800/60 backdrop-blur-md border-2 border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-105">
                  <Icon name="Download" size={40} className="text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-black text-cyan-400 mb-3">Удобно</h3>
                  <p className="text-cyan-100">Скачай готовое изображение и отправь друзьям в мессенджерах.</p>
                </Card>

                <Card className="p-6 bg-slate-800/60 backdrop-blur-md border-2 border-purple-500/30 hover:border-purple-400 transition-all hover:scale-105">
                  <Icon name="Heart" size={40} className="text-purple-400 mb-4" />
                  <h3 className="text-2xl font-black text-purple-400 mb-3">Бесплатно</h3>
                  <p className="text-cyan-100">Создавай неограниченное количество пригласительных совершенно бесплатно!</p>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-r from-yellow-500/20 via-red-500/20 to-cyan-500/20 backdrop-blur-md border-2 border-white/20 text-center">
                <Icon name="MessageCircle" size={48} className="mx-auto text-cyan-400 mb-4" />
                <h3 className="text-3xl font-black text-white mb-4">Есть вопросы?</h3>
                <p className="text-cyan-100 text-lg mb-6">Свяжись с нами, и мы с радостью поможем!</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-6 py-3 rounded-xl">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (999) 123-45-67
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-xl">
                    <Icon name="Mail" size={20} className="mr-2" />
                    info@lazertag-party.ru
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-center text-cyan-300/70 pb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Target" size={20} />
            <p className="font-bold">ЛАЗЕРТАГ ПАТИ © 2024</p>
            <Icon name="Zap" size={20} />
          </div>
          <p className="text-sm">Делаем праздники незабываемыми! 🎯🚀</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;