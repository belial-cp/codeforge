'use client'

import * as React from 'react'
import { Code, FileCode, Languages, Layout, MessageSquare, Settings, Shield, TestTube, Type, Wrench } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Textarea } from '@/components/ui/textarea'

export default function CodeConfigSidebar() {
  const [config, setConfig] = React.useState({
    language: "python",
    indent_style: "space",
    indent_size: 4,
    max_line_length: 80,
    include_comments: true,
    comment_style: "inline",
    code_complexity: "intermediate",
    use_typing: true,
    use_modern_syntax: true,
    include_function_docstrings: true,
    split_into_functions: true,
    include_main: true,
    safe_mode: true,
    include_logging: false,
    generate_unit_tests: false,
    test_framework: "pytest",
    naming_convention: "snake_case",
    variable_prefix: "",
  })

  const [userQuery, setUserQuery] = React.useState("")

  const updateConfig = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = () => {
    console.log("Configuration:", config)
    console.log("User Query:", userQuery)
    // Here you would handle the submission, e.g., send to an API
  }

  const programmingLanguages = [
    "python", "javascript", "typescript", "java", "c++", "c#", "go", "rust", "php", "ruby"
  ]

  const testFrameworks = {
    "python": ["pytest", "unittest"],
    "javascript": ["jest", "mocha", "jasmine"],
    "typescript": ["jest", "mocha", "jasmine"],
    "java": ["junit", "testng"],
    "c++": ["googletest", "catch2"],
    "c#": ["nunit", "xunit", "mstest"],
    "go": ["testing", "testify"],
    "rust": ["cargo test"],
    "php": ["phpunit"],
    "ruby": ["rspec", "minitest"]
  }

  return (
    <SidebarProvider>
      <Sidebar className="border-r">
        <SidebarHeader className="px-4 py-2">
          <div className="flex items-center gap-2">
            <FileCode className="h-6 w-6" />
            <h2 className="text-lg font-semibold">Code Generator Config</h2>
          </div>
        </SidebarHeader>
        
        <SidebarContent>
          {/* Style Formatting */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <Layout className="mr-2 h-4 w-4" />
              Style Formatting
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-4 px-4">
              <div className="space-y-2">
                <Label htmlFor="indent-style">Indent Style</Label>
                <RadioGroup 
                  id="indent-style" 
                  value={config.indent_style}
                  onValueChange={(value) => updateConfig('indent_style', value)}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="space" id="space" />
                    <Label htmlFor="space">Space</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tab" id="tab" />
                    <Label htmlFor="tab">Tab</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="indent-size">Indent Size: {config.indent_size}</Label>
                <Slider 
                  id="indent-size"
                  min={1} 
                  max={8} 
                  step={1}
                  value={[config.indent_size]}
                  onValueChange={(value) => updateConfig('indent_size', value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="max-line-length">Max Line Length: {config.max_line_length}</Label>
                <Slider 
                  id="max-line-length"
                  min={40} 
                  max={120} 
                  step={1}
                  value={[config.max_line_length]}
                  onValueChange={(value) => updateConfig('max_line_length', value[0])}
                />
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Comments */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <MessageSquare className="mr-2 h-4 w-4" />
              Comments
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-4 px-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="include-comments" 
                  checked={config.include_comments}
                  onCheckedChange={(checked) => updateConfig('include_comments', checked)}
                />
                <Label htmlFor="include-comments">Include Comments</Label>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="comment-style">Comment Style</Label>
                <RadioGroup 
                  id="comment-style" 
                  value={config.comment_style}
                  onValueChange={(value) => updateConfig('comment_style', value)}
                  className="flex space-x-4"
                  disabled={!config.include_comments}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="inline" id="inline" />
                    <Label htmlFor="inline">Inline</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="block" id="block" />
                    <Label htmlFor="block">Block</Label>
                  </div>
                </RadioGroup>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Programming Language */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <Languages className="mr-2 h-4 w-4" />
              Programming Language
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-4 px-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select 
                  value={config.language}
                  onValueChange={(value) => updateConfig('language', value)}
                >
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {programmingLanguages.map(lang => (
                      <SelectItem key={lang} value={lang}>
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Code Style/Level */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <Code className="mr-2 h-4 w-4" />
              Code Style/Level
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-4 px-4">
              <div className="space-y-2">
                <Label htmlFor="code-complexity">Code Complexity</Label>
                <Select 
                  value={config.code_complexity}
                  onValueChange={(value) => updateConfig('code_complexity', value)}
                >
                  <SelectTrigger id="code-complexity">
                    <SelectValue placeholder="Select complexity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">Simple</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="use-typing" 
                  checked={config.use_typing}
                  onCheckedChange={(checked) => updateConfig('use_typing', checked)}
                />
                <Label htmlFor="use-typing">Use Type Annotations</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="use-modern-syntax" 
                  checked={config.use_modern_syntax}
                  onCheckedChange={(checked) => updateConfig('use_modern_syntax', checked)}
                />
                <Label htmlFor="use-modern-syntax">Use Modern Syntax</Label>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Code Structure */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <Wrench className="mr-2 h-4 w-4" />
              Code Structure
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-4 px-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="include-docstrings" 
                  checked={config.include_function_docstrings}
                  onCheckedChange={(checked) => updateConfig('include_function_docstrings', checked)}
                />
                <Label htmlFor="include-docstrings">Include Function Docstrings</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="split-functions" 
                  checked={config.split_into_functions}
                  onCheckedChange={(checked) => updateConfig('split_into_functions', checked)}
                />
                <Label htmlFor="split-functions">Split Into Functions</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="include-main" 
                  checked={config.include_main}
                  onCheckedChange={(checked) => updateConfig('include_main', checked)}
                />
                <Label htmlFor="include-main">Include Main Function</Label>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Security and Environment */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <Shield className="mr-2 h-4 w-4" />
              Security and Environment
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-4 px-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="safe-mode" 
                  checked={config.safe_mode}
                  onCheckedChange={(checked) => updateConfig('safe_mode', checked)}
                />
                <Label htmlFor="safe-mode">Safe Mode</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="include-logging" 
                  checked={config.include_logging}
                  onCheckedChange={(checked) => updateConfig('include_logging', checked)}
                />
                <Label htmlFor="include-logging">Include Logging</Label>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Testing */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <TestTube className="mr-2 h-4 w-4" />
              Testing
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-4 px-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="generate-tests" 
                  checked={config.generate_unit_tests}
                  onCheckedChange={(checked) => updateConfig('generate_unit_tests', checked)}
                />
                <Label htmlFor="generate-tests">Generate Unit Tests</Label>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="test-framework">Test Framework</Label>
                <Select 
                  value={config.test_framework}
                  onValueChange={(value) => updateConfig('test_framework', value)}
                  disabled={!config.generate_unit_tests}
                >
                  <SelectTrigger id="test-framework">
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    {testFrameworks[config.language as keyof typeof testFrameworks]?.map(framework => (
                      <SelectItem key={framework} value={framework}>
                        {framework}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Naming */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <Type className="mr-2 h-4 w-4" />
              Naming
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-4 px-4">
              <div className="space-y-2">
                <Label htmlFor="naming-convention">Naming Convention</Label>
                <Select 
                  value={config.naming_convention}
                  onValueChange={(value) => updateConfig('naming_convention', value)}
                >
                  <SelectTrigger id="naming-convention">
                    <SelectValue placeholder="Select convention" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="snake_case">snake_case</SelectItem>
                    <SelectItem value="camelCase">camelCase</SelectItem>
                    <SelectItem value="PascalCase">PascalCase</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="variable-prefix">Variable Prefix</Label>
                <Input 
                  id="variable-prefix" 
                  value={config.variable_prefix}
                  onChange={(e) => updateConfig('variable_prefix', e.target.value)}
                  placeholder="e.g., my_"
                />
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* User Query */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <Settings className="mr-2 h-4 w-4" />
              Your Code Request
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-4 px-4">
              <div className="space-y-2">
                <Label htmlFor="user-query">Enter your code request</Label>
                <Textarea 
                  id="user-query" 
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="Describe what code you want to generate..."
                  className="min-h-[100px]"
                />
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        
        <SidebarFooter className="p-4">
          <Button onClick={handleSubmit} className="w-full">
            Generate Code
          </Button>
        </SidebarFooter>
      </Sidebar>
      
      <div className="flex-1 p-4">
        <SidebarTrigger className="mb-4" />
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold mb-2">Current Configuration</h2>
          <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
            {JSON.stringify(config, null, 2)}
          </pre>
        </div>
      </div>
    </SidebarProvider>
  )
}