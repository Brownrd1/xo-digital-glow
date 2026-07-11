create table if not exists public.website_enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 5 and 254),
  company text check (company is null or char_length(company) <= 160),
  website text check (website is null or char_length(website) <= 500),
  interest text not null check (interest in ('early_access', 'free', 'pro', 'enterprise', 'agency', 'other')),
  message text not null check (char_length(message) between 20 and 4000),
  source_path text not null default '/',
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed', 'spam')),
  consent_at timestamptz not null
);

alter table public.website_enquiries enable row level security;

revoke all on public.website_enquiries from anon, authenticated;
grant insert on public.website_enquiries to anon, authenticated;

create policy "public may submit website enquiries"
on public.website_enquiries
for insert
to anon, authenticated
with check (
  status = 'new'
  and consent_at <= now()
  and consent_at > now() - interval '1 hour'
);

create index if not exists website_enquiries_created_at_idx
on public.website_enquiries (created_at desc);

comment on table public.website_enquiries is
'Private XO Digital website enquiries. Public roles may insert only; rows are not publicly readable.';
