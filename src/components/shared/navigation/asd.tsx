'use client'

import * as React from 'react'
import { Code, Languages, Layout, MessageSquare, Settings, Shield, TestTube, Type, Wrench } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'

// Типы для конфигурации
export interface CodeConfig {
	language: string
	indent_style: 'space' | 'tab'
	indent_size: number
	max_line_length: number
	include_comments: boolean
	comment_style: 'inline' | 'block'
	code_complexity: 'simple' | 'intermediate' | 'advanced'
	use_typing: boolean
	use_modern_syntax: boolean
	include_function_docstrings: boolean
	split_into_functions: boolean
	include_main: boolean
	safe_mode: boolean
	include_logging: boolean
	generate_unit_tests: boolean
	test_framework: string
	naming_convention: 'snake_case' | 'camelCase' | 'PascalCase'
	variable_prefix: string
}

interface CodeConfigOptionsProps {
	config: CodeConfig
	userQuery: string
	onConfigChange: (key: keyof CodeConfig, value: any) => void
	onUserQueryChange: (query: string) => void
	onSubmit: () => void
}

const programmingLanguages = ['python', 'javascript', 'typescript', 'java', 'c++', 'c#', 'go', 'rust', 'php', 'ruby']

const testFrameworks: Record<string, string[]> = {
	python: ['pytest', 'unittest'],
	javascript: ['jest', 'mocha', 'jasmine'],
	typescript: ['jest', 'mocha', 'jasmine'],
	java: ['junit', 'testng'],
	'c++': ['googletest', 'catch2'],
	'c#': ['nunit', 'xunit', 'mstest'],
	go: ['testing', 'testify'],
	rust: ['cargo test'],
	php: ['phpunit'],
	ruby: ['rspec', 'minitest'],
}

export function CodeConfigOptions({ config, userQuery, onConfigChange, onUserQueryChange, onSubmit }: CodeConfigOptionsProps) {
	return (
		<div className='flex flex-col gap-6'>
			{/* Style Formatting */}
			<div className='space-y-4'>
				<div className='flex items-center gap-2'>
					<Layout className='h-4 w-4' />
					<h3 className='font-medium'>Style Formatting</h3>
				</div>
				<div className='space-y-4 pl-6'>
					<div className='space-y-2'>
						<Label htmlFor='indent-style'>Indent Style</Label>
						<RadioGroup id='indent-style' value={config.indent_style} onValueChange={value => onConfigChange('indent_style', value)} className='flex space-x-4'>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='space' id='space' />
								<Label htmlFor='space'>Space</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='tab' id='tab' />
								<Label htmlFor='tab'>Tab</Label>
							</div>
						</RadioGroup>
					</div>

					<div className='space-y-2'>
						<Label htmlFor='indent-size'>Indent Size: {config.indent_size}</Label>
						<Slider id='indent-size' min={1} max={8} step={1} value={[config.indent_size]} onValueChange={value => onConfigChange('indent_size', value[0])} />
					</div>

					<div className='space-y-2'>
						<Label htmlFor='max-line-length'>Max Line Length: {config.max_line_length}</Label>
						<Slider id='max-line-length' min={40} max={120} step={1} value={[config.max_line_length]} onValueChange={value => onConfigChange('max_line_length', value[0])} />
					</div>
				</div>
			</div>

			{/* Comments */}
			<div className='space-y-4'>
				<div className='flex items-center gap-2'>
					<MessageSquare className='h-4 w-4' />
					<h3 className='font-medium'>Comments</h3>
				</div>
				<div className='space-y-4 pl-6'>
					<div className='flex items-center space-x-2'>
						<Checkbox id='include-comments' checked={config.include_comments} onCheckedChange={checked => onConfigChange('include_comments', !!checked)} />
						<Label htmlFor='include-comments'>Include Comments</Label>
					</div>

					<div className='space-y-2'>
						<Label htmlFor='comment-style'>Comment Style</Label>
						<RadioGroup id='comment-style' value={config.comment_style} onValueChange={value => onConfigChange('comment_style', value)} className='flex space-x-4' disabled={!config.include_comments}>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='inline' id='inline' />
								<Label htmlFor='inline'>Inline</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='block' id='block' />
								<Label htmlFor='block'>Block</Label>
							</div>
						</RadioGroup>
					</div>
				</div>
			</div>

			{/* Programming Language */}
			<div className='space-y-4'>
				<div className='flex items-center gap-2'>
					<Languages className='h-4 w-4' />
					<h3 className='font-medium'>Programming Language</h3>
				</div>
				<div className='space-y-4 pl-6'>
					<div className='space-y-2'>
						<Label htmlFor='language'>Language</Label>
						<Select value={config.language} onValueChange={value => onConfigChange('language', value)}>
							<SelectTrigger id='language'>
								<SelectValue placeholder='Select language' />
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
				</div>
			</div>

			{/* Code Style/Level */}
			<div className='space-y-4'>
				<div className='flex items-center gap-2'>
					<Code className='h-4 w-4' />
					<h3 className='font-medium'>Code Style/Level</h3>
				</div>
				<div className='space-y-4 pl-6'>
					<div className='space-y-2'>
						<Label htmlFor='code-complexity'>Code Complexity</Label>
						<Select value={config.code_complexity} onValueChange={value => onConfigChange('code_complexity', value)}>
							<SelectTrigger id='code-complexity'>
								<SelectValue placeholder='Select complexity' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='simple'>Simple</SelectItem>
								<SelectItem value='intermediate'>Intermediate</SelectItem>
								<SelectItem value='advanced'>Advanced</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className='flex items-center space-x-2'>
						<Checkbox id='use-typing' checked={config.use_typing} onCheckedChange={checked => onConfigChange('use_typing', !!checked)} />
						<Label htmlFor='use-typing'>Use Type Annotations</Label>
					</div>

					<div className='flex items-center space-x-2'>
						<Checkbox id='use-modern-syntax' checked={config.use_modern_syntax} onCheckedChange={checked => onConfigChange('use_modern_syntax', !!checked)} />
						<Label htmlFor='use-modern-syntax'>Use Modern Syntax</Label>
					</div>
				</div>
			</div>

			{/* Code Structure */}
			<div className='space-y-4'>
				<div className='flex items-center gap-2'>
					<Wrench className='h-4 w-4' />
					<h3 className='font-medium'>Code Structure</h3>
				</div>
				<div className='space-y-4 pl-6'>
					<div className='flex items-center space-x-2'>
						<Checkbox id='include-docstrings' checked={config.include_function_docstrings} onCheckedChange={checked => onConfigChange('include_function_docstrings', !!checked)} />
						<Label htmlFor='include-docstrings'>Include Function Docstrings</Label>
					</div>

					<div className='flex items-center space-x-2'>
						<Checkbox id='split-functions' checked={config.split_into_functions} onCheckedChange={checked => onConfigChange('split_into_functions', !!checked)} />
						<Label htmlFor='split-functions'>Split Into Functions</Label>
					</div>

					<div className='flex items-center space-x-2'>
						<Checkbox id='include-main' checked={config.include_main} onCheckedChange={checked => onConfigChange('include_main', !!checked)} />
						<Label htmlFor='include-main'>Include Main Function</Label>
					</div>
				</div>
			</div>

			{/* Security and Environment */}
			<div className='space-y-4'>
				<div className='flex items-center gap-2'>
					<Shield className='h-4 w-4' />
					<h3 className='font-medium'>Security and Environment</h3>
				</div>
				<div className='space-y-4 pl-6'>
					<div className='flex items-center space-x-2'>
						<Checkbox id='safe-mode' checked={config.safe_mode} onCheckedChange={checked => onConfigChange('safe_mode', !!checked)} />
						<Label htmlFor='safe-mode'>Safe Mode</Label>
					</div>

					<div className='flex items-center space-x-2'>
						<Checkbox id='include-logging' checked={config.include_logging} onCheckedChange={checked => onConfigChange('include_logging', !!checked)} />
						<Label htmlFor='include-logging'>Include Logging</Label>
					</div>
				</div>
			</div>

			{/* Testing */}
			<div className='space-y-4'>
				<div className='flex items-center gap-2'>
					<TestTube className='h-4 w-4' />
					<h3 className='font-medium'>Testing</h3>
				</div>
				<div className='space-y-4 pl-6'>
					<div className='flex items-center space-x-2'>
						<Checkbox id='generate-tests' checked={config.generate_unit_tests} onCheckedChange={checked => onConfigChange('generate_unit_tests', !!checked)} />
						<Label htmlFor='generate-tests'>Generate Unit Tests</Label>
					</div>

					<div className='space-y-2'>
						<Label htmlFor='test-framework'>Test Framework</Label>
						<Select value={config.test_framework} onValueChange={value => onConfigChange('test_framework', value)} disabled={!config.generate_unit_tests}>
							<SelectTrigger id='test-framework'>
								<SelectValue placeholder='Select framework' />
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
				</div>
			</div>

			{/* Naming */}
			<div className='space-y-4'>
				<div className='flex items-center gap-2'>
					<Type className='h-4 w-4' />
					<h3 className='font-medium'>Naming</h3>
				</div>
				<div className='space-y-4 pl-6'>
					<div className='space-y-2'>
						<Label htmlFor='naming-convention'>Naming Convention</Label>
						<Select value={config.naming_convention} onValueChange={value => onConfigChange('naming_convention', value as 'snake_case' | 'camelCase' | 'PascalCase')}>
							<SelectTrigger id='naming-convention'>
								<SelectValue placeholder='Select convention' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='snake_case'>snake_case</SelectItem>
								<SelectItem value='camelCase'>camelCase</SelectItem>
								<SelectItem value='PascalCase'>PascalCase</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className='space-y-2'>
						<Label htmlFor='variable-prefix'>Variable Prefix</Label>
						<Input id='variable-prefix' value={config.variable_prefix} onChange={e => onConfigChange('variable_prefix', e.target.value)} placeholder='e.g., my_' />
					</div>
				</div>
			</div>

			{/* User Query */}
			<div className='space-y-4'>
				<div className='flex items-center gap-2'>
					<Settings className='h-4 w-4' />
					<h3 className='font-medium'>Your Code Request</h3>
				</div>
				<div className='space-y-4 pl-6'>
					<div className='space-y-2'>
						<Label htmlFor='user-query'>Enter your code request</Label>
						<Textarea id='user-query' value={userQuery} onChange={e => onUserQueryChange(e.target.value)} placeholder='Describe what code you want to generate...' className='min-h-[100px]' />
					</div>
				</div>
			</div>

			{/* Submit Button */}
			<Button onClick={onSubmit} className='w-full'>
				Generate Code
			</Button>
		</div>
	)
}
