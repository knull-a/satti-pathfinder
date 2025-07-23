import { useAuth } from "@/contexts/AuthContext";
import TeenagerDashboard from "@/components/dashboards/TeenagerDashboard";
import EmployerDashboard from "@/components/dashboards/EmployerDashboard";
import Header from "@/components/Header";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();

  // Redirect to home if not authenticated
  if (!user) {
    return <Navigate to="/" replace />;
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'teenager':
        return <TeenagerDashboard />;
      case 'employer':
        return <EmployerDashboard />;
      case 'mentor':
        return (
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Панель наставника</h1>
              <p className="text-muted-foreground">В разработке...</p>
            </div>
          </div>
        );
      case 'admin':
        return (
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Админ-панель</h1>
              <p className="text-muted-foreground">В разработке...</p>
            </div>
          </div>
        );
      default:
        return <Navigate to="/" replace />;
    }
  };

  return (
    <>
      <Header />
      {renderDashboard()}
    </>
  );
};

export default Dashboard;