import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react'
import axios from 'axios'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatBotProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:8000')

const suggestedQuestions = [
  "What are Aryan's main skills?",
  "Tell me about his projects",
  "What's his work experience?",
  "How can I contact Aryan?"
]

export default function ChatBot({ isOpen, setIsOpen }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      setMessages([
        {
          role: 'assistant',
          content: "Hi! I'm Aryan's AI assistant. 👋 I can answer questions about his skills, projects, experience, and more. How can I help you today?"
        }
      ])
    }
  }, [isOpen])

  const sendMessage = async (messageText?: string) => {
    const text = messageText || input
    if (!text.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await axios.post(`${API_URL}/api/chat`, {
        message: text,
        session_id: sessionId
      })

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.data.response
      }

      setMessages((prev) => [...prev, assistantMessage])
      setSessionId(response.data.session_id)
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please make sure the backend server is running, or feel free to email Aryan directly at aryankhandelwal243@gmail.com"
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        data-chat-toggle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all ${
          isOpen
            ? 'bg-dark-700 text-gray-400'
            : 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white animate-pulse-glow'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-140px)] glass rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-dark-600"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-accent-primary to-accent-secondary">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Chat with Aryan's AI</h3>
                  <p className="text-xs text-white/70">Ask about skills, projects & more</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      message.role === 'user'
                        ? 'bg-accent-primary'
                        : 'bg-dark-600'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User size={16} className="text-white" />
                    ) : (
                      <Bot size={16} className="text-accent-primary" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-accent-primary text-white rounded-tr-none'
                        : 'bg-dark-700 text-gray-200 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-dark-600 flex items-center justify-center">
                    <Bot size={16} className="text-accent-primary" />
                  </div>
                  <div className="bg-dark-700 p-3 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-accent-primary rounded-full typing-dot" />
                      <span className="w-2 h-2 bg-accent-primary rounded-full typing-dot" />
                      <span className="w-2 h-2 bg-accent-primary rounded-full typing-dot" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Suggested Questions */}
              {messages.length <= 1 && !isLoading && (
                <div className="mt-4">
                  <p className="text-xs text-gray-500 mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        onClick={() => sendMessage(question)}
                        className="px-3 py-1.5 bg-dark-700 hover:bg-dark-600 text-gray-300 text-xs rounded-full transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-dark-600">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Aryan's skills, projects..."
                  className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="p-3 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent-primary/25 transition-all"
                >
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Send size={20} />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by Groq AI • Trained on Aryan's resume
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
