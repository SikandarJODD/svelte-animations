<script>
  import Badge from "$lib/components/ui/badge/badge.svelte";

  import Check from "lucide-svelte/icons/check";
  import * as Card from "$lib/components/ui/card/index";
  import Button from "$lib/components/ui/button/button.svelte";

  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];
</script>

<div  class='mb-32'>
  <div class="flex justify-center items-center h-52 gap-4">
    <Button variant="success">Svelte</Button>
    <Button variant="shine">Button</Button>
    <Button variant="animated">Svelte</Button>
    <Button variant="danger">Button</Button>
  </div>
  <div class="flex justify-center items-center h-36 gap-4">
    <Badge variant="shine">Svelte</Badge>
    <Badge variant="animated">Svelte</Badge>
    <Badge variant="rotate_shine">Svelte</Badge>
    <Badge variant="default">Svelte</Badge>
    <Badge variant="outline">Svelte</Badge>
    <Badge variant="destructive">Svelte</Badge>
    <Badge variant="secondary">Svelte</Badge>
    <Badge variant="success">Svelte</Badge>
  </div>
  <div class="flex justify-center items-center min-h-64">
    <Card.Root class="w-[380px]">
      <Card.Header>
        <Card.Title>Notifications</Card.Title>
        <Card.Description>You have 3 unread messages.</Card.Description>
      </Card.Header>
      <Card.Content class="grid gap-4">
        
        <div>
          {#each notifications as notification, idx (idx)}
            <div
              class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span
                class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"
              />
              <div class="space-y-1">
                <p class="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p class="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </Card.Content>
      <Card.Footer>
        <Button class="w-full">
          <Check class="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </Card.Footer>
    </Card.Root>
  </div>
</div>
