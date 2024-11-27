import { useState, useEffect } from 'react';
import { Download, FileText, Map, Send, Link } from 'lucide-react';
import { toast} from 'sonner';


export default function PostCard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!', {
        style: {
          backgroundColor: '#5ac85a',
          color: 'white',           
        },
      });
    } catch (err) {
      toast.error('Failed to copy',{
        style: {
          backgroundColor:'#bd4747',      
          color: 'white',          
        },
      });
    }
  };


  return (
    <div className="text-white mx-auto rounded-lg max-w-lg">
      <div className="relative w-full h-34 mb-6">
        <img 
          src="./images/tmp.jpg" 
          alt="Post header" 
          className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-lg shadow-lg"
        />
      </div>

      <div className="space-y-2">
        {/* Title */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">
            Title
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a descriptive title"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-button-select-color transition-all"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add some details about your post"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-button-select-color transition-all"
            rows={4}
          />
        </div>

        {/* URL */}
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          {/* <Link size={16} className="text-gray-500 h-4 w-8" /> */}
          <span className="truncate max-w-full opacity-70">
            {currentUrl}
          </span>
          {currentUrl && (
              <Link 
                size={16} 
                onClick={() => handleCopy(currentUrl)} 
                className='hover:text-button-select-color text-gray-500 transition-colors w-8' 
              />
          )}
        </div>


        {/* Post Button */}
        <button
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-button-select-color text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-button-select-color transition-all duration-300 transform hover:scale-105"
        >
          <Send size={20} />
          <span>Post</span>
        </button>
      </div>
    </div>
  );
}
