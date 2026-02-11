
import React, { useState, useEffect } from 'react';
import { User, Expert, ServiceRequest } from './types';
import Onboarding from './components/Onboarding';
import Layout from './components/Layout';
import ClientDashboard from './components/ClientDashboard';
import ExpertDashboard from './components/ExpertDashboard';
import ExpertProfile from './components/ExpertProfile';
import RequestHistory from './components/RequestHistory';
import Wallet from './components/Wallet';
import Swal from 'sweetalert2';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentScreen, setCurrentScreen] = useState<string>('splash');
  const [navigationStack, setNavigationStack] = useState<string[]>(['splash']);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);

  const navigateTo = (screen: string) => {
    setNavigationStack(prev => [...prev, screen]);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      newStack.pop();
      const prevScreen = newStack[newStack.length - 1];
      setNavigationStack(newStack);
      setCurrentScreen(prevScreen);
    } else {
      navigateTo(currentUser?.role === 'client' ? 'client_dashboard' : 'expert_dashboard');
    }
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    const initialScreen = user.role === 'client' ? 'client_dashboard' : 'expert_dashboard';
    setNavigationStack([initialScreen]);
    setCurrentScreen(initialScreen);
    
    Swal.fire({
      title: 'أهلاً بك في سُو',
      text: `مرحباً بك ${user.name} في منصة التميز السودانية`,
      icon: 'success',
      confirmButtonText: 'ابدأ الرحلة',
      confirmButtonColor: '#5D0E0E',
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setNavigationStack(['onboarding']);
    setCurrentScreen('onboarding');
  };

  const handleRequestService = (expert: Expert, serviceName: string, price: number) => {
    if (!currentUser) return;

    const newRequest: ServiceRequest = {
      id: `req-${Date.now()}`,
      clientId: currentUser.id,
      expertId: expert.id,
      expertName: expert.name,
      serviceName,
      price,
      status: 'pending',
      date: new Date().toLocaleDateString('ar-EG'),
      time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
    };

    setRequests([newRequest, ...requests]);
    Swal.fire({
      title: 'تم إرسال الطلب',
      text: 'طلبك الآن قيد المراجعة من قبل الخبير',
      icon: 'success',
      confirmButtonText: 'متابعة الطلبات',
      confirmButtonColor: '#D4AF37',
    });
    navigateTo('requests');
  };

  const renderScreen = () => {
    if (!currentUser && currentScreen !== 'splash' && currentScreen !== 'onboarding') {
      return <Onboarding onComplete={handleLogin} />;
    }

    switch (currentScreen) {
      case 'splash':
        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-royal-darkMaroon text-white damask-pattern relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-royal-maroon/20 to-royal-darkMaroon"></div>
            
            <div className="relative z-10 animate-pulse scale-110">
              <div className="relative w-48 h-48 border-[6px] border-royal-gold rounded-full flex flex-col items-center justify-center bg-royal-maroon shadow-[0_0_80px_rgba(212,175,55,0.4)]">
                 <div className="text-7xl font-black tracking-tighter text-white drop-shadow-2xl italic">SU</div>
                 <div className="mt-2 text-center">
                    <div className="text-sm font-bold tracking-[0.4em] text-royal-gold uppercase">ROYAL SERVICES</div>
                 </div>
              </div>
            </div>
            
            <div className="absolute bottom-20 z-10 flex flex-col items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-2 h-2 rounded-full bg-royal-gold animate-bounce`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
              <p className="text-royal-lightGold/60 text-xs font-bold tracking-[0.2em] uppercase">Excellence in every touch</p>
            </div>
          </div>
        );
      case 'onboarding':
        return <Onboarding onComplete={handleLogin} />;
      case 'client_dashboard':
        return <ClientDashboard user={currentUser!} onExpertSelect={(e) => { setSelectedExpert(e); navigateTo('profile'); }} />;
      case 'expert_dashboard':
        return <ExpertDashboard user={currentUser!} requests={requests.filter(r => r.expertId === currentUser?.id)} setRequests={setRequests} />;
      case 'profile':
        return selectedExpert ? <ExpertProfile expert={selectedExpert} onBack={goBack} onRequest={handleRequestService} /> : null;
      case 'requests':
        return <RequestHistory requests={requests} onBack={goBack} />;
      case 'wallet':
        return <Wallet user={currentUser!} onBack={goBack} />;
      default:
        return <Onboarding onComplete={handleLogin} />;
    }
  };

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding');
        setNavigationStack(['onboarding']);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-royal-silk shadow-2xl relative overflow-x-hidden font-tajawal">
      {currentUser && (
        <Layout user={currentUser} onNavigate={navigateTo} onBack={goBack} currentScreen={currentScreen} onLogout={handleLogout}>
          <div className="page-transition min-h-full">
            {renderScreen()}
          </div>
        </Layout>
      )}
      {!currentUser && renderScreen()}
    </div>
  );
};

export default App;
