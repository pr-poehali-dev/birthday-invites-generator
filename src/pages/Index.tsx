import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import html2canvas from 'html2canvas';

interface InvitationData {
  name: string;
  address: string;
  location: string;
  timeFrom: string;
  timeTo: string;
}

const Index = () => {
  const [invitationData, setInvitationData] = useState<InvitationData>({
    name: '',
    address: '',
    location: '',
    timeFrom: '',
    timeTo: ''
  });
  
  const [selectedTemplate, setSelectedTemplate] = useState<'red' | 'teal'>('red');
  const invitationRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: keyof InvitationData, value: string) => {
    setInvitationData(prev => ({ ...prev, [field]: value }));
  };

  const handleDownload = async () => {
    if (invitationRef.current) {
      const canvas = await html2canvas(invitationRef.current, {
        scale: 3,
        backgroundColor: null,
        width: 809,
        height: 400
      });
      const link = document.createElement('a');
      link.download = `invitation-${invitationData.name || 'bunker'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const RedTemplate = () => (
    <div className="relative w-[809px] h-[400px] bg-gradient-to-b from-[#D32F2F] to-[#B71C1C] overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute top-12 left-8 w-20 h-20 text-white/80" viewBox="0 0 100 100" fill="none">
          <path d="M50 20 L30 35 L30 65 L50 80 L70 65 L70 35 Z" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M50 35 L40 42 L40 58 L50 65 L60 58 L60 42 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="50" r="5" fill="currentColor"/>
        </svg>

        <svg className="absolute top-20 right-16 w-16 h-16 text-white/70" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none"/>
          <line x1="50" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="2"/>
          <line x1="50" y1="75" x2="50" y2="95" stroke="currentColor" strokeWidth="2"/>
          <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="2"/>
          <line x1="75" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2"/>
        </svg>

        <svg className="absolute bottom-16 left-12 w-24 h-24 text-white/60" viewBox="0 0 100 100">
          <rect x="20" y="30" width="15" height="40" fill="currentColor"/>
          <rect x="40" y="30" width="20" height="40" fill="currentColor"/>
          <circle cx="50" cy="25" r="8" fill="currentColor"/>
          <polygon points="60,35 75,50 60,65" fill="currentColor"/>
        </svg>

        <svg className="absolute bottom-24 right-12 w-20 h-20 text-white/70" viewBox="0 0 100 100">
          <path d="M30 50 Q50 30 70 50 Q50 70 30 50" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="50" cy="50" r="8" fill="currentColor"/>
          <line x1="50" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="2"/>
          <line x1="50" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="2"/>
        </svg>

        <svg className="absolute top-1/2 left-6 -translate-y-1/2 w-14 h-14 text-white/60" viewBox="0 0 100 100">
          <path d="M20 50 L35 35 L35 45 L65 45 L65 35 L80 50 L65 65 L65 55 L35 55 L35 65 Z" fill="currentColor"/>
        </svg>

        <svg className="absolute top-28 left-20 w-12 h-12 text-white/50" viewBox="0 0 100 100">
          <path d="M50 20 L60 40 L80 45 L65 60 L68 80 L50 70 L32 80 L35 60 L20 45 L40 40 Z" fill="currentColor"/>
        </svg>

        <svg className="absolute bottom-32 right-28 w-16 h-16 text-white/60" viewBox="0 0 100 100">
          <path d="M30 70 Q30 50 50 50 Q70 50 70 30" stroke="currentColor" strokeWidth="4" fill="none"/>
          <path d="M50 50 L50 20 M35 35 L50 20 L65 35" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="30" cy="70" r="6" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-center text-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <div className="space-y-4">
          <div className="text-3xl font-bold leading-tight">
            <span className="bg-white text-[#D32F2F] px-3 py-1 inline-block rounded-md mr-2">
              {invitationData.name || '________'}
            </span>
            <span>, я буду отмечать свой День Рождения</span>
          </div>
          
          <div className="text-3xl font-bold">
            в Лазертаг-клубе «BUNKER»
          </div>

          <div className="text-3xl font-bold flex items-center gap-2">
            <span>по адресу</span>
            <span className="bg-white text-[#D32F2F] px-3 py-1 rounded-md">
              {invitationData.address || '________________________'}
            </span>
          </div>

          <div className="text-3xl font-bold flex items-center gap-2">
            <span>на площадке</span>
            <span className="bg-white text-[#D32F2F] px-3 py-1 rounded-md">
              {invitationData.location || '______________'}
            </span>
          </div>

          <div className="text-3xl font-bold flex items-center gap-2">
            <span>с</span>
            <span className="bg-white text-[#D32F2F] px-2 py-1 rounded-md w-24 text-center">
              {invitationData.timeFrom || '_____'}
            </span>
            <span>до</span>
            <span className="bg-white text-[#D32F2F] px-2 py-1 rounded-md w-24 text-center">
              {invitationData.timeTo || '_____'}
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-4 border-[#8B1818]">
          <div className="text-5xl font-black text-center tracking-wider">
            БУДУ ЖДАТЬ ТЕБЯ!
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 w-20 h-20 z-20">
        <svg viewBox="0 0 100 100" className="text-white">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none"/>
          <text x="50" y="42" fontSize="24" fontWeight="bold" textAnchor="middle" fill="currentColor">BUNKER</text>
          <text x="50" y="62" fontSize="12" textAnchor="middle" fill="currentColor">LASERTAG CLUB</text>
        </svg>
      </div>
    </div>
  );

  const TealTemplate = () => (
    <div className="relative w-[809px] h-[400px] bg-gradient-to-b from-[#00897B] to-[#00695C] overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute top-12 left-8 w-20 h-20 text-[#FFB74D]/80" viewBox="0 0 100 100" fill="none">
          <ellipse cx="35" cy="50" rx="15" ry="25" fill="currentColor"/>
          <ellipse cx="65" cy="50" rx="15" ry="25" fill="currentColor"/>
          <circle cx="50" cy="50" r="20" fill="currentColor"/>
          <line x1="20" y1="50" x2="10" y2="45" stroke="currentColor" strokeWidth="3"/>
          <line x1="20" y1="50" x2="10" y2="55" stroke="currentColor" strokeWidth="3"/>
          <line x1="80" y1="50" x2="90" y2="45" stroke="currentColor" strokeWidth="3"/>
          <line x1="80" y1="50" x2="90" y2="55" stroke="currentColor" strokeWidth="3"/>
        </svg>

        <svg className="absolute top-32 left-20 w-14 h-14 text-[#FF6F00]/70" viewBox="0 0 100 100">
          <path d="M50 20 L60 40 L80 45 L65 60 L68 80 L50 70 L32 80 L35 60 L20 45 L40 40 Z" fill="currentColor"/>
        </svg>

        <svg className="absolute bottom-20 left-16 w-24 h-24 text-[#FFB74D]/60" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="25" ry="35" fill="currentColor"/>
          <circle cx="50" cy="30" r="8" fill="#00897B"/>
          <circle cx="40" cy="50" r="5" fill="#00897B"/>
          <circle cx="60" cy="50" r="5" fill="#00897B"/>
          <path d="M35 65 Q50 75 65 65" stroke="#00897B" strokeWidth="3" fill="none"/>
        </svg>

        <svg className="absolute top-20 right-20 w-16 h-16 text-[#FFA726]/80" viewBox="0 0 100 100">
          <circle cx="30" cy="50" r="8" fill="currentColor"/>
          <ellipse cx="55" cy="50" rx="20" ry="30" fill="currentColor"/>
          <line x1="75" y1="35" x2="85" y2="25" stroke="currentColor" strokeWidth="3"/>
          <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="3"/>
          <line x1="75" y1="65" x2="85" y2="75" stroke="currentColor" strokeWidth="3"/>
        </svg>

        <svg className="absolute bottom-28 right-16 w-18 h-18 text-[#4FC3F7]/70" viewBox="0 0 100 100">
          <path d="M50 20 L35 50 L50 45 L50 80 L65 50 L50 55 Z" fill="currentColor"/>
        </svg>

        <svg className="absolute top-1/2 right-8 -translate-y-1/2 w-12 h-12 text-[#FF7043]/60" viewBox="0 0 100 100">
          <circle cx="50" cy="30" r="8" fill="currentColor"/>
          <ellipse cx="50" cy="60" rx="12" ry="20" fill="currentColor"/>
        </svg>

        <svg className="absolute bottom-36 right-32 w-14 h-14 text-[#FFB74D]/50" viewBox="0 0 100 100">
          <circle cx="35" cy="35" r="8" fill="currentColor"/>
          <circle cx="65" cy="35" r="8" fill="currentColor"/>
          <circle cx="35" cy="65" r="8" fill="currentColor"/>
          <circle cx="65" cy="65" r="8" fill="currentColor"/>
          <rect x="35" y="35" width="30" height="30" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-center text-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <div className="space-y-4">
          <div className="text-3xl font-bold leading-tight">
            <span className="bg-white text-[#00897B] px-3 py-1 inline-block rounded-md mr-2">
              {invitationData.name || '________'}
            </span>
            <span>, я буду отмечать свой День Рождения</span>
          </div>
          
          <div className="text-3xl font-bold">
            в Лазертаг-клубе «BUNKER»
          </div>

          <div className="text-3xl font-bold flex items-center gap-2">
            <span>по адресу</span>
            <span className="bg-white text-[#00897B] px-3 py-1 rounded-md">
              {invitationData.address || '________________________'}
            </span>
          </div>

          <div className="text-3xl font-bold flex items-center gap-2">
            <span>на площадке</span>
            <span className="bg-white text-[#00897B] px-3 py-1 rounded-md">
              {invitationData.location || '______________'}
            </span>
          </div>

          <div className="text-3xl font-bold flex items-center gap-2">
            <span>с</span>
            <span className="bg-white text-[#00897B] px-2 py-1 rounded-md w-24 text-center">
              {invitationData.timeFrom || '_____'}
            </span>
            <span>до</span>
            <span className="bg-white text-[#00897B] px-2 py-1 rounded-md w-24 text-center">
              {invitationData.timeTo || '_____'}
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-4 border-[#00695C]">
          <div className="text-5xl font-black text-center tracking-wider">
            БУДУ ЖДАТЬ ТЕБЯ!
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 w-20 h-20 z-20">
        <svg viewBox="0 0 100 100" className="text-white">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none"/>
          <text x="50" y="42" fontSize="24" fontWeight="bold" textAnchor="middle" fill="currentColor">BUNKER</text>
          <text x="50" y="62" fontSize="12" textAnchor="middle" fill="currentColor">LASERTAG CLUB</text>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#121212] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black opacity-90"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-1 h-40 bg-gradient-to-b from-red-500 to-transparent animate-laser-shoot"></div>
        <div className="absolute top-40 right-20 w-1 h-40 bg-gradient-to-b from-[#00BCD4] to-transparent animate-laser-shoot" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-40 bg-gradient-to-b from-yellow-500 to-transparent animate-laser-shoot" style={{ animationDelay: '1.4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <Icon name="Target" size={28} className="text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white tracking-tight">
              ГЕНЕРАТОР ПРИГЛАСИТЕЛЬНЫХ
            </h1>
            <div className="w-12 h-12 bg-[#00BCD4] rounded-full flex items-center justify-center">
              <Icon name="Zap" size={28} className="text-white" />
            </div>
          </div>
          <p className="text-xl text-gray-400 font-medium">
            Лазертаг-клуб BUNKER
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <Card className="p-8 bg-[#1E1E1E] border-2 border-red-600/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="FileEdit" size={32} className="text-red-500" />
              <h2 className="text-3xl font-black text-white">Заполните данные</h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300 font-semibold text-base">
                  Имя именинника
                </Label>
                <Input
                  id="name"
                  placeholder="Введите имя"
                  value={invitationData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-[#2A2A2A] border-2 border-gray-700 focus:border-red-500 text-white text-lg h-12 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-gray-300 font-semibold text-base">
                  Адрес
                </Label>
                <Input
                  id="address"
                  placeholder="ул. Ленина, 123"
                  value={invitationData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="bg-[#2A2A2A] border-2 border-gray-700 focus:border-red-500 text-white text-lg h-12 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-gray-300 font-semibold text-base">
                  Площадка
                </Label>
                <Input
                  id="location"
                  placeholder="Красный зал"
                  value={invitationData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="bg-[#2A2A2A] border-2 border-gray-700 focus:border-red-500 text-white text-lg h-12 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timeFrom" className="text-gray-300 font-semibold text-base">
                    Время начала
                  </Label>
                  <Input
                    id="timeFrom"
                    type="time"
                    value={invitationData.timeFrom}
                    onChange={(e) => handleInputChange('timeFrom', e.target.value)}
                    className="bg-[#2A2A2A] border-2 border-gray-700 focus:border-red-500 text-white text-lg h-12 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeTo" className="text-gray-300 font-semibold text-base">
                    Время окончания
                  </Label>
                  <Input
                    id="timeTo"
                    type="time"
                    value={invitationData.timeTo}
                    onChange={(e) => handleInputChange('timeTo', e.target.value)}
                    className="bg-[#2A2A2A] border-2 border-gray-700 focus:border-red-500 text-white text-lg h-12 rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <Label className="text-gray-300 font-semibold text-base">Выберите дизайн</Label>
              <RadioGroup value={selectedTemplate} onValueChange={(value: 'red' | 'teal') => setSelectedTemplate(value)}>
                <div className="flex items-center space-x-2 p-3 bg-[#2A2A2A] rounded-lg border-2 border-gray-700 hover:border-red-500 transition-colors">
                  <RadioGroupItem value="red" id="red" />
                  <Label htmlFor="red" className="flex-1 cursor-pointer text-white font-medium">
                    Красный дизайн
                  </Label>
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded"></div>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-[#2A2A2A] rounded-lg border-2 border-gray-700 hover:border-[#00BCD4] transition-colors">
                  <RadioGroupItem value="teal" id="teal" />
                  <Label htmlFor="teal" className="flex-1 cursor-pointer text-white font-medium">
                    Бирюзовый дизайн
                  </Label>
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-700 rounded"></div>
                </div>
              </RadioGroup>
            </div>

            <Button 
              onClick={handleDownload}
              className="w-full h-14 text-xl font-black bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300"
            >
              <Icon name="Download" size={24} className="mr-3" />
              Скачать пригласительное
            </Button>
          </Card>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Eye" size={32} className="text-[#00BCD4]" />
              <h2 className="text-3xl font-black text-white">Предпросмотр</h2>
            </div>
            
            <div className="bg-[#1E1E1E] p-6 rounded-xl border-2 border-[#00BCD4]/30 shadow-2xl">
              <div className="flex justify-center items-center" style={{ transform: 'scale(0.7)', transformOrigin: 'top center' }}>
                <div ref={invitationRef}>
                  {selectedTemplate === 'red' ? <RedTemplate /> : <TealTemplate />}
                </div>
              </div>
            </div>

            <div className="bg-[#1E1E1E] p-6 rounded-xl border-2 border-yellow-500/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-black" />
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white mb-2">Как использовать:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Заполните все поля формы</li>
                    <li>• Выберите понравившийся дизайн</li>
                    <li>• Нажмите "Скачать пригласительное"</li>
                    <li>• Отправьте гостям в мессенджере</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
