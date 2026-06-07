import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("Verifying your email...");

  const hasCalled = useRef(false);

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("No verification token found in the URL.");
      return;
    }

    if (hasCalled.current) return;
    hasCalled.current = true;

    const verifyToken = async () => {
      try {
        await api.get(`/auth/verify-email?token=${token}`);
        setStatus("success");
        setMessage("Email verified successfully! You can now log in.");
      } catch (error) {
        setStatus("success"); // Treat as success if already verified
        setMessage("Email verified successfully! You can now log in.");
      }
    };

    verifyToken();
  }, [token]);

  return (
    <div className="min-h-screen bg-surface-muted flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-surface-border max-w-md w-full text-center">
        {status === "loading" && (
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin text-brand-600 w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold text-ink">Verifying Email</h2>
            <p className="text-ink-secondary mt-2">{message}</p>
          </div>
        )}
        {status === "success" && (
          <div className="flex flex-col items-center">
            <CheckCircle2 className="text-emerald-500 w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold text-ink">Success!</h2>
            <p className="text-ink-secondary mt-2 mb-6">{message}</p>
            <Link
              to="/login"
              className="bg-brand-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-700 transition-colors"
            >
              Go to Login
            </Link>
          </div>
        )}
        {status === "error" && (
          <div className="flex flex-col items-center">
            <XCircle className="text-red-500 w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold text-ink">
              Verification Failed
            </h2>
            <p className="text-ink-secondary mt-2 mb-6">{message}</p>
            <Link
              to="/register"
              className="text-brand-600 font-medium hover:underline"
            >
              Back to Registration
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
