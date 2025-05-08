// app/developer/page.tsx
'use client';

import Editor from '@monaco-editor/react';
import { Copy, Check, Play, Rocket, ChevronDown } from 'lucide-react';

export default function DeveloperPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-50">
      {/* Problem Panel */}
      <div className="w-1/2 overflow-hidden flex flex-col border-r border-gray-200">
        <div className="p-6 overflow-y-auto flex-1">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">String Reversal</h2>
                <p className="text-gray-500 mt-1">Python • Strings</p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Easy
              </span>
            </div>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-700 mb-4">
                Write a Python function that takes a string as input and returns the reversed string without using built-in reverse methods or slicing.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Example</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
                    <span className="text-sm text-gray-300">Python</span>
                    <button className="text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <pre className="p-4 text-gray-100 font-mono text-sm">
                    <code>reverse_string("hello") → "olleh"</code>
                  </pre>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Constraints</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>1 ≤ input_string.length ≤ 1000</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No using [::-1] or reversed()</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                Hint
              </button>
              <button className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                Solution
              </button>
            </div>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
              <span className="flex items-center">
                <Rocket className="h-4 w-4 mr-2" />
                Run Tests
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Editor Panel */}
      <div className="w-1/2 flex flex-col bg-[#1e1e1e]">
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-300">solution.py</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-gray-200">
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="python"
            defaultValue={`def reverse_string(input_string: str) -> str:\n    \"\"\"\n    Reverse the input string without using slicing or built-in reverse methods.\n    \n    Args:\n        input_string (str): The string to be reversed\n        \n    Returns:\n        str: The reversed string\n    \"\"\"\n    # Your implementation here\n    reversed_str = ""\n    \n    return reversed_str`}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: 'on',
              padding: { top: 20 },
              renderWhitespace: 'selection',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              lineNumbers: 'on',
              renderLineHighlight: 'all',
            }}
          />
        </div>
        
        <div className="border-t border-gray-700 p-4 bg-gray-800">
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-sm font-medium rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 flex items-center">
                <Play className="h-4 w-4 mr-2" />
                Run Code
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700">
                Submit
              </button>
            </div>
            <div className="flex items-center">
              <div className="text-xs text-gray-400 mr-2">Python 3.11</div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}