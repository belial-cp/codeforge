export default function MessageProp() {
	return (
		<div className='max-w-lg mx-auto w-full rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col'>
				<div className='flex-grow overflow-hidden'>
					<textarea ref={textareaRef} id='display-query' value={userQuery} onChange={e => setUserQuery(e.target.value)} placeholder='Type your message...' className='w-full p-3 resize-none outline-none min-h-[50px] max-h-[150px] overflow-y-auto' style={{ height: '50px' }} />
				</div>
				<div className='h-[40px] flex items-center justify-end px-3 bg-white'>
					<button onClick={generateCode} className='p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50' aria-label='Send message'>
						<Send size={18} />
					</button>
				</div>
			</div>
	)
}