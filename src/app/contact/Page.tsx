import { useState } from "react";

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
    wantsToParticipate: boolean;
    audioFile: File | null;
  }>({
    name: "",
    email: "",
    message: "",
    wantsToParticipate: false,
    audioFile: null,
  });

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    alert("Form submitted! Thanks for reaching out. We'll get back to you soon.");
    
    setFormData({
      name: "",
      email: "",
      message: "",
      wantsToParticipate: false,
      audioFile: null,
    });
    
    setIsSubmitting(false);
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8">
          <p className="mb-6">
            Have a question, suggestion, or want to be featured on the show? Fill out the form below and we'll get back to you!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input 
                id="name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input 
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea 
                id="message"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input 
                id="participate"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                checked={formData.wantsToParticipate}
                onChange={(e) => setFormData({...formData, wantsToParticipate: e.target.checked})}
              />
              <label htmlFor="participate" className="text-sm font-medium">I want to participate in a future episode</label>
            </div>
            
            {formData.wantsToParticipate && (
              <div className="space-y-2">
                <label htmlFor="audioFile" className="block text-sm font-medium">Upload your audio sample (optional)</label>
                <input 
                  id="audioFile"
                  type="file"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                  accept="audio/*"
                  onChange={(e) => setFormData({...formData, audioFile: e.target.files?.[0] || null})}
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Share a brief introduction or your thoughts on a web development topic (max 2 minutes)
                </p>
              </div>
            )}
            
            <button 
              type="submit" 
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Join the Community</h2>
          <p className="mb-4">
            CodeWaves is more than just a podcast—it's a community of web developers sharing knowledge and experiences.
          </p>
          <p>
            Follow us on Twitter <a href="#" className="text-purple-600 hover:underline">@CodeWavesPod</a> and join our Discord community for discussions, resources, and exclusive content.
          </p>
        </div>
      </div>
    </main>
  );
}
