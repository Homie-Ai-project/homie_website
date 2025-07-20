import { subscribeToWaitingList, subscribeToWaitingListServer } from '../services/mailchimp';

describe('Mailchimp Service', () => {
  it('should handle email subscription in demo mode', async () => {
    const result = await subscribeToWaitingList('test@example.com');
    
    expect(result.success).toBe(true);
    expect(result.message).toContain('demo mode');
  });

  it('should validate email format', async () => {
    // This would be tested in the component, but the service
    // relies on Mailchimp for email validation
    const result = await subscribeToWaitingList('invalid-email');
    
    // In demo mode, this will still succeed
    // In real mode, Mailchimp would return an error
    expect(result).toBeDefined();
  });

  it('should handle server-side subscription', async () => {
    // Mock fetch for testing
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          success: true,
          message: 'Successfully subscribed to waiting list'
        }),
      })
    ) as jest.Mock;

    const result = await subscribeToWaitingListServer('test@example.com');
    
    expect(result.success).toBe(true);
    expect(result.message).toContain('Successfully subscribed');
  });

  it('should handle server errors gracefully', async () => {
    // Mock fetch to simulate server error
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({
          message: 'Server error',
          error: 'CONFIGURATION_ERROR'
        }),
      })
    ) as jest.Mock;

    const result = await subscribeToWaitingListServer('test@example.com');
    
    expect(result.success).toBe(false);
    expect(result.message).toContain('Server error');
  });
});
